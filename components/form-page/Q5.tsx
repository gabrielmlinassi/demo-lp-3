import Image from "next/image";
import { Controller } from "react-hook-form";
import { IFormValues } from "pages/form";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";

const Q5 = ({ control }) => {
  return (
    <>
      <div>
        <Image
          src={"/form/q5.png"}
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
                <Radio value="One will be fine." label="One will be fine." />
                <Radio
                  value="More than one is needed."
                  label="More than one is needed."
                />
                <Radio
                  value="I need a team with varied skill sets (instructional designer, project manager, graphic designer, etc.)."
                  label="I need a team with varied skill sets (instructional designer, project manager, graphic designer, etc.)."
                />
                <Radio
                  value="I’m not sure yet; let’s talk!"
                  label="I’m not sure yet; let’s talk!"
                />
              </RadioGroup>
            );
          }}
          control={control}
          name={"q5"}
          rules={{
            required: true,
          }}
        />
      </div>
    </>
  );
};

export default Q5;
