import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import menuMatcha from "@/assets/menu-matcha.jpg";
import menuSpanishLatte from "@/assets/menu-spanish-latte.jpg";
import menuColdBrew from "@/assets/menu-cold-brew.jpg";
import menuCroissant from "@/assets/menu-croissant.jpg";
import menuMojito from "@/assets/menu-mojito.jpg";
import menuLemonMint from "@/assets/menu-lemon-mint.jpg";
import menuCheesecake from "@/assets/menu-cheesecake.jpg";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  image?: string;
  popular?: boolean;
}

interface Category {
  key: string;
  label: string;
  items: MenuItem[];
}

const categories: Category[] = [
  {
    key: "coffee",
    label: "☕ Coffee",
    items: [
      { name: "Espresso", desc: "Bold, rich single-origin shot", price: "14" },
      { name: "Americano", desc: "Smooth espresso with hot water", price: "16" },
      { name: "Cappuccino", desc: "Velvety foam with rich espresso", price: "20" },
      { name: "Latte", desc: "Creamy steamed milk, espresso base", price: "22" },
      { name: "Flat White", desc: "Silky microfoam, double ristretto", price: "22" },
      { name: "Spanish Latte", desc: "Sweetened condensed milk latte", price: "24", image: menuSpanishLatte, popular: true },
    ],
  },
  {
    key: "iced",
    label: "🧊 Iced",
    items: [
      { name: "Iced Latte", desc: "Chilled espresso over cold milk", price: "24" },
      { name: "Cold Brew", desc: "18-hour slow steeped, smooth finish", price: "22", image: menuColdBrew },
      { name: "Iced Spanish Latte", desc: "Sweet, creamy, and refreshing", price: "26", popular: true },
    ],
  },
  {
    key: "specialty",
    label: "✨ Specialty",
    items: [
      { name: "Iced Matcha Latte", desc: "Premium ceremonial matcha with cold milk", price: "28", image: menuMatcha, popular: true },
      { name: "Mocha", desc: "Belgian chocolate meets espresso", price: "26" },
      { name: "Chai Latte", desc: "Aromatic spiced chai, steamed milk", price: "24" },
    ],
  },
  {
    key: "bakery",
    label: "🥐 Bakery",
    items: [
      { name: "Butter Croissant", desc: "Flaky, golden, French-style pastry", price: "16", image: menuCroissant },
      { name: "Artisan Cookies", desc: "Freshly baked, warm from the oven", price: "14" },
      { name: "San Sebastian Cheesecake", desc: "Creamy burnt Basque-style cheesecake", price: "32", image: menuCheesecake, popular: true },
    ],
  },
  {
    key: "refreshers",
    label: "🍋 Refreshers",
    items: [
      { name: "Lemon Mint", desc: "Fresh citrus with garden mint", price: "18", image: menuLemonMint },
      { name: "Mojito Passionfruit", desc: "Tropical passionfruit with mint fizz", price: "22", image: menuMojito },
      { name: "Fresh Juice", desc: "Seasonal pressed fruit blend", price: "20" },
      { name: "Iced Tea", desc: "Cold-brewed, lightly sweetened", price: "16" },
    ],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState("coffee");
  const { ref, isVisible } = useScrollReveal();
  const cat = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="py-28 lg:py-40 bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-accent tracking-[0.3em] uppercase mb-4">Our Menu</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Explore Our Offerings
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cat.items.map((item) => (
            <div
              key={item.name}
              className="group bg-card rounded-[20px] overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              {item.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground text-base">{item.name}</h3>
                    {item.popular && (
                      <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent border-0 font-semibold">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">
                    AED {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
