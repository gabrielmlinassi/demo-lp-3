import Navbar from "@/landing-page/Navbar";
import Hero from "@/landing-page/Hero";
import Roles from "@/landing-page/Roles";
import HoWeWork from "@/landing-page/HoWeWork";
import CTAButton from "@/shared/CTAButton";
import Heading from "@/shared/Heading";

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
        <section className="h-screen grid xl:grid-cols-2  bg-gradient-to-r from-[#192024] to-[#3D4E57]">
          <div></div>
          <div>
            <Heading
              titleColor="white"
              highlightedTitleColor="green"
              alignment="left"
              highlightedTitle="Why"
              title={
                <>
                  <span>Work With Us?</span>
                  <div>We Do This Work!</div>
                </>
              }
            />
          </div>
          <div className="col-span-full flex items-center justify-center">
            <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
