import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CTAButton from "./shared/CTAButton";
import Heading from "./shared/Heading";
import Card, { Colors } from "./Card";
import { useDevices } from "hooks/useDevices";

const MoreReasons = () => {
  const { isMobile } = useDevices();

  return (
    <section className="max-w-screen-xl mx-auto pt-20 pb-10 xl:px-6 2xl:px-0">
      <div className="px-4">
        <Heading
          highlightedTitle="5 More Reasons"
          title="You'll Love Working With Us"
          subtitle={
            <>
              <div className="mt-4">
                The SweetRush Talent Solutions team is exceptionally good at
                attracting top instructional designers who will fit your needs
                and culture.
              </div>
              <div className="font-bold mt-4">
                Click on the cards to learn more!
              </div>
            </>
          }
        />
      </div>
      {isMobile ? (
        <Swiper spaceBetween={-75} slidesPerView={1.25}>
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

      <div className="hidden xl:flex items-center justify-center xl:mt-28">
        <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
      </div>
    </section>
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
