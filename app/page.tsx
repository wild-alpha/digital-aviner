import Navbar from "@/app/Componenets/Navbar";
import CallButton from "@/app/Componenets/CallButton";
import WhatsAppButton from "@/app/Componenets/WhatsAppButton";
import HeroSection from "@/app/Componenets/HeroSection";
import Services from "@/app/Componenets/Services";
import Feature from "@/app/Componenets/Features";
import Achievements from "@/app/Componenets/Achivements";
import Footer from "@/app/Componenets/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      <Navbar className="absolute top-0 z-10 w-screen" />
      <CallButton />
      <WhatsAppButton />
      <div className="flex flex-wrap justify-center">
        <HeroSection />
      </div>
      <div className="flex flex-wrap justify-center">
        <Services />
      </div>
      <div className="flex flex-wrap justify-center">
        <Feature />
      </div>

      <div className="flex flex-wrap justify-center mt-6">
        <Achievements />
      </div>

      
      <Footer />
    </main>
  );
}
