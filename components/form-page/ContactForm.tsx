import Image from "next/image";
import TextField from "@/form/TextField";

const ContactForm = ({ register, errors }) => {
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default ContactForm;
