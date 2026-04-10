import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Coffee, IceCreamCone, Sparkles, Croissant, GlassWater } from "lucide-react";

type Category = {
  key: string;
  label: string;
  icon: React.ElementType;
  items: string[];
};

const categories: Category[] = [
  {
    key: "coffee",
    label: "Coffee",
    icon: Coffee,
    items: ["Espresso", "Americano", "Cappuccino", "Latte", "Flat White", "Spanish Latte", "Caramel Macchiato"],
  },
  {
    key: "iced",
    label: "Iced Coffee",
    icon: IceCreamCone,
    items: ["Iced Latte", "Iced Spanish Latte", "Iced Americano", "Cold Brew", "Iced Mocha"],
  },
  {
    key: "specialty",
    label: "Specialty Drinks",
    icon: Sparkles,
    items: ["Mocha", "White Chocolate Mocha", "Hot Chocolate", "Matcha Latte", "Chai Latte"],
  },
  {
    key: "bakery",
    label: "Bakery & Snacks",
    icon: Croissant,
    items: ["Croissant (Butter / Chocolate)", "Muffins", "Cookies", "Banana Bread", "Cheesecake"],
  },
  {
    key: "refreshers",
    label: "Refreshers",
    icon: GlassWater,
    items: ["Fresh Orange Juice", "Lemon Mint", "Iced Tea", "Smoothies"],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState("coffee");
  const { ref, isVisible } = useScrollReveal();
  const cat = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="py-28 lg:py-40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase mb-4">Our Menu</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5">
            Explore Our <span className="italic font-normal">Offerings</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
            Every item is crafted with care — from specialty brews to freshly baked treats.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === c.key
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/15 scale-105"
                    : "glass-card text-muted-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.items.map((item) => (
            <div
              key={item}
              className="group glass-card rounded-[20px] p-7 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/8 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground text-[15px]">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}