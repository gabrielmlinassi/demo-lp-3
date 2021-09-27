import Image from "next/image";
import { FC, useState } from "react";
import cn from "classnames";
import { FlipIcon } from "components/icons";
import CTAButton from "./shared/CTAButton";
import Heading from "./shared/Heading";

import { useDevices } from "hooks/useDevices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MoreReasons = () => {
  const { isMobile } = useDevices();
  console.log({ isMobile });

  return (
    <section className="max-w-screen-xl mx-auto py-20 xl:px-6 2xl:px-0">
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
      {isMobile ? (
        <div className="bg-green-300">
          <Swiper
            spaceBetween={-25}
            slidesPerView={1.25}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {items.map((item, key) => (
              <SwiperSlide key={key} className="py-8 pl-4">
                <Card
                  key={key}
                  description={item.description}
                  backDescription={item.backDescription}
                  color={item.color}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex items-start justify-center space-x-4 mt-8">
          {items.map((item, key) => (
            <Card
              key={key}
              description={item.description}
              backDescription={item.backDescription}
              color={item.color}
            />
          ))}
        </div>
      )}

      <div className="flex items-center justify-center mt-28">
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

export const Card: FC<CardProps> = ({
  description,
  backDescription,
  color,
}) => {
  const [src, setSrc] = useState("/sr-heart.svg");
  const [isFlipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        perspective: "1000px",
      }}
      className="w-64 h-[400px]"
      onMouseEnter={() => setSrc("/sr-heart-white.svg")}
      onMouseLeave={() => setSrc("/sr-heart.svg")}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "none",
        }}
        className={cn(
          "group w-full h-full transition-transform duration-700",
          "odd:mt-8 flex flex-col items-center rounded-xl border-6 cursor-default",
          isFlipped
            ? `${BgColors[color]} px-4 pt-6`
            : "bg-[#F1F2F4] px-5 pt-10",
          BorderColors[color]
        )}
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
        <div
          className={cn(
            "text-center text-[#5E6284] font-bold",
            isFlipped ? "mt-0  " : "mt-4"
          )}
        >
          {!isFlipped ? (
            description
          ) : (
            <div
              style={{
                transform: "rotateY(180deg)",
              }}
              className="text-white font-medium text-sm"
            >
              {backDescription}
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

export default MoreReasons;
