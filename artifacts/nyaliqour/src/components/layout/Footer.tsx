import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-obsidian pt-16 pb-8 border-t border-border mt-auto">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-6 tracking-widest">NyaLiqour</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Purveyors of fine and rare spirits since 1999. Discover an unparalleled selection of single malt whiskies, premium gins, and aged rums from around the globe.
            </p>
            <div className="flex gap-4">
              {/* Fake Social Icons */}
              <a href="#" className="h-10 w-10 rounded-full bg-border flex items-center justify-center text-foreground hover:bg-primary transition-colors">Ig</a>
              <a href="#" className="h-10 w-10 rounded-full bg-border flex items-center justify-center text-foreground hover:bg-primary transition-colors">Tw</a>
              <a href="#" className="h-10 w-10 rounded-full bg-border flex items-center justify-center text-foreground hover:bg-primary transition-colors">Fb</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Award Winners</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Gift Guide</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Track Order</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Delivery & Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-6">The Cellar (Legal)</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Drink Responsibly</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Connect</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Need assistance finding the perfect bottle? Our experts are here to help.
            </p>
            <p className="text-foreground font-medium mb-2">0800 123 4567</p>
            <p className="text-primary text-sm hover:underline cursor-pointer">concierge@nyaliqour.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NyaLiqour. All rights reserved.</p>
          <div className="flex gap-4 uppercase font-medium tracking-widest text-[10px]">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
