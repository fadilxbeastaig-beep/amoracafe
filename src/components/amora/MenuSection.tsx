import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import {
  menuCategories,
  DISCOUNT_PERCENTAGE,
  CURRENCY,
  POPULAR_ITEMS,
} from "@/data/menuData";

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal();
  const cat = menuCategories[active];

  const discountedPrice = (price: number) =>
    Math.round(price * (1 - DISCOUNT_PERCENTAGE / 100));

  return (
    <section id="menu" className="py-28 lg:py-40 bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-accent tracking-[0.3em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Explore Our Offerings
          </h2>
          {DISCOUNT_PERCENTAGE > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              🎉 {DISCOUNT_PERCENTAGE}% OFF on all items
            </div>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {menuCategories.map((c, i) => (
            <button
              key={c.category}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {c.icon} {c.category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cat.items.map((item) => {
            const isPopular = POPULAR_ITEMS.includes(item.name);
            const salePrice = discountedPrice(item.original_price);

            return (
              <div
                key={item.name}
                className="group bg-card rounded-[20px] overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-foreground text-base">
                        {item.name}
                      </h3>
                      {isPopular && (
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent border-0 font-semibold"
                        >
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="text-right whitespace-nowrap shrink-0">
                      {DISCOUNT_PERCENTAGE > 0 && (
                        <span className="text-xs text-muted-foreground line-through mr-1.5">
                          {CURRENCY} {item.original_price}
                        </span>
                      )}
                      <span className="text-sm font-semibold text-primary">
                        {CURRENCY} {DISCOUNT_PERCENTAGE > 0 ? salePrice : item.original_price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
