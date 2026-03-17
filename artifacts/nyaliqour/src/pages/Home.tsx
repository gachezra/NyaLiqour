import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { clsx } from "clsx";

const HERO_SLIDES = [
  {
    image: `${import.meta.env.BASE_URL}images/hero-1.png`,
    title: "The Art of the Pour",
    subtitle: "Discover our curated collection of the world's finest spirits",
    cta: "Explore Collection",
    href: "/shop"
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-2.png`,
    title: "Old & Rare",
    subtitle: "Exceptional bottles from closed distilleries and lost vintages",
    cta: "Shop Old & Rare",
    href: "/shop"
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-3.png`,
    title: "Gift with Distinction",
    subtitle: "The perfect expression for every occasion",
    cta: "Find a Gift",
    href: "/shop"
  }
];

const FLAVOUR_CAMPS = [
  { name: "Peaty & Smoky", img: `${import.meta.env.BASE_URL}images/flavour-peaty.png` },
  { name: "Rich & Fruity", img: `${import.meta.env.BASE_URL}images/flavour-fruity.png` },
  { name: "Light & Floral", img: `${import.meta.env.BASE_URL}images/flavour-floral.png` },
  { name: "Sweet & Vanilla", img: `${import.meta.env.BASE_URL}images/flavour-sweet.png` },
  { name: "Spiced & Bold", img: `${import.meta.env.BASE_URL}images/flavour-spiced.png` },
  { name: "Fresh & Zesty", img: `${import.meta.env.BASE_URL}images/flavour-fresh.png` },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: trendingProducts, isLoading } = useProducts({ sortBy: 'popular' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(s => (s + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* HERO SLIDER */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-obsidian">
        {HERO_SLIDES.map((slide, idx) => (
          <div 
            key={idx} 
            className={clsx(
              "absolute inset-0 transition-opacity duration-1000",
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-background/60 to-transparent z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex items-center max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">
              <div className="max-w-2xl">
                <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 font-medium tracking-wide drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link 
                  href={slide.href}
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                currentSlide === idx ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => setCurrentSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur text-white flex items-center justify-center transition-all border border-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setCurrentSlide(s => (s + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur text-white flex items-center justify-center transition-all border border-white/10"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* GUIDED DISCOVERY WIDGET */}
      <section className="bg-card py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-card-foreground mb-8">Find Your Perfect Bottle</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <select className="w-full md:w-auto min-w-[200px] px-6 py-4 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer">
              <option value="">Spirit Type</option>
              <option value="scotch">Scotch</option>
              <option value="gin">Gin</option>
              <option value="rum">Rum</option>
            </select>
            <select className="w-full md:w-auto min-w-[200px] px-6 py-4 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer">
              <option value="">Flavour Profile</option>
              <option value="peaty">Smoky & Peaty</option>
              <option value="fruity">Rich & Fruity</option>
              <option value="floral">Light & Floral</option>
            </select>
            <select className="w-full md:w-auto min-w-[200px] px-6 py-4 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer">
              <option value="">Budget</option>
              <option value="50">Under £50</option>
              <option value="100">£50 - £100</option>
              <option value="250">£100 - £250</option>
            </select>
            <Link href="/shop" className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors whitespace-nowrap rounded">
              Find My Bottle
            </Link>
          </div>
        </div>
      </section>

      {/* TRENDING NOW */}
      <section className="py-24 max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-display text-4xl font-bold">Trending Now</h2>
          <Link href="/shop" className="hidden md:flex items-center text-primary font-medium uppercase tracking-widest text-sm hover:underline">
            View All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-[400px] bg-card/50 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts?.slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* FLAVOUR CAMPS */}
      <section className="py-24 bg-card/50 border-y border-border/30">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Explore by Flavour</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Navigate the complex world of spirits through our expertly defined flavour camps.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {FLAVOUR_CAMPS.map(camp => (
              <Link key={camp.name} href={`/shop?flavour=${encodeURIComponent(camp.name)}`} className="group relative overflow-hidden rounded-xl aspect-square shadow-md border border-border/20">
                <img src={camp.img} alt={camp.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex items-end justify-center">
                  <h3 className="font-display text-xl md:text-3xl text-white font-bold tracking-wide group-hover:-translate-y-2 transition-transform duration-300 text-center">
                    {camp.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS CAROUSEL */}
      <section className="py-16 bg-background border-b border-border/30 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 text-center mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Our Trusted Distilleries</h2>
        </div>
        <div className="flex gap-12 items-center px-4 md:px-8 overflow-x-auto scrollbar-hide snap-x">
          {["Glenfarclas", "Ardbeg", "Bruichladdich", "Hendrick's", "Diplomatico", "Patrón", "Remy Martin", "Courvoisier", "Maker's Mark", "Balvenie"].map((brand, i) => (
            <div key={i} className="snap-center font-display text-2xl md:text-3xl font-bold text-muted whitespace-nowrap hover:text-primary cursor-pointer transition-colors duration-300">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-primary text-primary-foreground py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Stay Ahead of the Pour</h2>
          <p className="text-lg mb-8 opacity-90">Get exclusive releases, tasting notes, and member-only offers directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-obsidian"
              required
            />
            <button type="submit" className="px-8 py-4 bg-obsidian text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-black transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* TRUSTPILOT */}
      <section className="py-24 bg-card border-b border-border/20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 text-[#00b67a]">
              {[1,2,3,4,5].map(i => <Star key={i} size={32} fill="currentColor" />)}
            </div>
          </div>
          <h2 className="font-display text-3xl font-bold text-card-foreground mb-12">"Exceptional service and unparalleled selection"</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { text: "Incredible selection of rare scotches. Delivery was next day and perfectly packaged.", name: "James T.", date: "2 days ago" },
              { text: "The tasting notes are spot on. Found my new favorite Rum through their guide.", name: "Sarah M.", date: "1 week ago" },
              { text: "Best customer service in the business. They helped me find a specific 1980 vintage for a gift.", name: "Robert W.", date: "3 weeks ago" },
            ].map((review, i) => (
              <div key={i} className="bg-background p-8 rounded-xl shadow-sm border border-border/50">
                <div className="flex text-[#00b67a] mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-foreground font-medium mb-6">"{review.text}"</p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground block">{review.name}</span>
                  {review.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
