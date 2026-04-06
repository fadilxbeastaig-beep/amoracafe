import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  { text: "Best coffee in Al Khaznah, very relaxing atmosphere", author: "Ahmed K." },
  { text: "Cakes are delicious and fresh. The Nutella cake is to die for!", author: "Sara M." },
  { text: "Friendly staff and great service every time", author: "Khalid R." },
  { text: "Perfect balance in specialty coffee flavors. The V60 is exceptional", author: "Fatima A." },
];

export default function Reviews() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why People Love Us
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
              <Star className="h-5 w-5 text-gold fill-gold/50" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">4.5</span>
            <span className="text-muted-foreground">• 35+ happy customers</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-lg font-light italic">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{r.author[0]}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{r.author}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
