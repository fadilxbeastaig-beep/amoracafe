import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Coffee, CupSoda, Croissant, UtensilsCrossed, Salad, Flame, Star } from "lucide-react";

type MenuItem = {
  name: string;
  badge?: "best" | "recommended";
};

type Category = {
  key: string;
  label: string;
  icon: React.ElementType;
  emoji: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    key: "specialty",
    label: "Specialty Coffee",
    icon: Coffee,
    emoji: "🟤",
    items: [
      { name: "V60 (Ethiopian / Elonda Beans)", badge: "best" },
      { name: "Chemex" },
      { name: "Aeropress" },
      { name: "Cold Brew" },
      { name: "Iced V60" },
    ],
  },
  {
    key: "espresso",
    label: "Espresso Bar",
    icon: Coffee,
    emoji: "☕",
    items: [
      { name: "Espresso" },
      { name: "Double Espresso" },
      { name: "Americano (Hot / Iced)" },
      { name: "Cortado", badge: "recommended" },
      { name: "Spanish Cortado" },
      { name: "Flat White" },
      { name: "Cappuccino" },
      { name: "Latte" },
      { name: "Spanish Latte", badge: "best" },
      { name: "Caramel Latte" },
      { name: "Vanilla Latte" },
    ],
  },
  {
    key: "arabic",
    label: "Arabic & Traditional",
    icon: CupSoda,
    emoji: "🫖",
    items: [
      { name: "Arabic Coffee" },
      { name: "Karak Tea" },
      { name: "Black Tea" },
      { name: "Green Tea" },
    ],
  },
  {
    key: "refreshers",
    label: "Refreshers & Cold",
    icon: CupSoda,
    emoji: "🍹",
    items: [
      { name: "Iced Matcha Latte" },
      { name: "Fresh Orange Juice" },
      { name: "Lemon Mint Juice" },
      { name: "Iced Tea (Peach / Lemon)" },
      { name: "Mojito (Classic / Passionfruit)" },
    ],
  },
  {
    key: "desserts",
    label: "Desserts",
    icon: Flame,
    emoji: "🍰",
    items: [
      { name: "Mango Cake", badge: "best" },
      { name: "Blueberry Cheesecake" },
      { name: "Nutella Cake", badge: "best" },
      { name: "Devil's Cake", badge: "recommended" },
      { name: "Chocolate Fudge Cake" },
      { name: "Cookies (Choc Chip / Double Choc)" },
    ],
  },
  {
    key: "bakery",
    label: "Bakery & Bites",
    icon: Croissant,
    emoji: "🥐",
    items: [
      { name: "Butter Croissant" },
      { name: "Cheese Croissant" },
      { name: "Zaatar Croissant", badge: "recommended" },
      { name: "Egg & Cheese Croissant" },
      { name: "Sandwiches (Chicken / Cheese)" },
    ],
  },
  {
    key: "food",
    label: "Food Menu",
    icon: UtensilsCrossed,
    emoji: "🍕",
    items: [
      { name: "Margherita Pizza" },
      { name: "Chicken Pizza" },
      { name: "White Sauce Pasta" },
      { name: "Red Sauce Pasta" },
      { name: "Chicken Wrap", badge: "recommended" },
      { name: "Club Sandwich" },
    ],
  },
  {
    key: "healthy",
    label: "Healthy & Fresh",
    icon: Salad,
    emoji: "🥗",
    items: [
      { name: "Caesar Salad" },
      { name: "Chicken Salad" },
      { name: "Garden Salad" },
    ],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState("specialty");
  const { ref, isVisible } = useScrollReveal();
  const cat = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="py-24 lg:py-32">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">Our Menu</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore Our Offerings
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From specialty brews to freshly baked treats — every item is made with love.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              <span>{c.emoji}</span>
              <span className="hidden sm:inline">{c.label}</span>
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.items.map((item) => (
            <div
              key={item.name}
              className="group relative bg-card border border-border rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <cat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{item.name}</span>
                </div>
                {item.badge === "best" && (
                  <Badge className="bg-gold/20 text-accent border-gold/30 text-xs">
                    <Flame className="h-3 w-3 mr-1" /> Best Seller
                  </Badge>
                )}
                {item.badge === "recommended" && (
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    <Star className="h-3 w-3 mr-1" /> Recommended
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
