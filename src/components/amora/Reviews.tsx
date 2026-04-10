import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const reviews = [
  {
    text: "One of the most comfortable atmospheres and the staff was very friendly. The Arabic coffee and cakes like mango and blueberry cheesecake were absolutely delicious. Highly recommended 😋💯",
    author: "Ahmed K.",
  },
  {
    text: "I ordered a V60 with Elonda beans and it was perfectly balanced — smooth acidity with a rich taste. A truly harmonious coffee experience.",
    author: "Sara M.",
  },
  {
    text: "Amora is a charming coffee shop that guarantees an exquisite experience. The coffee quality is outstanding — definitely worth a stop on the way to Abu Dhabi or Al Ain.",
    author: "Khalid R.",
  },
  {
    text: "They have one of the best cakes 👌 The food, pizza, pasta, and salads are all amazing. And the coffee? Absolutely top tier.",
    author: "Fatima A.",
  },
  {
    text: "I tried a Cortado with Ethiopian beans and it was perfect — you can tell it's made with care and passion.",
    author: "Omar H.",
  },
  {
    text: "I love this place! Best coffee in Al Khaznah, with fantastic teas, fresh juices, and delicious food. The atmosphere is relaxed and the service is always friendly and professional.",
    author: "Layla S.",
  },
  {
    text: "Very nice staff and excellent coffee quality. A great place to relax and enjoy.",
    author: "Yousef B.",
  },
  {
    text: "The Spanish coffee was delicious, with a unique and rich flavor. The staff were very welcoming and kind.",
    author: "Noor T.",
  },
];

export default function Reviews() {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-28 lg:py-40 bg-secondary/40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What People <span className="italic font-normal">Say</span>
          </h2>
        </div>

        {/* Desktop slider navigation */}
        <div className="hidden md:flex justify-end gap-2 mb-8">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-3 rounded-full glass-card hover:bg-secondary disabled:opacity-30 transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-3 rounded-full glass-card hover:bg-secondary disabled:opacity-30 transition-all"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Horizontal slider on desktop, vertical stack on mobile */}
        <div
          ref={scrollRef}
          className="flex md:overflow-x-auto hide-scrollbar gap-6 md:snap-x md:snap-mandatory flex-col md:flex-row"
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-card rounded-[20px] p-8 md:p-10 md:min-w-[360px] md:max-w-[400px] flex-shrink-0 md:snap-start hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8 text-[15px] font-light font-display italic">
                "{r.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{r.author[0]}</span>
                </div>
                <p className="font-semibold text-foreground text-sm">{r.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}