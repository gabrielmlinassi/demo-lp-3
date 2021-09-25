import Image from "next/image";
import { FC } from "react";
import cn from "classnames";

import Heading from "@/shared/Heading";

type Steps = {
  name?: string;
  role?: string;
  imgSrc: string;
  imgAlt: string;
};

const steps: Steps[] = [
  {
    name: "Ann Cathers",
    role: "SweetRush L&D recruiter",
    imgSrc: "/assets/instructional-designer.png",
    imgAlt: "administrator",
  },
  {
    imgSrc: "/assets/facilitator.png",
    imgAlt: "facilitator",
  },
  {
    imgSrc: "/assets/manager.png",
    imgAlt: "manager",
  },
  {
    imgSrc: "/assets/manager.png",
    imgAlt: "manager",
  },
];

const HoWeWork = () => {
  return (
    <section className="bg-[#F1F2F4] min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-8 pb-16 xl:pt-24 sm:px-3 xl:px-0">
        <Heading
          highlightedTitle="How"
          title="we work with you"
          subtitle="Your time is valuable. We take the lead—so you can focus on your job."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 sm:gap-8 2xl:gap-14 mt-20">
          {steps.map((step, idx) => (
            <div
              className={cn(
                "relative inline-flex flex-col items-center w-full",
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
              <div
                className={cn(
                  "relative",
                  idx === 0 ? "mt-20" : "mt-8",
                  "sm:mt-8"
                )}
              >
                {step.name && step.role && (
                  <Badge name={step.name} role={step.role} />
                )}
                <div className="p-3 bg-white inline-flex clip-path-inverted-hexagon">
                  <div className="inline-flex clip-path-inverted-hexagon">
                    <Image
                      src={step.imgSrc}
                      width={125}
                      height={150}
                      objectFit="cover"
                      alt={step.imgAlt}
                    />
                  </div>
                </div>
              </div>
              {/* p3 */}
              <div className="mt-4 space-y-2">
                <div className="font-bold text-[#2263A3] text-center">
                  <div>You’re in the hands</div>
                  <div>of an expert.</div>
                </div>
                <p className="text-center text-[#5E6284]">
                  Meet Ann Cathers, a SweetRush L&D recruiter. Like all of our
                  recruiters, she has years of experience vetting learning
                  professionals, will understand your business needs, be agile,
                  and partner with you throughout the process.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type BadgeProps = {
  name: string;
  role: string;
};

const Badge: FC<BadgeProps> = ({ name, role }) => {
  return (
    <div className="absolute -left-24 -top-12 sm:-top-5 lg:left-auto lg:-right-32 lg:-top-8 2xl:-left-32 2xl:-top-5 inline-flex flex-col items-center w-44 h-32 p-1 bg-bubble-texture bg-no-repeat bg-contain z-10">
      <div className="font-strawberry text-4xl text-white">{name}</div>
      <div className="text-sm w-3/4 text-center text-white leading-tight">
        {role}
      </div>
    </div>
  );
};

const StepArrow = ({ idx }) => {
  return (
    <div
      className={cn(
        "absolute z-10 bg-no-repeat",
        idx === 3 && "hidden",
        "-bottom-20 w-[70px] h-[70px]",
        idx % 2 === 0 ? "right-8" : "left-8 xl:left-auto",
        "xl:top-36 xl:-right-24 xl:w-[125px] xl:h-[30px]",
        idx === 0 && "bg-line-1-mobile sm:bg-none xl:bg-line-1",
        idx === 1 && "bg-line-2-mobile sm:bg-none xl:bg-line-2",
        idx === 2 && "bg-line-3-mobile sm:bg-none xl:bg-line-3"
      )}
    />
  );
};

export default HoWeWork;
