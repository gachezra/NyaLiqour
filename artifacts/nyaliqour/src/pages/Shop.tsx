import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { ChevronDown, ChevronUp, X, Filter } from "lucide-react";
import { clsx } from "clsx";

// Types and Filters logic
type FilterState = {
  category: string[];
  brand: string[];
  age: string[];
  abv: string[];
  flavourCamp: string[];
};

export default function Shop() {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    brand: [],
    age: [],
    abv: [],
    flavourCamp: []
  });
  
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Hook handles data & artificial delay
  const { data: products, isLoading } = useProducts({
    ...filters,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    sortBy
  });

  const toggleFilter = (type: keyof FilterState, value: string) => {
    setFilters(prev => {
      const arr = prev[type];
      return {
        ...prev,
        [type]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value]
      };
    });
  };

  const clearAll = () => {
    setFilters({ category: [], brand: [], age: [], abv: [], flavourCamp: [] });
    setMinPrice("");
    setMaxPrice("");
  };

  // Section Accordion State
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true, brand: true, price: true, flavour: true
  });
  const toggleSection = (s: string) => setOpenSections(prev => ({ ...prev, [s]: !prev[s] }));

  // Helper arrays for options
  const CATEGORIES = ["Scotch Whisky", "World Spirits"];
  const BRANDS = ["Glenfarclas", "Ardbeg", "Hendrick's", "Diplomatico", "Bruichladdich", "Patrón", "Macallan"];
  const FLAVOUR_CAMPS = ["Peaty & Smoky", "Rich & Fruity", "Light & Floral", "Sweet & Vanilla", "Spiced & Bold", "Fresh & Zesty"];
  
  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0) || minPrice || maxPrice;

  return (
    <Layout>
      <div className="bg-obsidian border-b border-border/50 pt-8 pb-12">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            <a href="/" className="hover:text-primary transition-colors">Home</a> &gt; 
            <span className="text-foreground ml-2">Shop All</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">The Collection</h1>
          <p className="text-white/70 max-w-2xl text-lg">Curated selections of the world's most exceptional spirits.</p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Mobile Filter Toggle */}
        <div className="w-full flex justify-between items-center lg:hidden bg-card p-4 rounded-md border border-border">
          <button onClick={() => setShowMobileFilters(!showMobileFilters)} className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
            <Filter size={18} /> Filters
          </button>
          <div className="text-sm text-muted-foreground font-medium">{products?.length || 0} Products</div>
        </div>

        {/* LEFT SIDEBAR FILTERS */}
        <aside className={clsx(
          "w-full lg:w-[280px] shrink-0 bg-background lg:block lg:sticky lg:top-24 max-h-[85vh] overflow-y-auto scrollbar-hide pr-2",
          showMobileFilters ? "block" : "hidden"
        )}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display text-2xl font-bold">Filter & Refine</h2>
            {hasActiveFilters && (
              <button onClick={clearAll} className="text-sm text-primary hover:underline font-medium">Clear All</button>
            )}
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div className="border-b border-border/50 pb-6">
              <button className="flex justify-between items-center w-full font-bold uppercase tracking-widest text-sm mb-4" onClick={() => toggleSection('category')}>
                Category {openSections.category ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
              </button>
              {openSections.category && (
                <div className="space-y-3">
                  {CATEGORIES.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={filters.category.includes(cat)}
                        onChange={() => toggleFilter('category', cat)}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary/20 cursor-pointer accent-primary"
                      />
                      <span className="text-foreground group-hover:text-primary transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Brand Filter */}
            <div className="border-b border-border/50 pb-6">
              <button className="flex justify-between items-center w-full font-bold uppercase tracking-widest text-sm mb-4" onClick={() => toggleSection('brand')}>
                Distillery / Brand {openSections.brand ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
              </button>
              {openSections.brand && (
                <div className="space-y-3">
                  {BRANDS.map(brand => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={filters.brand.includes(brand)}
                        onChange={() => toggleFilter('brand', brand)}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary/20 cursor-pointer accent-primary"
                      />
                      <span className="text-foreground group-hover:text-primary transition-colors">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="border-b border-border/50 pb-6">
              <button className="flex justify-between items-center w-full font-bold uppercase tracking-widest text-sm mb-4" onClick={() => toggleSection('price')}>
                Price Range {openSections.price ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
              </button>
              {openSections.price && (
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                    <input 
                      type="number" 
                      value={minPrice} 
                      onChange={e => setMinPrice(e.target.value)}
                      placeholder="Min" 
                      className="w-full bg-card border border-border rounded pl-8 pr-2 py-2 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <span className="text-muted-foreground">-</span>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                    <input 
                      type="number" 
                      value={maxPrice} 
                      onChange={e => setMaxPrice(e.target.value)}
                      placeholder="Max" 
                      className="w-full bg-card border border-border rounded pl-8 pr-2 py-2 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Flavour Camp */}
            <div className="pb-6">
              <button className="flex justify-between items-center w-full font-bold uppercase tracking-widest text-sm mb-4" onClick={() => toggleSection('flavour')}>
                Flavour Camp {openSections.flavour ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
              </button>
              {openSections.flavour && (
                <div className="flex flex-wrap gap-2">
                  {FLAVOUR_CAMPS.map(camp => {
                    const active = filters.flavourCamp.includes(camp);
                    return (
                      <button 
                        key={camp}
                        onClick={() => toggleFilter('flavourCamp', camp)}
                        className={clsx(
                          "px-3 py-1.5 rounded-full border text-xs font-medium transition-all",
                          active ? "bg-primary border-primary text-primary-foreground shadow-sm" : "bg-card border-border hover:border-primary text-card-foreground"
                        )}
                      >
                        {camp}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT GRID */}
        <div className="flex-1 w-full">
          <div className="hidden lg:flex justify-between items-center mb-8 border-b border-border/30 pb-4">
            <div className="text-sm text-muted-foreground font-medium">
              Showing {products?.length || 0} products
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold uppercase tracking-widest">Sort By:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-primary font-medium focus:outline-none cursor-pointer outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Expert Rating</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(filters).map(([k, arr]) => 
                arr.map(val => (
                  <span key={val} className="inline-flex items-center gap-1 px-3 py-1 bg-border/40 text-foreground text-xs font-medium rounded">
                    {val}
                    <button onClick={() => toggleFilter(k as keyof FilterState, val)} className="hover:text-primary"><X size={12}/></button>
                  </span>
                ))
              )}
            </div>
          )}

          {/* Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-[450px] bg-card/50 animate-pulse rounded-xl" />
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <h3 className="font-display text-3xl font-bold mb-4">No products found</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your filters or search criteria.</p>
              <button onClick={clearAll} className="px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded">Clear Filters</button>
            </div>
          )}
          
          {products && products.length > 0 && (
            <div className="mt-16 flex justify-center">
              <button className="px-12 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-widest text-sm transition-colors rounded">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
