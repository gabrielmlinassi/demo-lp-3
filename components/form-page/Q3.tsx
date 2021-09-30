import Image from "next/image";
import { Controller } from "react-hook-form";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";

const Q3 = ({ control }) => {
  return (
    <>
      <div>
        <Image
          src={"/form/q3.png"}
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
                  value="30 hours per week or more"
                  label="30 hours per week or more"
                />
                <Radio
                  value="20–30 hours per week"
                  label="20–30 hours per week"
                />
                <Radio
                  value="Less than 20 hours per week"
                  label="Less than 20 hours per week"
                />
                <Radio
                  value="I’m not sure yet; let’s talk!"
                  label="I’m not sure yet; let’s talk!"
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
