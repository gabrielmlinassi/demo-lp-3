import Image from "next/image";
import { Control, Controller } from "react-hook-form";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import src from "@/form-assets/q5.svg";
import { FC } from "react";
import { IFormValues } from "pages/form";

type Q5Props = {
  control: Control<IFormValues>;
};

const Q5: FC<Q5Props> = ({ control }) => {
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
          render={({ field: { onChange, value } }) => {
            return (
              <RadioGroup value={value} onChange={onChange}>
                <Radio label="One will be fine." value="One will be fine." />
                <Radio
                  label="More than one is needed."
                  value="More than one is needed."
                />
                <Radio
                  label="I need a team with varied skill sets (instructional designer, project manager, graphic designer, etc.)."
                  value="I need a team with varied skill set."
                />
                <Radio
                  label="I’m not sure yet; let’s talk!"
                  value="I’m not sure yet let’s talk"
                />
              </RadioGroup>
            );
          }}
          control={control}
          name={"q5"}
          defaultValue=""
        />
      </div>
    </>
  );
};

export default Q5;
