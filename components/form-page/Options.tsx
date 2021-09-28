import { FC, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import cn from "classnames";

type OptionsProps = {
  options: string[];
};

const Options: FC<OptionsProps> = ({ options }) => {
  const [selected, setSelected] = useState(false);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">
        Talent Solutions form
      </RadioGroup.Label>
      <div className="space-y-4">
        {options.map((option, key) => (
          <RadioGroup.Option
            key={key}
            value={option}
            className="focus:outline-none"
          >
            {({ checked }) => (
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-[#2075C6] to-[#51A1FF] p-[2px] rounded-full flex focus-within:ring">
                  <div className="bg-white p-[2px] rounded-full flex">
                    <input
                      type="radio"
                      checked={checked}
                      className={cn(
                        "w-4 h-4 border-none rounded-full",
                        "checked:bg-gradient-to-r checked:from-[#2075C6] checked:to-[#51A1FF]",
                        "hover:bg-black hover:bg-opacity-10",
                        "focus:ring-0 focus:ring-offset-0"
                      )}
                    />
                  </div>
                </div>
                <RadioGroup.Description className="text-left">
                  <span className="text-[#5E6284]">{option}</span>
                </RadioGroup.Description>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Options;
