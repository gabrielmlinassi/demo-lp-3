import Navbar from "@/landing-page/Navbar";
import Hero from "@/landing-page/Hero";
import Roles from "@/landing-page/Roles";
import HoWeWork from "@/landing-page/HoWeWork";
import WhyWorkWithUs from "@/landing-page/WhyWorkWithUs";

import Image from "next/image";
import Badge from "@/shared/Badge";
import CTAButton from "@/shared/CTAButton";

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
        <section className="py-20 bg-why-work-with-us-pattern bg-no-repeat bg-cover">
          <div
            style={{
              gridTemplateColumns: "minmax(400px,1fr) 600px 200px",
              gridTemplateRows: "70px 120px 1fr",
            }}
            className="max-w-screen-xl mx-auto grid text-white"
          >
            <div className="col-span-1 text-5xl">A Message From</div>
            <div className="row-start-2 col-start-1 col-span-2 z-10 font-strawberry text-9xl leading-tight -mt-6">
              Rodrigo Salazar-Kawer
            </div>
            <div className="row-start-3 space-y-8 mt-4">
              <div className="font-bold">
                who heads up our Talent Solutions team:
              </div>
              <div>
                It&apos;s a pleasure to say hello and hopefully connect soon. I
                love that my life and career landed me at SweetRush, where every
                day I impact the lives of motivated people: our clients and
                talent who share a love of our craft.
              </div>
              <div>
                We’re matchmakers. And making those successful matches is what
                keeps me and my team eager to crack open the computer every
                morning. Aligning your needs with the capabilities of {` `}
                <span className="font-bold">instructional designers</span> is an
                art form we love.
              </div>
              <div>
                I know you may feel frustrated about the difficulty of finding
                great people with the right skills and attitude. I’ll tell you a
                secret: it just takes time and focus. Like you, the clients I
                work with already have full-time jobs, so of course it&apos;s
                hard to focus on sourcing great talent.
              </div>
            </div>
            <div className="col-start-2 row-start-1 row-span-3">
              <div className="relative w-full h-full">
                <Image
                  src="/rodrigo-desktop.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="relative col-start-3 row-start-2 text-right">
              <div className="absolute -left-16 -top-16">
                <Badge
                  name="Meet Rodrigo"
                  role="Director of Talent Solutions"
                  size="large"
                />
              </div>
              <div className="mt-24 font-semibold text-xl text-[#ABD637]">
                This is our focus, and if you need talent, we can help.
              </div>
              <div className="mt-8">
                Please reach out. It would truly make my day to hear from and
                help you.
              </div>
              <div className="mt-8">All the best,</div>
              <Image
                src="/signature.svg"
                alt="signature"
                width={100}
                height={50}
              />
              <div className="mt-4">rodrigo@sweetrush.com</div>
            </div>
            <div className="col-start-1 col-span-2 place-self-center mt-20">
              <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
            </div>
          </div>
        </section>
        <section className="h-screen"></section>
      </main>
      <footer></footer>
    </>
  );
}
