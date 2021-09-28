import Image from "next/image";
import { FC, useState } from "react";
import cn from "classnames";
import { FlipIcon } from "components/icons";

enum Colors {
  atlantis = "atlantis",
  oceanGreen = "oceanGreen",
  puertoRico = "puertoRico",
  matisse = "matisse",
  victoria = "victoria",
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
  backDescription: React.ReactNode;
  color: keyof typeof Colors;
};

const FrontFace = ({ description, color, setFlipped }) => {
  const [src, setSrc] = useState("/sr-heart.svg");

  return (
    <div
      className={cn(
        "relative w-full h-full transition-transform duration-700 border-6 rounded-xl cursor-default px-5 pt-10",
        "group flex flex-col items-center bg-[#F1F2F4]",
        BorderColors[color]
      )}
      onMouseEnter={() => setSrc("/sr-heart-white.svg")}
      onMouseLeave={() => setSrc("/sr-heart.svg")}
    >
      <div
        className={cn(
          "inline-flex p-4 rounded-full border-4 border-white",
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
        {description}
      </div>
      <FlipButton setFlipped={setFlipped} />
    </div>
  );
};

const BackFace = ({ backDescription, color, setFlipped }) => {
  return (
    <div
      className={cn(
        "relative w-full h-full transition-transform duration-700 border-6 rounded-xl cursor-default px-5 pt-10",
        BorderColors[color],
        BgColors[color]
      )}
    >
      <div className={cn("text-center text-[#5E6284] font-bold mt-0")}>
        <div className="text-white font-medium text-sm">{backDescription}</div>
      </div>
      <FlipButton setFlipped={setFlipped} />
    </div>
  );
};

const FlipButton = ({ setFlipped }) => {
  return (
    <div className={cn("absolute bottom-6 right-4")}>
      <div
        className="p-2 rounded-full shadow-xl cursor-pointer bg-white"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <FlipIcon />
      </div>
    </div>
  );
};

export const Card: FC<CardProps> = ({
  description,
  backDescription,
  color,
}) => {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <div>
      <div className={`w-64 h-[400px] flip-card ${isFlipped && "flipped"}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FrontFace
              description={description}
              color={color}
              setFlipped={setFlipped}
            />
          </div>
          <div className="flip-card-back">
            <BackFace
              backDescription={backDescription}
              color={color}
              setFlipped={setFlipped}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Test2() {
  return (
    <Card
      backDescription={items[0].backDescription}
      color={items[0].color}
      description={items[0].description}
    />
  );
}

type Item = {
  description: React.ReactNode;
  backDescription: React.ReactNode;
  color: Colors;
};

const items: Item[] = [
  {
    description: (
      <>
        Under <span className="text-[#ABD637]">pressure?</span> We get it—and
        here’s how we help.
      </>
    ),
    backDescription: (
      <>
        We are constantly working under time pressure ourselves, and we excel at
        finding people who can meet that challenge. Bringing extra hands on
        board will build your capacity and help you develop and deploy projects
        faster.
      </>
    ),
    color: Colors.atlantis,
  },
  {
    description: (
      <>
        How we treat candidates reflects on you—so we treat them{" "}
        <span className="text-[#3DA06E]">extremely well.</span>
      </>
    ),
    backDescription: (
      <>
        One happy candidate will be chosen to augment your team, but hundreds
        will be rejected. At SweetRush, we are obsessive about treating people
        kindly and with consideration and empathy. We will represent you and
        your brand the way you’d want it to be.
      </>
    ),
    color: Colors.oceanGreen,
  },
  {
    description: (
      <>
        <span className="text-[#3CBFAE]">Remote talent?</span> We know how to
        make it work—fully remote 11 years, unified and successful.
      </>
    ),
    backDescription: (
      <>
        You will not encounter a more unified, connected, and high-performing
        team (200 people strong!)—and we’ve been 100% remote since 2009. We know
        remote work and how to set up remote talent and teams for success.
      </>
    ),
    color: Colors.puertoRico,
  },
  {
    description: (
      <>
        Recruiting is an essential part of your{" "}
        <span className="text-[#2263A3]">diversity initiatives</span>
        —we’ve got the talent.
      </>
    ),
    backDescription: (
      <>
        We’re dedicated to creating equitable and inclusive workplaces, seeking
        out diverse talent through our recruiting practices. From instructional
        designers with DEIB expertise, to experienced facilitators who can guide
        conversations on sensitive topics, to gender-neutral voice-over talent,
        we can deliver the right talent for you.
      </>
    ),
    color: Colors.matisse,
  },
  {
    description: (
      <>
        Why is the SweetRush logo a heart?{" "}
        <span className="text-[#594697]">Because we care!</span>
      </>
    ),
    backDescription: (
      <>
        We live in a complicated world in the best of times, and now we all
        share added layers of uncertainty and stress. We feel it and we know you
        do. Since the day we opened in 2001, we’ve focused on caring and
        empathy. Now more than ever, all of us need to be united and take care
        of each other, and you can always count on us to act accordingly.
      </>
    ),
    color: Colors.victoria,
  },
];
