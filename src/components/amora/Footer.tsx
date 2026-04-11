import { Instagram } from "lucide-react";
import logo from "@/assets/amora-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Amora" className="h-10 w-10 object-contain mix-blend-multiply dark:mix-blend-screen dark:invert" />
          <span className="font-display text-xl font-semibold text-foreground">Amora Specialty Café</span>
        </div>

        <p className="text-sm text-muted-foreground font-light italic">Made with love, served with passion.</p>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:bg-accent/10 transition-colors group"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
        </a>

        <p className="text-sm text-muted-foreground">
          © 2024 Amora Specialty Café · Abu Dhabi
        </p>
      </div>
    </footer>
  );
}
