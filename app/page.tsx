import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SplitSections from "./components/SplitSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Hero />
        <SplitSections />
      </div>
    </>
  );
}
