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
    <div className="flex items-center space-x-8 m-44">
      {steps.map((step, idx) => (
        <div
          style={{}}
          className="inline-flex flex-col items-center w-80 bg-yellow-300"
          key={idx}
        >
          {/* p1 */}
          <div>
            <span className="block bg-gradient-to-r from-[#2364A4] via-[#3195AC] to-[#42BEAD] px-5 py-2 rounded-md text-white font-bold uppercase">
              step {idx + 1}
            </span>
          </div>
          {/* p2 */}
          <div
            className={cn(
              "relative mt-8",
              idx < steps.length - 1 &&
                cn(
                  "before:absolute before:top-1/2 before:-right-full before:transform before:-translate-y-1/2 before:w-[125px] before:h-[30px]",
                  `before:bg-line-${idx + 1} before:bg-no-repeat`
                )
            )}
          >
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
    <div className="absolute z-10 -left-32 -top-5 inline-flex flex-col items-center w-44 h-32 p-1 bg-bubble-texture bg-no-repeat bg-contain">
      <div className="font-strawberry text-4xl text-white">{name}</div>
      <div className="text-sm w-3/4 text-center text-white leading-tight">
        {role}
      </div>
    </div>
  );
};
