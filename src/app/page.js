import Navbar from "./Components/Navbar";
import CallButton from "./Components/CallButton";
import WhatsAppButton from "./Components/WhatsAppButton";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Features from "./Components/Features";
import GetInTouchSection from "./Components/GetInTouchSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Navbar */}
      <Navbar className="fixed top-0 z-50 w-full" />

      {/* Floating Buttons */}
      <CallButton />
      <WhatsAppButton />

      {/* Sections */}
      <HeroSection />

      <section className="mt-6">
        <Services />
      </section>

      <section>
        <Features />
      </section>

      <section>
        <GetInTouchSection />
      </section>

      <Footer />
    </main>
  );
}