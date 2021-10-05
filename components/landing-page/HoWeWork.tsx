import Image from "next/image";
import cn from "classnames";

import Heading from "@/landing-page/shared/Heading";
import CTAButton from "./shared/CTAButton";
import Badge from "./shared/Badge";

import step1Src from "@/lp-assets/step1.jpg";
import step2Src from "@/lp-assets/step2.jpg";
import step3Src from "@/lp-assets/step3.jpg";
import step4Src from "@/lp-assets/step4.jpg";
import { FC } from "react";

type Step = {
  name?: string;
  role?: string;
  title: React.ReactNode;
  description: string;
  imgSrc: StaticImageData | string;
  imgAlt: string;
  imgPosition: "center" | "right";
};

const steps: Step[] = [
  {
    name: "Ann Cathers",
    role: "SweetRush L&D recruiter",
    title: (
      <>
        <div>You’re in the hands</div>
        <div>of an expert.</div>
      </>
    ),
    description:
      "Meet Ann Cathers, a SweetRush L&D recruiter! Our experienced recruiters partner with you to understand your business needs.",
    imgSrc: step1Src,
    imgAlt: "",
    imgPosition: "center",
  },
  {
    title: (
      <>
        <div>We’ll craft your</div>
        <div>job profile.</div>
      </>
    ),
    description:
      "Need help writing a job description? We have the expertise to be your copilot or take the lead.",
    imgSrc: step2Src,
    imgAlt: "",
    imgPosition: "center",
  },
  {
    title: (
      <>
        <div>We’ll screen to find</div>
        <div>ideal candidates.</div>
      </>
    ),
    description:
      "Let us do the time-consuming work of screening and interviewing. We’ll proctor assessments and present the best candidates.",
    imgSrc: step3Src,
    imgAlt: "",
    imgPosition: "right",
  },
  {
    title: (
      <>
        <div>You’ll interview and select</div>
        <div>your perfect-fit talent.</div>
      </>
    ),
    description:
      "We choose candidates who have the skills and experience you need. Many of our clients only need to interview one candidate!",
    imgSrc: step4Src,
    imgAlt: "",
    imgPosition: "center",
  },
];

const HoWeWork = () => {
  return (
    <section id="how-we-work" className="bg-[#F1F2F4] min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-8 pb-16 lg:pt-12 2xl:pt-24 px-3 sm:px-6">
        <Heading
          highlightedTitle="How"
          title="we work with you"
          subtitle="Your time is valuable. We take the lead—so you can focus on your job."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 sm:gap-8 2xl:gap-14 lg:mt-8 2xl:mt-20">
          {steps.map((step, idx) => (
            <StepCard key={idx} step={step} idx={idx} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-12 2xl:mt-28">
          <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
        </div>
      </div>
    </section>
  );
};

const StepCard: FC<{ step: Step; idx: number }> = ({ step, idx }) => {
  return (
    <div
      className={cn(
        "relative inline-flex flex-col items-center w-full h-full",
        idx % 2 === 0 ? "sm:place-self-end" : "sm:place-self-start",
        "xl:place-self-center"
      )}
      key={idx}
    >
      <StepArrow idx={idx} />
      {/* p1 */}
      <div>
        <span className="block bg-gradient-to-r from-[#2364A4] via-[#3195AC] to-[#42BEAD] px-5 py-2 rounded-md text-white font-bold uppercase">
          step {idx + 1}
        </span>
      </div>
      {/* p2 */}
      <div className={cn("relative", idx === 0 ? "mt-20" : "mt-8", "sm:mt-8")}>
        {step.name && step.role && (
          <div className="absolute -left-24 -top-12 sm:-top-5 lg:left-auto lg:-right-32 lg:-top-8 2xl:-left-32 2xl:-top-5">
            <Badge name={step.name} role={step.role} />
          </div>
        )}
        <div className="p-3 bg-white inline-flex clip-path-inverted-hexagon">
          <div className="inline-flex clip-path-inverted-hexagon w-36 h-40 relative">
            <Image
              src={step.imgSrc}
              layout="fill"
              objectFit="cover"
              objectPosition={step.imgPosition}
              alt={step.imgAlt}
            />
          </div>
        </div>
      </div>
      {/* p3 */}
      <div className="mt-4 space-y-2">
        <div className="font-bold text-[#2263A3] text-center">{step.title}</div>
        <p className="text-center text-[#5E6284]">{step.description}</p>
      </div>
    </div>
  );
};

const StepArrow = ({ idx }) => {
  return (
    <div
      className={cn(
        "absolute -bottom-20 xl:top-36 xl:-right-24 w-[70px] h-[70px] xl:w-[125px] xl:h-[30px] z-10 bg-no-repeat",
        idx === 0 && "right-8 bg-line-1-mobile sm:bg-none xl:bg-line-1",
        idx === 1 &&
          "left-8 xl:left-auto bg-line-2-mobile sm:bg-none xl:bg-line-2",
        idx === 2 && "right-8 bg-line-3-mobile sm:bg-none xl:bg-line-3",
        idx === 3 && "hidden"
      )}
    />
  );
};

export default HoWeWork;
