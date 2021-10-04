import { FC } from "react";
import Image from "next/image";
import { Control, Controller } from "react-hook-form";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import src from "@/form-assets/q4.svg";
import { IFormValues } from "pages/form";

const Q4: FC<{ control: Control<IFormValues> }> = ({ control }) => {
  return (
    <>
      <div>
        <Image
          src={src}
          width={550}
          height={150}
          objectFit="contain"
          alt="welcome message"
        />
      </div>
      <div>
        <Controller
          render={({ field: { onChange, value }, formState: { errors } }) => {
            return (
              <RadioGroup value={value} onChange={onChange}>
                <Radio
                  label="Yes, I have a written job description."
                  value="Yes, I have a written job description."
                />
                <Radio
                  label="I’ve got a specific list of tasks on paper."
                  value="I've got a specific list of task on paper."
                />
                <Radio
                  label="I have an idea of what I need and can share when we talk."
                  value="I have an idea of what I need and can share when we talk."
                />
              </RadioGroup>
            );
          }}
          control={control}
          name={"q4"}
          defaultValue=""
        />
      </div>
    </>
  );
};

export default Q4;
