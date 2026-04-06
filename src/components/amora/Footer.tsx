import { Instagram, Heart } from "lucide-react";
import logo from "@/assets/amora-logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Amora" className="h-10 w-10 rounded-full object-cover opacity-80" />
            <span className="font-display text-2xl font-bold text-foreground">Amora</span>
          </div>

          <p className="text-muted-foreground italic font-display text-lg">
            "Made with love, served with passion"
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {["Home", "About", "Menu", "Reviews", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-border w-full">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © 2024 Amora Speciality Cafe. Crafted with <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" /> in Al Khaznah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
