import { FC } from "react";
import Image from "next/image";
import { Control, Controller } from "react-hook-form";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import src from "@/form-assets/q6.svg";
import { IFormValues } from "pages/form";

const Q6: FC<{ control: Control<IFormValues> }> = ({ control }) => {
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
                  shouldFocusError={!!errors.q6}
                  label="Right away—I am ready and eager to engage the right talent!"
                  value="Right away—I am ready and eager to engage the right talent!"
                />
                <Radio label="In a few weeks" value="In a few weeks" />
                <Radio
                  label="I’m not sure yet; let’s talk!"
                  value="I'm not sure yet let's talk"
                />
              </RadioGroup>
            );
          }}
          control={control}
          name={"q6"}
          rules={{
            required: true,
          }}
        />
      </div>
    </>
  );
};

export default Q6;
