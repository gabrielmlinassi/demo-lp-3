import Image from "next/image";
import { Controller } from "react-hook-form";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import src from "@/form-assets/q6.svg";

const Q6 = ({ control }) => {
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
                <Radio
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
