import { isEmpty } from "helpers";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  q1: "",
  q2: "",
};

export default function Example() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(defaultValues);
  const { handleSubmit, control, formState } = useForm();

  const Steps = {
    "1": <Q1 control={control} />,
    "2": <Q2 control={control} />,
    "3": <Result data={result} />,
  };

  const onSubmit = (data) => {
    setResult((prev) => ({ ...prev, ...data }));
    setStep((prev) => ++prev);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-screen-sm mx-auto w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-8 rounded-md bg-yellow-300">{Steps[step]}</div>
          <div className="flex items-center mt-4">
            {!isEmpty(formState.errors) && (
              <div className="text-red-400">Please, select an option</div>
            )}
            <input
              type="submit"
              value="Next"
              className="ml-auto px-4 py-2 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

const Q1 = ({ control }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div>What is your gender?</div>
      <Controller
        render={({ field: { onChange, name } }) => (
          <>
            <RadioButton
              onChange={onChange}
              value="male"
              label="male"
              name={name}
            />
            <RadioButton
              onChange={onChange}
              value="female"
              label="female"
              name={name}
            />
            <RadioButton
              onChange={onChange}
              value="gay"
              label="gay"
              name={name}
            />
            <RadioButton
              onChange={onChange}
              value="other"
              label="other"
              name={name}
            />
          </>
        )}
        name="q1"
        control={control}
        rules={{
          required: true,
        }}
      />
    </div>
  );
};

const Q2 = ({ control }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div>What is your age?</div>
      <Controller
        render={({ field: { onChange, name } }) => (
          <>
            <RadioButton
              onChange={onChange}
              value="24"
              label="24"
              name={name}
            />
            <RadioButton
              onChange={onChange}
              value="25"
              label="25"
              name={name}
            />
            <RadioButton
              onChange={onChange}
              value="26"
              label="26"
              name={name}
            />
          </>
        )}
        name="q2"
        control={control}
        rules={{
          required: true,
        }}
      />
    </div>
  );
};

const RadioButton = ({ label, onChange, value, name }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        value={value}
        onChange={onChange}
        id={label}
        name={name}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

const Result = ({ data }) => {
  return <div>{JSON.stringify(data, null, 2)}</div>;
};
