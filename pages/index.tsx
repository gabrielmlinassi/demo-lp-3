import Navbar from "components/Navbar";
import Hero from "components/Hero";
import Roles from "components/Roles";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Roles />
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
