import { Link } from "wouter";
import { Product } from "../lib/mock-data";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to PDP
    toast({
      title: "Added to Basket",
      description: `${product.name} has been added.`,
    });
  };

  return (
    <Link href={`/product/${product.id}`} className="group block relative h-full">
      <div className="h-full bg-card rounded-xl overflow-hidden shadow-lg shadow-black/5 border border-border/30 hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col hover:-translate-y-1">
        
        {/* Badges */}
        {product.tags.length > 0 && (
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {product.tags.map(tag => (
              <span key={tag} className="bg-background text-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Image Area */}
        <div className="relative pt-[120%] bg-gradient-to-b from-card to-background/5 p-6 flex items-center justify-center overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col flex-1 bg-card">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-1">
            {product.brand}
          </span>
          <h3 className="font-display text-lg font-bold text-card-foreground mb-1 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {product.volume} / {product.abv}
          </p>
          
          <div className="mt-auto flex items-end justify-between">
            <div>
              <p className="text-primary font-display font-bold text-xl">£{product.price.toFixed(2)}</p>
            </div>
            <button 
              onClick={handleAddToCart}
              className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
              aria-label="Add to basket"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
