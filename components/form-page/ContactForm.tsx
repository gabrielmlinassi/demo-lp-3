import { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import TextField from "@/form/TextField";
import { useForm } from "react-hook-form";
import FormButton from "./FormButton";
import Progressbar from "./Progressbar";
import { IFormValues } from "pages/form";

type ContactFormProps = { onSubmit: (data: IFormValues) => void };

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Image
        src={"/form/q6.png"}
        width={550}
        height={150}
        objectFit="contain"
        alt="welcome message"
      />
      <div className="text-[#5E6284]">
        Please provide your contact info and I will reach out shortly!
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-y-6 items-center text-left">
          <TextField
            label="Name"
            placeholder="type your name here"
            required
            register={register("name", { required: true })}
            error={errors.name}
          />
          <TextField
            label="Email"
            placeholder="type your email here"
            type="email"
            required
            register={register("email", { required: true })}
            error={errors.email}
          />
          <TextField
            label="Company Name"
            placeholder="type your company's name here"
            required
            register={register("companyName", { required: true })}
            error={errors.companyName}
          />
          <TextField
            multiline
            label="Optional"
            placeholder="Is there anything else you'd like to share with us?"
            register={register("message")}
            error={errors.message}
          />
          <div className="col-start-2 col-span-2 text-sm text-[#768390]">
            We will keep your data safe and private; you won&apos;t get any spam
            from us—we promise.
          </div>
          <ErrorMessage />
        </div>
      </div>
      <div className="flex justify-between items-end w-full pt-6">
        <Progressbar />
        <FormButton size="large">Next</FormButton>
      </div>
    </form>
  );
};

const ErrorMessage = () => {
  return (
    <div
      className={cn(
        "col-span-full flex items-center justify-center space-x-4",
        "bg-red-300 px-4 py-2 rounded-md text-sm text-black text-opacity-60"
      )}
    >
      <ExclamationCircleIcon className="w-5 h-5 text-red-500 bg-white rounded-full" />
      <span>Please, fix the errors before contiuing.</span>
    </div>
  );
};

export default ContactForm;
