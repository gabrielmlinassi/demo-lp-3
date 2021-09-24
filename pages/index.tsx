import Navbar from "@/landing-page/Navbar";
import Hero from "@/landing-page/Hero";
import Roles from "@/landing-page/Roles";
import HoWeWork from "@/landing-page/HoWeWork";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Roles />
        <HoWeWork />
      </main>
      <footer></footer>
    </>
  );
}
