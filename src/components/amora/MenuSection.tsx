import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    key: "coffee",
    label: "Coffee",
    items: ["Espresso", "Americano", "Cappuccino", "Latte", "Flat White", "Spanish Latte"],
  },
  {
    key: "iced",
    label: "Iced",
    items: ["Iced Latte", "Cold Brew", "Iced Spanish Latte"],
  },
  {
    key: "specialty",
    label: "Specialty",
    items: ["Mocha", "Matcha Latte", "Chai Latte"],
  },
  {
    key: "bakery",
    label: "Bakery",
    items: ["Croissant", "Cookies", "Cheesecake"],
  },
  {
    key: "refreshers",
    label: "Refreshers",
    items: ["Lemon Mint", "Fresh Juice", "Iced Tea"],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState("coffee");
  const { ref, isVisible } = useScrollReveal();
  const cat = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="py-28 lg:py-40 bg-card">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-4">Our Menu</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Explore Our Offerings
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Items list */}
        <div className="space-y-0 text-center">
          {cat.items.map((item, i) => (
            <div
              key={item}
              className={`py-4 text-foreground text-lg font-light tracking-wide ${
                i < cat.items.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
