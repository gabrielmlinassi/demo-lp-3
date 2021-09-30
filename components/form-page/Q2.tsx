import Image from "next/image";
import { Controller } from "react-hook-form";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";

const Q2 = ({ control }) => {
  return (
    <>
      <div>
        <Image
          src={"/form/q2.png"}
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
                <Radio value="Less than a month" label="Less than a month" />
                <Radio value="1–3 months" label="1–3 months" />
                <Radio value="3–6 months" label="3–6 months" />
                <Radio value="More than 6 months" label="More than 6 months" />
                <Radio value="I’m not sure yet." label="I’m not sure yet." />
              </RadioGroup>
            );
          }}
          control={control}
          name={"q2"}
          rules={{
            required: true,
          }}
        />
      </div>
    </>
  );
};

export default Q2;
