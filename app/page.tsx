import Features from "./_components/Features";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import FavQ from "./_components/FavQ";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <AboutUs />
      <FavQ />
    </main>
  );
}
