import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Coffee, Cake } from "lucide-react";

const picks = [
  { name: "Spanish Latte", desc: "Creamy, sweet, and perfectly balanced", icon: Coffee, color: "from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30" },
  { name: "Cortado", desc: "Bold espresso cut with velvety milk", icon: Coffee, color: "from-stone-100 to-amber-100 dark:from-stone-900/30 dark:to-amber-900/30" },
  { name: "V60 Ethiopian", desc: "Fruity & floral single-origin pour-over", icon: Coffee, color: "from-emerald-50 to-amber-50 dark:from-emerald-900/30 dark:to-amber-900/30" },
  { name: "Devil's Cake", desc: "Rich, decadent chocolate indulgence", icon: Cake, color: "from-rose-50 to-amber-50 dark:from-rose-900/30 dark:to-amber-900/30" },
  { name: "Nutella Cake", desc: "Hazelnut chocolate heaven in every bite", icon: Cake, color: "from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30" },
];

export default function SignaturePicks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">⭐ Signature Picks</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Our Guests' Favorites
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {picks.map((p, i) => (
            <div
              key={p.name}
              className={`group rounded-2xl bg-gradient-to-br ${p.color} p-6 border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="bg-card/60 backdrop-blur rounded-xl p-3 w-fit mb-4">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
