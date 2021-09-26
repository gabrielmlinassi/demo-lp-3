import Image from "next/image";
import Badge from "@/shared/Badge";
import CTAButton from "@/shared/CTAButton";
import { isMobile } from "react-device-detect";

const SubFooter = () => {
  return (
    <section className="py-20 bg-why-work-with-us-pattern bg-no-repeat bg-cover">
      <div className="grid 2xl:grid-rows-[70px,120px,1fr] 2xl:grid-cols-[minmax(400px,1fr),600px,200px] max-w-screen-xl mx-auto px-3 2xl:px-0 text-white text-center 2xl:text-left">
        <div className="2xl:col-span-1 text-2xl 2xl:text-5xl">
          A Message From
        </div>
        <div
          style={{
            backgroundPosition: "65% 50%",
          }}
          className="2xl:bg-subfooter-line bg-no-repeat 2xl:row-start-2 2xl:col-start-1 2xl:col-span-2 z-10 font-strawberry text-5xl 2xl:text-9xl leading-tight 2xl:-mt-6"
        >
          Rodrigo Salazar-Kawer
        </div>
        <div className="2xl:row-start-3 space-y-8 mt-4">
          <div className="font-bold">
            who heads up our Talent Solutions team:
          </div>
          <div>
            It&apos;s a pleasure to say hello and hopefully connect soon. I love
            that my life and career landed me at SweetRush, where every day I
            impact the lives of motivated people: our clients and talent who
            share a love of our craft.
          </div>
          <div>
            We’re matchmakers. And making those successful matches is what keeps
            me and my team eager to crack open the computer every morning.
            Aligning your needs with the capabilities of {` `}
            <span className="font-bold">instructional designers</span> is an art
            form we love.
          </div>
          <div className="relative">
            I know you may feel frustrated about the difficulty of finding great
            people with the right skills and attitude. I’ll tell you a secret:
            it just takes time and focus. Like you, the clients I work with
            already have full-time jobs, so of course it&apos;s hard to focus on
            sourcing great talent.
            <div className="absolute 2xl:hidden w-44 h-44 bg-subfooter-line-mobile bg-no-repeat"></div>
          </div>
        </div>
        <div className="h-80 sm:h-96 mt-24 2xl:mt-0 2xl:h-auto 2xl:col-start-2 2xl:row-start-1 2xl:row-span-3">
          <div className="relative w-full h-full">
            <Image
              src={isMobile ? "/rodrigo-mobile.png" : "/rodrigo-desktop.png"}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="relative 2xl:col-start-3 2xl:row-start-2 text-center 2xl:text-right">
          <div className="absolute left-auto right-0 -top-96 sm:left-auto sm:right-8 sm:-top-96 2xl:-left-16 2xl:-top-16">
            <Badge
              name="Meet Rodrigo"
              role="Director of Talent Solutions"
              size="large"
            />
          </div>
          <div className="mt-8 2xl:mt-24 font-semibold text-xl text-[#ABD637]">
            This is our focus, and if you need talent, we can help.
          </div>
          <div className="mt-8">
            Please reach out. It would truly make my day to hear from and help
            you.
          </div>
          <div className="mt-8">All the best,</div>
          <Image src="/signature.svg" alt="signature" width={100} height={50} />
          <div className="mt-4">rodrigo@sweetrush.com</div>
        </div>
        <div className="hidden 2xl:block 2xl:col-start-1 2xl:col-span-2 place-self-center mt-20">
          <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
