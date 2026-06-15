import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MarqueeBanner from "../components/MarqueeBanner";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";
import AmorQueTransborda from "../components/AmorQueTransborda";
import ComoChegar from "../components/ComoChegar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <AboutSection />
      <EventsSection />
      <AmorQueTransborda />
      <ComoChegar />
      <Footer />
    </>
  );
}