import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-coffee.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Specialty coffee at Amora Café"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-32">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 animate-fade-up tracking-tight">
          Crafted Coffee.
          <br />
          <span className="italic font-normal text-white/80">Elevated Experience.</span>
        </h1>

        <p className="text-lg text-white/55 max-w-md mx-auto mb-14 leading-relaxed animate-fade-up-delay font-light">
          Specialty coffee in Abu Dhabi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 text-sm h-13 font-medium tracking-wide"
            asChild
          >
            <a href="#menu">
              View Menu <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 text-sm h-13 border-white/25 text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <a href="#contact">
              <MapPin className="mr-2 h-4 w-4" /> Visit Us
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
