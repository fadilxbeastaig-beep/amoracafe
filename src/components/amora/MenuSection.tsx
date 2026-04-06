import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Coffee, CupSoda, Croissant, UtensilsCrossed, Salad, Flame, Star } from "lucide-react";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuDesserts from "@/assets/menu-desserts.jpg";
import menuFood from "@/assets/menu-food.jpg";
import menuBakery from "@/assets/menu-bakery.jpg";

type MenuItem = { name: string; badge?: "best" | "recommended" };

type Category = {
  key: string;
  label: string;
  icon: React.ElementType;
  emoji: string;
  image: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    key: "specialty", label: "Specialty Coffee", icon: Coffee, emoji: "🟤", image: menuCoffee,
    items: [
      { name: "V60 (Ethiopian / Elonda Beans)", badge: "best" },
      { name: "Chemex" }, { name: "Aeropress" }, { name: "Cold Brew" }, { name: "Iced V60" },
    ],
  },
  {
    key: "espresso", label: "Espresso Bar", icon: Coffee, emoji: "☕", image: menuCoffee,
    items: [
      { name: "Espresso" }, { name: "Double Espresso" }, { name: "Americano (Hot / Iced)" },
      { name: "Cortado", badge: "recommended" }, { name: "Spanish Cortado" }, { name: "Flat White" },
      { name: "Cappuccino" }, { name: "Latte" }, { name: "Spanish Latte", badge: "best" },
      { name: "Caramel Latte" }, { name: "Vanilla Latte" },
    ],
  },
  {
    key: "arabic", label: "Arabic & Traditional", icon: CupSoda, emoji: "🫖", image: menuCoffee,
    items: [{ name: "Arabic Coffee" }, { name: "Karak Tea" }, { name: "Black Tea" }, { name: "Green Tea" }],
  },
  {
    key: "refreshers", label: "Refreshers & Cold", icon: CupSoda, emoji: "🍹", image: menuCoffee,
    items: [
      { name: "Iced Matcha Latte" }, { name: "Fresh Orange Juice" }, { name: "Lemon Mint Juice" },
      { name: "Iced Tea (Peach / Lemon)" }, { name: "Mojito (Classic / Passionfruit)" },
    ],
  },
  {
    key: "desserts", label: "Desserts", icon: Flame, emoji: "🍰", image: menuDesserts,
    items: [
      { name: "Mango Cake", badge: "best" }, { name: "Blueberry Cheesecake" },
      { name: "Nutella Cake", badge: "best" }, { name: "Devil's Cake", badge: "recommended" },
      { name: "Chocolate Fudge Cake" }, { name: "Cookies (Choc Chip / Double Choc)" },
    ],
  },
  {
    key: "bakery", label: "Bakery & Bites", icon: Croissant, emoji: "🥐", image: menuBakery,
    items: [
      { name: "Butter Croissant" }, { name: "Cheese Croissant" },
      { name: "Zaatar Croissant", badge: "recommended" }, { name: "Egg & Cheese Croissant" },
      { name: "Sandwiches (Chicken / Cheese)" },
    ],
  },
  {
    key: "food", label: "Food Menu", icon: UtensilsCrossed, emoji: "🍕", image: menuFood,
    items: [
      { name: "Margherita Pizza" }, { name: "Chicken Pizza" }, { name: "White Sauce Pasta" },
      { name: "Red Sauce Pasta" }, { name: "Chicken Wrap", badge: "recommended" }, { name: "Club Sandwich" },
    ],
  },
  {
    key: "healthy", label: "Healthy & Fresh", icon: Salad, emoji: "🥗", image: menuFood,
    items: [{ name: "Caesar Salad" }, { name: "Chicken Salad" }, { name: "Garden Salad" }],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState("specialty");
  const { ref, isVisible } = useScrollReveal();
  const cat = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4">Our Menu</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5">
            Explore Our Offerings
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
            From specialty brews to freshly baked treats — every item is made with love.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              <span>{c.emoji}</span>
              <span className="hidden sm:inline">{c.label}</span>
            </button>
          ))}
        </div>

        {/* Category image banner */}
        <div className="rounded-3xl overflow-hidden mb-10 h-48 relative">
          <img src={cat.image} alt={cat.label} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-10">
            <div>
              <p className="text-white/70 text-sm tracking-widest uppercase mb-1">{cat.emoji} Category</p>
              <h3 className="font-display text-3xl text-white font-bold">{cat.label}</h3>
            </div>
          </div>
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.items.map((item) => (
            <div
              key={item.name}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <cat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.name}</span>
                </div>
                {item.badge === "best" && (
                  <Badge className="bg-gold/20 text-accent border-gold/30 text-xs shrink-0">
                    <Flame className="h-3 w-3 mr-1" /> Best Seller
                  </Badge>
                )}
                {item.badge === "recommended" && (
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary shrink-0">
                    <Star className="h-3 w-3 mr-1" /> Top Pick
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
