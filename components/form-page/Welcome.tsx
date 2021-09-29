import Image from "next/image";
import FormButton from "@/form/FormButton";
import { IFormValues } from "pages/form";
import { FC } from "react";
import { useForm } from "react-hook-form";

type WelcomeProps = { onSubmit: (data: IFormValues) => void };

const Welcome: FC<WelcomeProps> = ({ onSubmit }) => {
  const { handleSubmit } = useForm<IFormValues>();

  return (
    <form className="space-y-8 text-center" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Image
          src="/form/welcome.png"
          width={300}
          height={300}
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
      <div className="inline-block pt-4">
        <FormButton>Get Started</FormButton>
      </div>
    </form>
  );
};

export default Welcome;
