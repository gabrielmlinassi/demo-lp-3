import Container from "@/landing-page/Container";
import Navbar from "@/landing-page/Navbar";
import Hero from "@/landing-page/Hero";
import Roles from "@/landing-page/Roles";
import HoWeWork from "@/landing-page/HoWeWork";
import WhyWorkWithUs from "@/landing-page/WhyWorkWithUs";
import Footer from "@/landing-page/Footer";
import MoreReasons from "@/landing-page/MoreReasons";
import MeetRodrigo from "@/landing-page/MeetRodrigo";

export default function Home() {
  return (
    <Container>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Roles />
        <HoWeWork />
        <WhyWorkWithUs />
        <MoreReasons />
        <MeetRodrigo />
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}
