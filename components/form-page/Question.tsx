import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import cn from "classnames";
import { RadioGroup } from "@headlessui/react";
import Progressbar from "./Progressbar";
import FormButton from "./FormButton";
import { IFormValues } from "pages/form";

type QuestionProps = {
  options: string[];
  question: string;
  onSubmit: (data: IFormValues) => void;
  name: keyof IFormValues;
};

const Question: FC<QuestionProps> = ({ question, options, onSubmit, name }) => {
  const { handleSubmit, control } = useForm<IFormValues>();

  return (
    <form className="space-y-6 mb-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Image
          src={question}
          width={550}
          height={150}
          objectFit="contain"
          alt="welcome message"
        />
      </div>
      <div>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange } }) => {
            return <Options options={options} onChange={onChange} />;
          }}
        />
      </div>
      <div className="flex justify-between items-end w-full pt-6">
        <Progressbar />
        <FormButton size="large">Next</FormButton>
      </div>
    </form>
  );
};

type OptionsProps = {
  options: string[];
  onChange: (e: any) => void;
};

const Options: FC<OptionsProps> = ({ options, onChange }) => {
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    setSelected("");
  }, [options]);

  return (
    <RadioGroup
      value={selected}
      onChange={(e) => {
        onChange(e);
        setSelected(e);
      }}
    >
      <RadioGroup.Label className="sr-only">
        Talent Solutions form
      </RadioGroup.Label>
      <div className="space-y-4">
        {options.map((option, key) => (
          <RadioGroup.Option
            key={key}
            value={`opt-${key}`}
            className="focus:outline-none"
          >
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

export default Question;
