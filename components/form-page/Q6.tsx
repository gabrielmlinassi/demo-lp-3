import Image from "next/image";
import { Controller } from "react-hook-form";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";

const Q6 = ({ control }) => {
  return (
    <>
      <div>
        <Image
          src={"/form/q6.png"}
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
                  value="Right away—I am ready and eager to engage the right talent!"
                  label="Right away—I am ready and eager to engage the right talent!"
                />
                <Radio value="In a few weeks" label="In a few weeks" />
                <Radio
                  value="I’m not sure yet; let’s talk!"
                  label="I’m not sure yet; let’s talk!"
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
