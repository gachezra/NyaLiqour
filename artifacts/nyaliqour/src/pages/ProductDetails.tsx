import { useState } from "react";
import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { useProduct, useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Star, Minus, Plus, ShoppingCart, Heart, ShieldCheck, CheckCircle2, Wind, Droplets, Droplet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id!);
  const { data: relatedProducts } = useProducts({ sortBy: 'popular' });
  
  const [qty, setQty] = useState(1);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Basket",
      description: `${qty}x ${product?.name} has been added.`,
    });
  };

  if (isLoading || !product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-background border-b border-border/30 py-4">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link> &gt; 
          <Link href="/shop" className="hover:text-primary transition-colors ml-2">Shop</Link> &gt; 
          <span className="text-foreground ml-2">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT: Image Gallery (35%) */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            <div className="bg-card aspect-[3/4] rounded-xl flex items-center justify-center p-12 relative overflow-hidden group border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/5 to-transparent z-0"/>
              <img 
                src={product.image} 
                alt={product.name} 
                className="relative z-10 w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 cursor-zoom-in"
              />
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur rounded px-3 py-1 text-xs font-medium text-muted-foreground flex items-center gap-2 pointer-events-none z-20">
                Hover to Zoom
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="aspect-square bg-card rounded-lg flex items-center justify-center p-4 border border-transparent hover:border-primary cursor-pointer transition-colors">
                   <img src={product.image} alt="thumbnail" className="w-full h-full object-contain mix-blend-multiply opacity-70 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Info & Facts (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded mb-4">
                {product.category} • {product.subcategory}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {product.name}
            </h1>
            <div className="text-lg text-muted-foreground font-medium mb-6">
              {product.brand} Distillery, {product.region}
            </div>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border/50">
              <div className="flex text-[#00b67a]">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-sm font-medium text-foreground">{product.rating}/5</span>
              <a href="#reviews" className="text-sm text-primary hover:underline">({product.reviews} reviews)</a>
            </div>

            <p className="text-foreground/90 text-lg leading-relaxed mb-12">
              {product.description}
            </p>

            {/* Tasting Notes */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-bold mb-8">Tasting Notes</h2>
              <div className="grid gap-6">
                <div className="bg-card p-6 rounded-xl flex gap-6 shadow-sm">
                  <Wind className="text-primary shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Nose</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.tastingNotes.nose}</p>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl flex gap-6 shadow-sm">
                  <Droplets className="text-primary shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Palate</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.tastingNotes.palate}</p>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl flex gap-6 shadow-sm">
                  <Droplet className="text-primary shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Finish</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.tastingNotes.finish}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Facts */}
            <div className="mb-12">
              <h2 className="font-display text-3xl font-bold mb-8">Product Facts</h2>
              <div className="border border-border/50 rounded-xl overflow-hidden text-sm">
                <div className="grid grid-cols-2 border-b border-border/50">
                  <div className="p-4 bg-card font-medium">Distillery / Brand</div>
                  <div className="p-4 bg-background">{product.brand}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-border/50">
                  <div className="p-4 bg-card font-medium">Region</div>
                  <div className="p-4 bg-background">{product.region}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-border/50">
                  <div className="p-4 bg-card font-medium">Style</div>
                  <div className="p-4 bg-background">{product.subcategory}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-border/50">
                  <div className="p-4 bg-card font-medium">Age</div>
                  <div className="p-4 bg-background">{product.age}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-border/50">
                  <div className="p-4 bg-card font-medium">ABV</div>
                  <div className="p-4 bg-background">{product.abv}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-border/50">
                  <div className="p-4 bg-card font-medium">Volume</div>
                  <div className="p-4 bg-background">{product.volume}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 bg-card font-medium">Cask Type</div>
                  <div className="p-4 bg-background">{product.caskType}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Buy Box (25%) */}
          <div className="w-full lg:w-[25%] relative">
            <div className="sticky top-32 bg-card border border-border/50 rounded-2xl p-8 shadow-2xl shadow-black/20">
              <div className="mb-6">
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">Ksh {product.price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Ksh {Math.round(product.price / 0.7).toLocaleString()} / litre</p>
              </div>

              <div className="flex items-center gap-2 mb-8 text-sm font-medium">
                {product.stock > 0 ? (
                  <>
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-green-500">In Stock</span>
                    <span className="text-muted-foreground">— {product.stock} remaining</span>
                  </>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </div>

              <div className="flex gap-4 mb-6">
                <div className="flex items-center bg-background border border-border rounded-lg overflow-hidden shrink-0">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:text-primary transition-colors"><Minus size={16}/></button>
                  <span className="w-8 text-center font-medium">{qty}</span>
                  <button onClick={() => setQty(Math.min(product.stock, qty + 1))} className="px-4 py-3 hover:text-primary transition-colors"><Plus size={16}/></button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <ShoppingCart size={18} /> Add to Basket
                </button>
              </div>

              <button className="w-full flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors py-3 mb-8 border border-border rounded-lg bg-background">
                <Heart size={16} /> Add to Wishlist
              </button>

              <div className="space-y-4 pt-6 border-t border-border/30">
                <div className="flex items-start gap-4">
                  <ShieldCheck size={24} className="text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Authenticity Guaranteed</h4>
                    <p className="text-xs text-muted-foreground">Every bottle is sourced directly from approved suppliers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Wind size={24} className="text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Same-Day Mombasa Delivery</h4>
                    <p className="text-xs text-muted-foreground">Order before 2pm for same-day delivery in Nyali & Mombasa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24 pt-16 border-t border-border/30">
          <h2 className="font-display text-4xl font-bold mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts?.filter(p => p.id !== product.id).slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
