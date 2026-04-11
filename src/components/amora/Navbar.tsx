import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";
import BrandLogo from "./BrandLogo";

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
          ? "bg-[#f6efe5]/88 backdrop-blur-xl border-b border-[#d9c7b0]/80 shadow-[0_12px_28px_rgba(78,54,29,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-12">
        <a href="#home">
          <BrandLogo
            iconClassName="h-9 w-9"
            textClassName={`text-[1.05rem] ${scrolled ? "text-[#3b3129]" : "text-[#8a7662]"}`}
          />
        </a>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-[0.08em] transition-colors ${
                scrolled
                  ? "text-[#6f6051] hover:text-[#241d18]"
                  : "text-[#9a8876] hover:text-[#2f5d45]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className={`rounded-full p-2 transition-colors ${scrolled ? "hover:bg-[#eadfce]" : "hover:bg-[#efe4d4]/70"}`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-primary" />
            ) : (
              <Moon className={`h-4 w-4 ${scrolled ? "text-[#6f6051]" : "text-[#8a7a67]"}`} />
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`h-5 w-5 ${scrolled ? "text-[#241d18]" : "text-[#6f6051]"}`} />
            ) : (
              <Menu className={`h-5 w-5 ${scrolled ? "text-[#241d18]" : "text-[#6f6051]"}`} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-b border-[#d9c7b0] bg-[#f6efe5]/95 backdrop-blur-xl px-6 pb-6 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-[#6f6051] hover:text-[#241d18]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
