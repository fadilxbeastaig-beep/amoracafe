import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";
import sigSpanish from "@/assets/signature-spanish-latte.jpg";
import sigCortado from "@/assets/signature-cortado.jpg";
import sigV60 from "@/assets/signature-v60.jpg";
import sigDevil from "@/assets/signature-devils-cake.jpg";
import sigNutella from "@/assets/signature-nutella.jpg";

const picks = [
  { name: "Spanish Latte", desc: "Creamy, sweet, and perfectly balanced", image: sigSpanish },
  { name: "Cortado", desc: "Bold espresso cut with velvety milk", image: sigCortado },
  { name: "V60 Ethiopian", desc: "Fruity & floral single-origin pour-over", image: sigV60 },
  { name: "Devil's Cake", desc: "Rich, decadent chocolate indulgence", image: sigDevil },
  { name: "Nutella Cake", desc: "Hazelnut chocolate heaven in every bite", image: sigNutella },
];

export default function SignaturePicks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 lg:py-40 bg-secondary/30">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4">⭐ Signature Picks</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Our Guests' Favorites
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {picks.map((p, i) => (
            <div
              key={p.name}
              className="group rounded-3xl bg-card border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground mb-1.5">{p.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-0.5 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
