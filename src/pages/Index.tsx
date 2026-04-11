import Navbar from "@/components/amora/Navbar";
import Hero from "@/components/amora/Hero";
import About from "@/components/amora/About";
import MenuSection from "@/components/amora/MenuSection";
import Reviews from "@/components/amora/Reviews";
import InstagramGallery from "@/components/amora/InstagramGallery";
import Location from "@/components/amora/Location";
import Footer from "@/components/amora/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <InstagramGallery />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
