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
    <section id="reviews" className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why People <span className="italic font-normal">Love Us</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
              <Star className="h-6 w-6 text-gold fill-gold/50" />
            </div>
            <span className="font-display text-3xl font-bold text-foreground">4.5</span>
            <span className="text-muted-foreground text-lg">• 35+ happy customers</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
            >
              <Quote className="h-10 w-10 text-primary/15 mb-6" />
              <p className="text-foreground leading-relaxed mb-8 text-xl font-light font-display italic">
                "{r.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{r.author[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{r.author}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />
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
