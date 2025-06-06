import Navbar from "./Componenets/Navbar";
import CallButton from "./Componenets/CallButton";
import WhatsAppButton from "./Componenets/WhatsAppButton";
import HeroSection from "./Componenets/HeroSection";
import Services from "./Componenets/Services";
import Features from "./Componenets/Features";
import Achievements from "./Componenets/Achivements";
import Footer from "./Componenets/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#ffffff]">
     
      <Navbar className="absolute top-0 z-10 w-screen" />
      <CallButton />
      <WhatsAppButton />
      <HeroSection />
      
       <div className="flex flex-wrap justify-center mt-6">
        <Services />
      </div>
      <div className="flex flex-wrap justify-center">
        <Features />
      </div> 
      <div className="flex flex-wrap justify-center">
        <Achievements />
      </div>  
 
      <Footer />
    </main>
  );
}
