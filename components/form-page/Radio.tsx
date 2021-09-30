import { FC } from "react";
import cn from "classnames";
import { RadioGroup as $RadioGroup } from "@headlessui/react";

export const Radio = ({ value, label }) => {
  return (
    <$RadioGroup.Option value={value} className="focus:outline-none">
      {({ checked }) => (
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-[#2075C6] to-[#51A1FF] p-[2px] rounded-full flex focus-within:ring">
            <div className="bg-white p-[2px] rounded-full flex">
              <div
                className={cn(
                  "w-4 h-4 rounded-full cursor-pointer",
                  "hover:bg-black hover:bg-opacity-10 focus:ring-0 focus:ring-offset-0"
                )}
              >
                {checked && (
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-[#2075C6] to-[#51A1FF]"></div>
                )}
              </div>
            </div>
          </div>
          <$RadioGroup.Description className="text-left">
            <span className="text-[#5E6284]">{label}</span>
          </$RadioGroup.Description>
        </div>
      )}
    </$RadioGroup.Option>
  );
};
