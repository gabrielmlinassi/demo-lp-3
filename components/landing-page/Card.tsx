import Image from "next/image";
import { FC, useState } from "react";
import cn from "classnames";
import { FlipIcon } from "components/icons";

export enum Colors {
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
        "w-full h-full border-6 rounded-xl cursor-default px-5 pt-10",
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
        "w-full h-full border-6 rounded-xl cursor-default px-5 pt-10",
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

const Card: FC<CardProps> = ({ description, backDescription, color }) => {
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

export default Card;
