import Navbar from "@/landing-page/Navbar";
import Hero from "@/landing-page/Hero";
import Roles from "@/landing-page/Roles";
import HoWeWork from "@/landing-page/HoWeWork";
import WhyWorkWithUs from "@/landing-page/WhyWorkWithUs";
import SubFooter from "@/landing-page/SubFooter";
import Footer from "@/landing-page/Footer";
import MoreReasons from "@/landing-page/MoreReasons";

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
        <WhyWorkWithUs />
        {/* <MoreReasons /> */}
        <SubFooter />
        <Footer />
      </main>
      <footer></footer>
    </>
  );
}
