import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, User, Star, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const MEGA_MENU_ITEMS = [
  {
    title: "Scotch Whisky",
    href: "/shop",
    columns: [
      { title: "Regions", links: ["Islay", "Speyside", "Highland", "Campbeltown", "Lowland"] },
      { title: "Types", links: ["Single Malt", "Blended Scotch", "Grain Whisky"] },
    ],
    featuredLink: "Shop All Scotch →"
  },
  {
    title: "World Spirits",
    href: "/shop",
    columns: [
      { title: "Gin", links: ["London Dry", "Contemporary", "Sloe"] },
      { title: "Rum", links: ["Dark", "Spiced", "White"] },
      { title: "Others", links: ["Tequila", "Cognac", "Bourbon"] },
    ],
    featuredLink: "Shop All World Spirits →"
  },
  {
    title: "Old & Rare",
    href: "/shop",
    isFullWidth: true,
    columns: [
      { title: "Exclusive", links: ["Rare Casks", "Distillery Exclusives", "Collector's Corner"] }
    ]
  },
  {
    title: "Gifts",
    href: "/shop",
    columns: [
      { title: "Curated", links: ["By Recipient", "By Price", "Gift Sets", "Personalised"] }
    ]
  },
  {
    title: "Inspiration Hub",
    href: "/",
    columns: [
      { title: "Read", links: ["Tasting Guides", "Distillery Stories", "The NyaLiqour Journal"] }
    ]
  },
  { title: "Offers", href: "/shop", isDirect: true }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-obsidian text-foreground text-xs py-1.5 px-4 hidden md:flex justify-between items-center border-b border-border/30">
        <div className="font-medium tracking-wide">Free Mombasa & Nairobi Delivery on orders over Ksh 5,000</div>
        <div className="flex items-center gap-2">
          <div className="flex text-[#FFB626]">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
          </div>
          <span className="text-muted-foreground">4.9/5 from 12,847 reviews</span>
        </div>
        <div className="flex gap-4 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Trade</a>
          <a href="#" className="hover:text-foreground transition-colors">Events</a>
          <a href="#" className="hover:text-foreground transition-colors">Customer Service</a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300 w-full bg-background/95 backdrop-blur-md border-b",
          scrolled ? "border-primary shadow-lg" : "border-border/30"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} className="text-foreground" />
          </button>

          <Link href="/" className="flex-shrink-0">
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-primary">NyaLiqour</h1>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <input 
              type="text" 
              placeholder="Search spirits, brands, regions..." 
              className="w-full bg-secondary/50 text-foreground border border-border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden md:flex flex-col items-center hover:text-primary transition-colors">
              <User size={22} className="mb-0.5" />
              <span className="text-[10px] uppercase tracking-wider hidden lg:block">Account</span>
            </button>
            <button className="flex flex-col items-center hover:text-primary transition-colors relative">
              <ShoppingBag size={22} className="mb-0.5" />
              <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">2</span>
              <span className="text-[10px] uppercase tracking-wider hidden lg:block">Basket</span>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block max-w-[1600px] mx-auto px-8" onMouseLeave={() => setActiveMenu(null)}>
          <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground pb-4">
            {MEGA_MENU_ITEMS.map((item) => (
              <li key={item.title} onMouseEnter={() => !item.isDirect && setActiveMenu(item.title)}>
                <Link 
                  href={item.href} 
                  className={clsx(
                    "hover:text-primary transition-colors pb-4 border-b-2 border-transparent",
                    activeMenu === item.title && "text-primary border-primary"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full w-full bg-obsidian border-t border-border shadow-2xl overflow-hidden"
              >
                {MEGA_MENU_ITEMS.map((item) => (
                  item.title === activeMenu && item.columns && (
                    <div 
                      key={item.title} 
                      className={clsx(
                        "max-w-[1600px] mx-auto p-8",
                        item.isFullWidth ? "bg-[#0A1128] text-primary" : "bg-obsidian"
                      )}
                    >
                      <div className="flex gap-16">
                        {item.columns.map((col, idx) => (
                          <div key={idx} className="min-w-[180px]">
                            <h3 className="font-display text-lg mb-4 text-foreground">{col.title}</h3>
                            <ul className="space-y-3">
                              {col.links.map(link => (
                                <li key={link}>
                                  <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="ml-auto bg-card/5 p-6 rounded-xl border border-border/50 max-w-sm">
                          <h4 className="font-display text-xl mb-2 text-foreground">Curated for You</h4>
                          <p className="text-sm text-muted-foreground mb-4">Discover the finest selections hand-picked by our master sommeliers.</p>
                          <Link href="/shop" className="text-primary hover:text-primary/80 font-medium inline-flex items-center text-sm transition-colors uppercase tracking-widest">
                            {item.featuredLink || "Explore Collection →"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background w-4/5 border-r border-border flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-border">
              <h2 className="font-display text-xl font-bold text-primary">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {MEGA_MENU_ITEMS.map(item => (
                <Link 
                  key={item.title} 
                  href={item.href}
                  className="flex items-center justify-between py-3 border-b border-border/30 text-foreground font-medium uppercase tracking-wide"
                >
                  {item.title}
                  {!item.isDirect && <ChevronRight size={16} className="text-muted-foreground" />}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
