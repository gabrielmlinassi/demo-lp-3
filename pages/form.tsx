import { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import Button from "@/form/Button";
import Question from "@/form/Question";
import Progressbar from "@/form/Progressbar";

const options = [
  [
    "I need an extra pair of hands to complete a project.",
    "I need a specialized skill that I haven’t been able to find.",
    "I need someone to fill in for a teammate on leave.",
    "I’m looking for someone who could potentially become a FT employee (contract to hire).",
    "I have a different need that I can share with you.",
  ],
  [
    "Less than a month",
    "1–3 months",
    "3–6 months",
    "More than 6 months",
    "I’m not sure yet.",
  ],
  [
    "30 hours per week or more",
    "20–30 hours per week",
    "Less than 20 hours per week",
    "I’m not sure yet; let’s talk!",
  ],
  [
    "Yes, I have a written job description.",
    "I’ve got a specific list of tasks on paper.",
    "I have an idea of what I need and can share when we talk.",
  ],
  [
    "One will be fine.",
    "More than one is needed. ",
    "I need a team with varied skill sets (instructional designer, project manager, graphic designer, etc.).",
    "I’m not sure yet; let’s talk!",
  ],
  [
    "Right away—I am ready and eager to engage the right talent!",
    "In a few weeks",
    "I’m not sure yet; let’s talk!",
  ],
];

const Form = () => {
  return (
    <Container>
      {/* <Welcome /> */}
      {options.map((option, key) => (
        <Question key={key} options={option} />
      ))}
      <div className="flex justify-between items-end pt-4">
        <Progressbar />
        <Button size="large">Next</Button>
      </div>
    </Container>
  );
};

const Container: FC = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-form bg-no-repeat bg-right-top bg-contain">
      <div className="max-w-screen-md mx-auto py-28 text-center space-y-8">
        {children}
      </div>
    </div>
  );
};

const Welcome = () => {
  return (
    <>
      <div>
        <Image
          src="/form/welcome.png"
          width={400}
          height={400}
          objectFit="contain"
          alt="welcome message"
        />
      </div>
      <div className="text-[#5E6284]">
        <span className="font-semibold">
          I’m thrilled you’re interested in working with us
        </span>{" "}
        to find your perfect-fit instructional designer. I’d love to learn a
        little bit more about you and your needs!
      </div>
      <div className="text-[#5E6284]">
        Just three minutes of your time will help us move the process along—and
        help you think through some important details!
      </div>
      <div className="text-sm text-[#2263A3]">
        If forms are not your thing, feel free to reach out to me at {` `}
        <span className="font-semibold">rodrigo@sweetrush.com</span> anytime.
      </div>
      <div className="pt-4">
        <Button>Get Started</Button>
      </div>
    </>
  );
};

export default Form;
