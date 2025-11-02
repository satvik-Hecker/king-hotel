import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/Hero";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroCarousel></HeroCarousel>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}
