import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";
import logo from "@/assets/amora-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Amora Café"
            className="h-9 w-9 rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow"
          />
          <span className={`font-display text-xl font-semibold tracking-wide ${scrolled ? "text-foreground" : "text-white"} transition-colors`}>
            Amora
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className={`p-2 rounded-full transition-colors ${scrolled ? "hover:bg-secondary" : "hover:bg-white/10"}`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-gold" />
            ) : (
              <Moon className={`h-5 w-5 ${scrolled ? "text-muted-foreground" : "text-white/70"}`} />
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}