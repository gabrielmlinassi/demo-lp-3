import Image from "next/image";
import { Controller } from "react-hook-form";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import src from "@/form-assets/q1.png";

const Q1 = ({ control }) => {
  return (
    <>
      <div className="animate-slide">
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
              <div className="space-y-8 overflow-hidden">
                <RadioGroup value={value} onChange={onChange}>
                  <Radio
                    label="I need an extra pair of hands to complete a project."
                    value="Need an extra pair of hands to complete a project."
                  />
                  <Radio
                    label="I need a specialized skill that I haven’t been able to find."
                    value="Need a specialized skill that haven’t been able to find."
                  />
                  <Radio
                    label="I need someone to fill in for a teammate on leave."
                    value="Need someone to fill in for a teammate on leave."
                  />
                  <Radio
                    label="I’m looking for someone who could potentially become a FT employee (contract to hire)."
                    value="Looking for someone who could potentially become a FT employee (contract to hire)."
                  />
                  <Radio
                    label="I have a different need that I can share with you."
                    value="I have a different need that I can share with you."
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
