import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Best Spanish latte in Abu Dhabi. The vibe is unmatched.",
    author: "Sara M.",
  },
  {
    text: "Beautiful space and amazing coffee. Worth every visit.",
    author: "Ahmed K.",
  },
  {
    text: "The Spanish coffee was delicious, with a unique and rich flavor. The staff were very welcoming and kind.",
    author: "Layla R.",
  },
];

export default function Reviews() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="reviews" className="py-28 lg:py-40 bg-secondary/50">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-accent tracking-[0.3em] uppercase mb-4">Reviews</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="bg-card rounded-[20px] p-8 text-center space-y-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="h-5 w-5 text-accent mx-auto" />
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground font-light leading-relaxed italic">
                "{r.text}"
              </p>
              <p className="text-sm text-muted-foreground font-medium">{r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
