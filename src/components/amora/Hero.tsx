import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax-like effect */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Crafted latte art at Amora Café"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B2F2F]/70 via-[#3B2F2F]/40 to-[#3B2F2F]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
        <div className="inline-flex items-center gap-2 glass rounded-full px-7 py-3 mb-12 animate-fade-up">
          <span className="text-xs font-medium text-white/90 tracking-[0.3em] uppercase">
            Specialty Coffee — Abu Dhabi
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.08] mb-8 animate-fade-up-delay tracking-tight">
          Crafted Coffee.
          <br />
          <span className="italic font-normal text-white/80">Elevated Experience.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/65 max-w-2xl mx-auto mb-14 leading-relaxed animate-fade-up-delay-2 font-light">
          Experience specialty coffee made with passion in the heart of Abu Dhabi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <Button
            size="lg"
            className="bg-white text-warm-dark hover:bg-white/90 rounded-full px-10 text-base h-14 shadow-2xl font-medium"
            asChild
          >
            <a href="#menu">
              View Menu <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 text-base h-14 border-white/25 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
            asChild
          >
            <a href="#contact">
              <MapPin className="mr-2 h-4 w-4" /> Visit Us
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}