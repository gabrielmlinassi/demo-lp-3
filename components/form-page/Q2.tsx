import Image from "next/image";
import { Controller } from "react-hook-form";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import src from "@/form-assets/q2.png";

const Q2 = ({ control }) => {
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
                <Radio label="Less than a month" value="Less than a month" />
                <Radio label="1–3 months" value="1-3 months" />
                <Radio label="3–6 months" value="3-6 months" />
                <Radio label="More than 6 months" value="More than 6 months" />
                <Radio label="I’m not sure yet." value="I am not sure yet" />
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
