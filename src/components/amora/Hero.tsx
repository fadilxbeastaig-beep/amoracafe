import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Crafted latte art at Amora Cafe"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5 mb-10 animate-fade-up">
          <span className="text-xs font-medium text-white/90 tracking-[0.25em] uppercase">
            Specialty Coffee — Al Khaznah
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 animate-fade-up-delay tracking-tight">
          Crafted Coffee.
          <br />
          <span className="italic font-normal text-white/80">Perfect Moments.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up-delay-2 font-light">
          Experience premium specialty coffee and delicious bites in a calm, welcoming atmosphere.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
          <Button
            size="lg"
            className="bg-white text-warm-dark hover:bg-white/90 rounded-full px-10 text-base h-14 shadow-2xl"
            asChild
          >
            <a href="#menu">
              View Menu <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 text-base h-14 border-white/30 text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <a href="#contact">
              <MapPin className="mr-2 h-4 w-4" /> Visit Us
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
