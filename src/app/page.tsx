import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

export default function Home() {
  return (
    <>
      <Schema />
      <Nav />
      <main>
        <Hero />
        <Locations />
        <Products />
        <Reviews />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  );
}
