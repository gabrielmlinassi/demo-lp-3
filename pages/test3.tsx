import { FC, useEffect } from "react";
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form";

interface IField {
  cb: [];
}

export default function Test3() {
  const { handleSubmit, register, formState } = useForm<IField>();

  useEffect(() => {
    console.log(formState.errors);
  }, [formState]);

  const onSubmit: SubmitHandler<IField> = (data) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Checkbox
        register={register("cb", { required: true })}
        label="I need an extra pair of hands to complete a project."
        value="I need an extra pair of hands to complete a project."
      />
      <Checkbox
        register={register("cb", { required: true })}
        label="I need a specialized skill that I haven’t been able to find."
        value="I need a specialized skill that I haven’t been able to find."
      />
      <Checkbox
        register={register("cb", { required: true })}
        label="I need someone to fill in for a teammate on leave."
        value="I need someone to fill in for a teammate on leave."
      />

      <Checkbox
        register={register("cb", { required: true })}
        label="I’m looking for someone who could potentially become a FT employee
        (contract to hire)."
        value="I’m looking for someone who could potentially become a FT employee
        (contract to hire)."
      />
      <Checkbox
        register={register("cb", { required: true })}
        label="I have a different need that I can share with you."
        value="I have a different need that I can share with you."
      />
      <input type="submit" />
    </form>
  );
}

const Checkbox: FC<{
  label: string;
  value: string;
  register: UseFormRegisterReturn;
}> = ({ label, value, register }) => {
  return (
    <div>
      <input type="checkbox" id={label} {...register} value={value} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
