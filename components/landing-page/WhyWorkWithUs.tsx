import Image from "next/image";
import CTAButton from "@/landing-page/shared/CTAButton";
import Heading from "@/landing-page/shared/Heading";
import src from "@/lp-assets/why-work-with-us-bg.png";

const WhyWorkWithUs = () => {
  return (
    <section
      id="why-work-with-us"
      className="pt-16 2xl:pt-32 pr-0 sm:pr-6 2xl:pr-0 bg-gradient-to-r from-[#192024] to-[#3D4E57]"
    >
      <div className="relative overflow-hidden">
        <div className="pb-44 sm:pb-14 grid grid-cols-2 max-w-screen-xl mx-auto">
          <div>
            <div className="absolute inset-0 -left-20 -bottom-12">
              <Image
                src={src}
                layout="fill"
                objectFit="contain"
                className="object-left-bottom sm:object-left-top"
                alt="woman reading sheets"
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-1 text-right sm:text-left z-10 bg-transparent xl:bg-black xl:bg-opacity-20 2xl:bg-transparent p-3 sm:p-5 xl:rounded-md  xl:shadow-md">
            <Heading
              titleColor="white"
              highlightedTitleColor="green"
              alignment="left"
              highlightedTitle="Why"
              title={
                <>
                  <span>Work With Us? </span>
                  <div className="inline-block sm:leading-10 sm:-mt-4">
                    We Do This Work!
                  </div>
                </>
              }
            />
            <div className="mt-4 sm:mt-2 space-y-4 text-white leading-relaxed">
              <div>
                Whoever is doing recruiting for you should have a{" "}
                <span className="font-bold">
                  true understanding of the learning and development work you
                  do.
                </span>
              </div>
              <div>
                SweetRush is an innovative and groundbreaking learning and
                talent development solution provider with a 20-year track record
                of effective solutions and happy clients. Our depth of
                experience means we will quickly understand your specific needs
                and find the right nuanced talent profile to fit those needs.
              </div>
            </div>
            <div className="w-1/2 sm:w-full ml-auto mt-4 text-white leading-relaxed">
              <div>
                SweetRush’s Talent Solutions team has one agenda: to source and
                place great talent when our clients—like you—need to augment
                their teams.
              </div>
            </div>
          </div>
          <div className="hidden sm:flex col-span-full items-center justify-center sm:mt-28 z-10">
            <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
