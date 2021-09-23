import Image from "next/image";
import CTAButton from "@/shared/CTAButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#5A4797] to-[#2364A4]">
      <div className="relative grid grid-cols-3 lg:grid-cols-2 max-w-screen-xl mx-auto pt-10 lg:pt-20">
        <div className="col-span-3 lg:col-span-1 px-3 xl:px-5 2xl:px-0">
          <h1 className="text-7xl sm:text-9xl leading-none text-white font-strawberry capitalize">
            Build your team.
          </h1>
          <h2 className="text-3xl sm:text-5xl leading-tight font-medium text-white">
            Meet your deadlines. Create training that gets results.
          </h2>
        </div>

        {/*  */}
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 px-3 xl:px-5 2xl:px-0 mt-6">
          <p className="text-base sm:text-lg text-white">
            You need good people to get the job done. Every day we produce
            training solutions, so we know how you feel! Allow us to help you
            find exceptional talent to augment your team. We love this work and
            we’re ready to help.
          </p>
        </div>
        {/*  */}

        <div className="sm:max-w-[400px] lg:max-w-full col-start-1 col-span-2 row-start-3 row-end-3 z-10 lg:col-span-1 pb-28 lg:pb-56 pl-3 xl:pl-5 2xl:pl-0">
          <div className="text-lg sm:text-2xl mt-4 sm:mt-12 font-bold italic text-[#3CBFAE]">
            “I have worked with SweetRush and Rodrigo for many years, and I
            trust them and count on them, and they never let me down.”
          </div>
          <div className="max-w-[200px] sm:max-w-full flex flex-col xl:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-6 text-white">
            <p>
              <b>—Douglas E. Miller, </b>
              Director, Learning and Awareness
            </p>
            <div>
              <Image
                src="/kaiser-logo.png"
                width={125}
                height={15}
                objectFit="contain"
                objectPosition="bottom"
                alt="Kaiser Permanente logo"
              />
            </div>
          </div>
        </div>
        <div className="relative col-start-3 sm:row-start-2 sm:row-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 -ml-20 lg:ml-0 mt-6 lg:mt-0">
          <Image
            src="/hero-large.png"
            layout="fill"
            objectFit="cover"
            alt="woman"
            className="object-left-top"
          />
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
        </div>
      </div>
    </section>
  );
}
