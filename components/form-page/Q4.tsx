import Image from "next/image";
import { Controller } from "react-hook-form";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";

const Q4 = ({ control }) => {
  return (
    <>
      <div>
        <Image
          src={"/form/q4.png"}
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
                  value="Yes, I have a written job description."
                  label="Yes, I have a written job description."
                />
                <Radio
                  value="I’ve got a specific list of tasks on paper."
                  label="I’ve got a specific list of tasks on paper."
                />
                <Radio
                  value="I have an idea of what I need and can share when we talk."
                  label="I have an idea of what I need and can share when we talk."
                />
              </RadioGroup>
            );
          }}
          control={control}
          name={"q4"}
          rules={{
            required: true,
          }}
        />
      </div>
    </>
  );
};

export default Q4;
