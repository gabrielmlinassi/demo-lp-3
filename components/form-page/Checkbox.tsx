import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type CheckboxProps = {
  label: string;
  value: string;
  register: UseFormRegisterReturn;
};

export const Checkbox: FC<CheckboxProps> = ({ label, value, register }) => {
  return (
    <div className="group flex items-start space-x-4 text-left">
      <div className="inline-flex rounded-full p-[2px] bg-gradient-to-r from-[#2075C6] to-[#51A1FF] focus-within:ring">
        <div className="inline-flex p-[2px] rounded-full bg-white">
          <input
            type="checkbox"
            id={label}
            {...register}
            value={value}
            className="w-4 h-4 rounded-full cursor-pointer border-none checked:bg-gradient-to-r checked:from-[#2075C6] checked:to-[#51A1FF] group-hover:bg-[#2075C6] group-hover:bg-opacity-20 focus:ring-0 focus:ring-offset-0"
          />
        </div>
      </div>
      <div className="self-center">
        <label htmlFor={label} className="cursor-pointer">
          {label}
        </label>
      </div>
    </div>
  );
};
