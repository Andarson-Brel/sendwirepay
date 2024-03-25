import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CardSection from "../components/CardSection";
import FooterCTASection from "../components/FooterCtaSection";
import Footer from "../components/Footer";

function Home() {
  AOS.init();

  return (
    <div>
      <main className={`main `}>
        <HeroSection />
        <FeaturesSection />
        <CardSection />
      </main>
      <FooterCTASection />
      <Footer />
    </div>
  );
}

export default Home;
