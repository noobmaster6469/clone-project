// import Counter from "./components/Counter";

import Foot from "./components/Foot";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SplitSections from "./components/SplitSections";

export default function Home() {
  const user = {
    name: null,
  };
  return (
    <>
      <Navbar user={user} />
      <div className="mt-16">
        <Hero />
        <SplitSections />
        <Foot />
      </div>
      {/* <Counter /> */}
    </>
  );
}
