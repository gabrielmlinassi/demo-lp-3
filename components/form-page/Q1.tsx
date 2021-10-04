import { FC } from "react";
import Image from "next/image";
import { UseFormRegister } from "react-hook-form";
import { IFormValues, PreloadedImg } from "pages/form";
import { Checkbox } from "./Checkbox";
import src from "@/form-assets/q1.svg";

type Q1Props = {
  register: UseFormRegister<IFormValues>;
  img: PreloadedImg;
};

const Q1: FC<Q1Props> = ({ register, img }) => {
  return (
    <>
      <div>
        <Image
          src={img.src}
          placeholder="blur"
          blurDataURL={img.blurDataURL}
          width={550}
          height={150}
          objectFit="contain"
          alt="welcome message"
        />
      </div>
      <div className="space-y-4">
        <Checkbox
          label="I need an extra pair of hands to complete a project."
          value="Need an extra pair of hands to complete a project."
          register={register("q1", { required: true })}
        />
        <Checkbox
          label="I need a specialized skill that I haven’t been able to find."
          value="Need a specialized skill that haven’t been able to find."
          register={register("q1", { required: true })}
        />
        <Checkbox
          label="I need someone to fill in for a teammate on leave."
          value="Need someone to fill in for a teammate on leave."
          register={register("q1", { required: true })}
        />
        <Checkbox
          label="I’m looking for someone who could potentially become a FT employee (contract to hire)."
          value="Looking for someone who could potentially become a FT employee (contract to hire)."
          register={register("q1", { required: true })}
        />
        <Checkbox
          label="I have a different need that I can share with you."
          value="I have a different need that I can share with you."
          register={register("q1", { required: true })}
        />
      </div>
    </>
  );
};

export default Q1;
