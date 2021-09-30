import Image from "next/image";
import { Controller } from "react-hook-form";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";

const Q1 = ({ control }) => {
  return (
    <>
      <div>
        <Image
          src={"/form/q1.png"}
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
              <div className="space-y-8">
                <RadioGroup value={value} onChange={onChange}>
                  <Radio
                    value="I need an extra pair of hands to complete a project."
                    label="I need an extra pair of hands to complete a project."
                  />
                  <Radio
                    value="I need a specialized skill that I haven’t been able to find."
                    label="I need a specialized skill that I haven’t been able to find."
                  />
                  <Radio
                    value="I need someone to fill in for a teammate on leave."
                    label="I need someone to fill in for a teammate on leave."
                  />
                  <Radio
                    value="I’m looking for someone who could potentially become a FT employee (contract to hire)."
                    label="I’m looking for someone who could potentially become a FT employee (contract to hire)."
                  />
                  <Radio
                    value="I have a different need that I can share with you."
                    label="I have a different need that I can share with you."
                  />
                </RadioGroup>
              </div>
            );
          }}
          control={control}
          name={"q1"}
          rules={{
            required: true,
          }}
        />
      </div>
    </>
  );
};

export default Q1;
