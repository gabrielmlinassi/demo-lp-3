import { FC } from "react";
import Image from "next/image";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import TextField from "@/form/TextField";
import src from "@/form-assets/q7.svg";
import { IFormValues, PreloadedImg } from "pages/form";

type ContactFormProps = {
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
  img: PreloadedImg;
};

const ContactForm: FC<ContactFormProps> = ({ register, errors, img }) => {
  return (
    <>
      <Image
        src={img.src}
        placeholder="blur"
        blurDataURL={img.blurDataURL}
        width={550}
        height={150}
        objectFit="contain"
        alt="welcome message"
      />
      <div className="mt-4 text-[#5E6284]">
        Please provide your contact info and I will reach out shortly!
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-y-6 items-center text-left">
          <TextField
            label="Full Name"
            placeholder="type your full name here"
            register={register("name")}
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
            register={register("company")}
            error={errors.company}
          />
          <TextField
            label="Job Title"
            placeholder="type your job title here"
            register={register("jobTitle")}
            error={errors.company}
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
        </div>
      </div>
    </>
  );
};

export default ContactForm;
