import Image from "next/image";
import { FC } from "react";
import cn from "classnames";

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

export default function Test() {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center space-y-12 xl:space-y-0 xl:space-x-8 xl:m-44">
      {steps.map((step, idx) => (
        <div
          className="relative inline-flex flex-col items-center w-full sm:w-80 bg-yellow-300"
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
          <div className={cn("relative xl:mt-8", idx === 0 ? "mt-20" : "mt-8")}>
            {step.name && step.role && (
              <Badge name={step.name} role={step.role} />
            )}
            <div className="p-4 bg-red-400 inline-flex clip-path-inverted-hexagon">
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
              professionals, will understand your business needs, be agile, and
              partner with you throughout the process.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

type BadgeProps = {
  name: string;
  role: string;
};

const Badge: FC<BadgeProps> = ({ name, role }) => {
  return (
    <div className="absolute z-10 -left-24 -top-12 xl:-left-32 xl:-top-5 inline-flex flex-col items-center w-44 h-32 p-1 bg-bubble-texture bg-no-repeat bg-contain">
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
        "-bottom-20 w-[70px] h-[70px]",
        idx % 2 === 0 ? "right-8" : "left-8 xl:left-auto",
        "xl:top-36 xl:-right-20 xl:w-[125px] xl:h-[30px]",
        idx === 0 && "bg-line-1-mobile xl:bg-line-1",
        idx === 1 && "bg-line-2-mobile xl:bg-line-2",
        idx === 2 && "bg-line-3-mobile xl:bg-line-3"
      )}
    />
  );
};
