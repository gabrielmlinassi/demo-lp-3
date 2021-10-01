import Image from "next/image";
import { Controller } from "react-hook-form";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import src from "@/form-assets/q3.png";

const Q3 = ({ control }) => {
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
                  label="30 hours per week or more"
                  value="30 hours per week or more"
                />
                <Radio
                  label="20–30 hours per week"
                  value="20-30-hours-per-week"
                />
                <Radio
                  label="Less than 20 hours per week"
                  value="Less than 20 hours per week"
                />
                <Radio
                  label="I’m not sure yet; let’s talk!"
                  value="I'm not sure yet let's talk"
                />
              </RadioGroup>
            );
          }}
          control={control}
          name={"q3"}
          rules={{
            required: true,
          }}
        />
      </div>
    </>
  );
};

export default Q3;
