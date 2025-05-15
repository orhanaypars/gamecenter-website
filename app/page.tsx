import Features from "./_components/Features";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <AboutUs />
    </main>
  );
}
