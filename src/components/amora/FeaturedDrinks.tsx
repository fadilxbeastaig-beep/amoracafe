import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import menuMatcha from "@/assets/menu-matcha.jpg";
import menuMojito from "@/assets/menu-mojito.jpg";
import menuLemonMint from "@/assets/menu-lemon-mint.jpg";

const featured = [
  { name: "Iced Matcha Latte", desc: "Premium ceremonial matcha with cold milk", image: menuMatcha, price: "28" },
  { name: "Mojito Passionfruit", desc: "Tropical passionfruit with mint fizz", image: menuMojito, price: "22" },
  { name: "Lemon Mint", desc: "Fresh citrus with garden mint", image: menuLemonMint, price: "18" },
];

export default function FeaturedDrinks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <p className="text-xs font-medium text-accent tracking-[0.3em] uppercase mb-4">Featured</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Staff Picks
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {featured.map((item) => (
            <div
              key={item.name}
              className="group text-center"
            >
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge variant="outline" className="mb-3 text-accent border-accent/30 text-[10px] font-semibold">
                ★ Recommended
              </Badge>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground font-light mb-2">{item.desc}</p>
              <p className="text-sm font-semibold text-primary">AED {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
