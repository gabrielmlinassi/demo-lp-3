import Navbar from "@/landing-page/Navbar";
import Hero from "@/landing-page/Hero";
import Roles from "@/landing-page/Roles";
import HoWeWork from "@/landing-page/HoWeWork";
import WhyWorkWithUs from "@/landing-page/WhyWorkWithUs";

import Image from "next/image";

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
        <section className="h-screen py-20 bg-why-work-with-us-pattern bg-no-repeat bg-cover">
          <div
            style={{
              gridTemplateColumns: "1fr 500px 1fr",
            }}
            className="max-w-screen-xl mx-auto grid text-white"
          >
            <div className="col-span-1 row-start-1 text-6xl">
              A Message From
            </div>
            <div className="col-span-2 row-start-2 font-strawberry text-9xl leading-tight -mt-2">
              Rodrigo Salazar-Kawer
            </div>
            <div className="row-start-3 space-y-4">
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
            <div className="bg-red-500 relative col-start-2 col-span-1 w-full row-span-3 place-self-center">
              <div className="absolute -left-16 -top-28 w-96 h-96">
                <div className="relative w-full h-full">
                  <Image
                    src="/rodrigo3.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="absolute -right-24 -top-64 w-96 h-96 z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/rodrigo1.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="absolute w-96 h-96 -right-12 top-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/rodrigo2.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <div className="bg-yellow-400">a</div>
          </div>
        </section>
        <section className="h-screen"></section>
      </main>
      <footer></footer>
    </>
  );
}
