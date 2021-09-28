import Image from "next/image";
import cn from "classnames";
import { FC, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const Form = () => {
  return (
    <Container>
      {/* <Welcome /> */}
      <Question />
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

const options = [
  "I need an extra pair of hands to complete a project.",
  "I need a specialized skill that I haven’t been able to find.",
  "I need someone to fill in for a teammate on leave.",
  "I’m looking for someone who could potentially become a FT employee (contract to hire).",
  "I have a different need that I can share with you.",
];

const Question = () => {
  return (
    <>
      <div>
        <Image
          src="/form/q1.png"
          width={550}
          height={150}
          objectFit="contain"
          alt="welcome message"
        />
      </div>
      <div>
        <Options options={options} />
      </div>
      <div className="flex justify-between items-end pt-4">
        <Progressbar />
        <Button size="large">Next</Button>
      </div>
    </>
  );
};

enum Sizes {
  base = "base",
  large = "large",
}

type ButtonProps = {
  size?: keyof typeof Sizes;
};

const Button: FC<ButtonProps> = ({ children, size = "base" }) => {
  return (
    <button
      className={cn(
        size === Sizes.large ? "px-16 py-3" : "px-6 py-3",
        "text-white font-semibold bg-gradient-to-r from-[#2075C6] to-[#51A1FF] rounded-full"
      )}
    >
      {children}
    </button>
  );
};

const Progressbar = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="relative w-44 h-3 mb-1 rounded-full overflow-hidden">
        <div className="absolute bg-[#F1F2F4] w-full h-3"></div>
        <div className="absolute bg-[#594697] w-1/2 h-3 transition-all duration-300"></div>
      </div>
      <div className="text-xs">page 1 of 7</div>
    </div>
  );
};

type OptionsProps = {
  options: string[];
};

const Options: FC<OptionsProps> = ({ options }) => {
  const [selected, setSelected] = useState(false);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">
        Talent Solutions form
      </RadioGroup.Label>
      <div className="space-y-4">
        {options.map((option, key) => (
          <RadioGroup.Option
            key={key}
            value={option}
            className="focus:outline-none"
          >
            {({ checked }) => (
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-[#2075C6] to-[#51A1FF] p-[2px] rounded-full flex focus-within:ring">
                  <div className="bg-white p-[2px] rounded-full flex">
                    <input
                      type="radio"
                      checked={checked}
                      className={cn(
                        "w-4 h-4 border-none rounded-full",
                        "checked:bg-gradient-to-r checked:from-[#2075C6] checked:to-[#51A1FF]",
                        "hover:bg-black hover:bg-opacity-10",
                        "focus:ring-0 focus:ring-offset-0"
                      )}
                    />
                  </div>
                </div>
                <RadioGroup.Description>
                  <span className="text-[#5E6284]">{option}</span>
                </RadioGroup.Description>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Form;
