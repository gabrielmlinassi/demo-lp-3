import Navbar from "components/Navbar";
import Hero from "components/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        {/* another section */}
        <section className="w-full h-screen bg-yellow-200"></section>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
