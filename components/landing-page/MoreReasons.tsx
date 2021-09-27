import Image from "next/image";
import { FC, HTMLAttributes, useState } from "react";
import cn from "classnames";
import { FlipIcon } from "components/icons";
import CTAButton from "./shared/CTAButton";
import Heading from "./shared/Heading";

const MoreReasons = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-20">
      <Heading
        highlightedTitle="5 More Reasons"
        title="You'll Love Working With Us"
        subtitle={
          <>
            <div>
              The SweetRush Talent Solutions team is exceptionally good at
              attracting top instructional designers who will fit your needs and
              culture.
            </div>
            <div className="font-bold">Click on the cards to learn more!</div>
          </>
        }
      />
      <div className="flex items-start justify-center space-x-4 mt-8">
        <Card
          description={
            <>
              Under <span className="text-[#ABD637]">pressure?</span> We get
              it—and here’s how we help.
            </>
          }
          color="atlantis"
        />
        <Card
          description={
            <>
              How we treat candidates reflects on you—so we treat them{" "}
              <span className="text-[#3DA06E]">extremely well.</span>
            </>
          }
          color="oceanGreen"
        />
        <Card
          description={
            <>
              <span className="text-[#3CBFAE]">Remote talent?</span> We know how
              to make it work—fully remote 11 years, unified and successful.
            </>
          }
          color="puertoRico"
        />
        <Card
          description={
            <>
              Recruiting is an essential part of your{" "}
              <span className="text-[#2263A3]">diversity initiatives</span>
              —we’ve got the talent.
            </>
          }
          color="matisse"
        />
        <Card
          description={
            <>
              Why is the SweetRush logo a heart?{" "}
              <span className="text-[#594697]">Because we care!</span>
            </>
          }
          color="victoria"
        />
      </div>
      <div className="flex items-center justify-center mt-20">
        <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
      </div>
    </section>
  );
};

enum Colors {
  atlantis = "atlantis",
  oceanGreen = "oceanGreen",
  puertoRico = "puertoRico",
  matisse = "matisse",
  victoria = "Victoria",
}

const BgColors = {
  atlantis: "bg-[#ABD637]",
  oceanGreen: "bg-[#3DA06E]",
  puertoRico: "bg-[#3CBFAE]",
  matisse: "bg-[#2263A3]",
  victoria: "bg-[#594697]",
};

const HoverColors = {
  atlantis: "group-hover:bg-[#ABD637]",
  oceanGreen: "group-hover:bg-[#3DA06E]",
  puertoRico: "group-hover:bg-[#3CBFAE]",
  matisse: "group-hover:bg-[#2263A3]",
  victoria: "group-hover:bg-[#594697]",
};

const BorderColors = {
  atlantis: "border-[#ABD637]",
  oceanGreen: "border-[#3DA06E]",
  puertoRico: "border-[#3CBFAE]",
  matisse: "border-[#2263A3]",
  victoria: "border-[#594697]",
};

type CardProps = {
  description: React.ReactNode;
  color: keyof typeof Colors;
};

const Card: FC<CardProps> = ({ description, color }) => {
  const [src, setSrc] = useState("/sr-heart.svg");
  const [isFlipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        perspective: "1000px",
      }}
      className="w-64 h-96"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "none",
        }}
        className={cn(
          "group w-full h-full transition-transform duration-700",
          "odd:mt-8 flex flex-col items-center px-5 pt-10 rounded-xl border-6 cursor-default",
          !isFlipped ? "bg-[#F1F2F4]" : BgColors[color],
          BorderColors[color]
        )}
        onMouseEnter={() => setSrc("/sr-heart-white.svg")}
        onMouseLeave={() => setSrc("/sr-heart.svg")}
      >
        <div
          className={cn(
            !isFlipped ? "inline-flex" : "hidden",
            "p-4 rounded-full border-4 border-white",
            HoverColors[color]
          )}
        >
          <Image
            src={src}
            alt="sweetrush heart logo"
            width={60}
            height={60}
            objectFit="contain"
          />
        </div>
        <div className={cn("text-center text-[#5E6284] font-bold mt-4")}>
          {!isFlipped ? (
            description
          ) : (
            <div
              style={{
                transform: "rotateY(180deg)",
              }}
              className="text-white"
            >
              We are constantly working under time pressure ourselves, and we
              excel at finding people who can meet that challenge. Bringing
              extra hands on board will build your capacity and help you develop
              and deploy projects faster.
            </div>
          )}
        </div>
        <div
          style={{
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          className={cn("absolute bottom-6", isFlipped ? "left-4" : "right-4")}
        >
          <div
            onClick={() => setFlipped((prev) => !prev)}
            className="p-2 rounded-full shadow-xl cursor-pointer bg-white transition-transform duration-300 hover:scale-110"
          >
            <FlipIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreReasons;
