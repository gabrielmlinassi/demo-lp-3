import Navbar from "@/landing-page/Navbar";
import Hero from "@/landing-page/Hero";
import Roles from "@/landing-page/Roles";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Roles />
        {/* HowWeWork */}
        <section className="max-w-screen-xl mx-auto my-16 sm:px-3 xl:px-0 bg-yellow-300 h-screen"></section>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
