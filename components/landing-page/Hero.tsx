import Image from "next/image";
import cn from "classnames";
import heroSrc from "@/lp-assets/hero-large.png";
import kaiserSrc from "@/lp-assets/kaiser-logo.png";

import CTAButton from "@/landing-page/shared/CTAButton";

export default function Hero() {
  return (
    <section
      style={{ minHeight: "calc(100vh - 64px)" }}
      className={cn(
        "relative flex flex-col bg-gradient-to-r from-[#5A4797] to-[#2364A4]"
      )}
    >
      <div className="h-full flex-1 flex relative max-w-screen-xl mx-auto pt-10 lg:pt-4 2xl:pt-20">
        <div className=" flex flex-col w-full sm:w-1/2">
          <div className="px-3 xl:px-5 2xl:px-0">
            <h1 className="text-7xl sm:text-9xl leading-none text-white font-strawberry capitalize">
              Build your team.
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:-mt-2 2xl:mt-0 leading-tight font-medium text-white">
              Meet your deadlines. Create training that gets results.
            </h2>
          </div>
          <div className="px-3 xl:px-5 2xl:px-0 mt-6 lg:mt-4">
            <p className="text-base sm:text-lg text-white">
              You need good people to get the job done. Every day we produce
              training solutions, so we know how you feel! Allow us to help you
              find exceptional talent to augment your team. We love this work
              and we’re ready to help.
            </p>
          </div>
          <div className="flex relative sm:max-w-[400px] h-full lg:max-w-full z-10 pl-3 xl:pl-5 2xl:pl-0">
            <div className="flex flex-col w-1/2 xl:w-full pb-20">
              <div className="text-lg sm:text-2xl mt-4 2xl:mt-6 font-bold italic text-[#3CBFAE]">
                “I have worked with SweetRush and Rodrigo for many years, and I
                trust them and count on them, and they never let me down.”
              </div>
              <div className="max-w-[200px] sm:max-w-full flex flex-col xl:flex-row space-y-0 lg:space-x-4 mt-6 text-white">
                <p>
                  <b>—Douglas E. Miller, </b>
                  Director, Learning and Awareness
                </p>
                <div>
                  <Image
                    src={kaiserSrc}
                    width={125}
                    height={15}
                    objectFit="contain"
                    objectPosition="bottom"
                    alt="Kaiser Permanente logo"
                  />
                </div>
              </div>
            </div>
            <div className="block xl:hidden relative w-3/4 h-full -ml-12">
              <Image
                src={heroSrc}
                layout="fill"
                objectFit="cover"
                alt="woman"
                className="object-left-bottom"
              />
            </div>
          </div>
        </div>
        <div className="hidden xl:block w-1/2 relative -ml-20 lg:ml-0 mt-6 lg:mt-0">
          <Image
            src={heroSrc}
            layout="fill"
            objectFit="cover"
            alt="woman"
            className="object-left-top"
          />
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10">
        <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
      </div>
    </section>
  );
}
