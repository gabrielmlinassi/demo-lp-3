import { FC, useEffect, useState } from "react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { getPlaiceholder } from "plaiceholder";

import FormButton from "@/form/FormButton";
import Progressbar from "@/form/Progressbar";
import Container from "@/form/Container";
import ContactForm from "@/form/ContactForm";
import Error from "@/form/Error";
import Result from "@/form/Result";
import Welcome from "@/form/Welcome";
import Q1 from "@/form/Q1";
import Q2 from "@/form/Q2";
import Q3 from "@/form/Q3";
import Q4 from "@/form/Q4";
import Q5 from "@/form/Q5";
import Q6 from "@/form/Q6";
import { getFieldValues, isEmpty } from "helpers";
import { LoadingIcon } from "components/icons";
import { InferGetStaticPropsType } from "next";

export interface IFormValues {
  q1: string[];
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  message: string;
}

const defaultValues: IFormValues = {
  q1: [],
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  name: "",
  email: "",
  company: "",
  jobTitle: "",
  message: "",
};

const Form: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  preloadedImgs,
}) => {
  const [step, setStep] = useState(0);
  const [isSending, setSending] = useState(false);
  const [result, setResult] = useState<IFormValues>(defaultValues);
  const { handleSubmit, register, control, formState } = useForm<IFormValues>();

  const Steps = {
    "1": <Q1 img={preloadedImgs.q1} register={register} />,
    "2": <Q2 img={preloadedImgs.q2} control={control} />,
    "3": <Q3 img={preloadedImgs.q3} control={control} />,
    "4": <Q4 img={preloadedImgs.q4} control={control} />,
    "5": <Q5 img={preloadedImgs.q5} control={control} />,
    "6": <Q6 img={preloadedImgs.q6} control={control} />,
    "7": (
      <ContactForm
        img={preloadedImgs.q7}
        register={register}
        errors={formState.errors}
      />
    ),
  };

  const totalSteps = Object.keys(Steps).length + 1;
  const started = step > 0;
  const finished = step === totalSteps;
  const isLastStep = step === totalSteps - 1;

  useEffect(() => {
    if (finished) {
      setSending(true);
      const data = getFieldValues(result);

      fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log({ data }))
        .catch((err) => console.log({ err }))
        .finally(() => setSending(false));
    }
  }, [finished, result]);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setResult((prev) => ({ ...prev, ...data }));
    setStep((prev) => ++prev);
  };

  if (!started) {
    return (
      <Container>
        <Welcome
          img={preloadedImgs.welcome}
          onStarted={() => setStep((prev) => ++prev)}
        />
      </Container>
    );
  }

  if (finished) {
    return (
      <Container>
        <Result img={preloadedImgs.result} />
      </Container>
    );
  }

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full"
      >
        {Steps[step]}
        <div className="mt-6">
          <Error show={!isEmpty(formState.errors)}>
            {getErrorMessage(formState.errors)}
          </Error>
        </div>
        <div className="flex justify-between items-end w-full pt-6">
          <Progressbar step={step} totalSteps={totalSteps} />
          <FormButton type="submit" disabled={isSending} size="large">
            {isLastStep ? (
              isSending ? (
                <div className="flex space-x-4">
                  <span>Sending</span>
                  <LoadingIcon />
                </div>
              ) : (
                "Submit"
              )
            ) : (
              "Next"
            )}
          </FormButton>
        </div>
      </form>
    </Container>
  );
};

const getErrorMessage = (errors: FieldErrors<IFormValues>) => {
  const { q1, q2, q3, q4, q5, q6, name, email, company } = errors;

  if (q1 || q2 || q3 || q4 || q5 || q6) {
    return "Please, choose an option";
  }

  if (name || email || company) {
    return "Please, fill out the required fields";
  }

  return "Unkown error message";
};

export type PreloadedImg = {
  src: StaticImageData;
  blurDataURL: string;
};

export async function getStaticProps() {
  const srcs = [
    "/assets/form/welcome.png",
    "/assets/form/q1.svg",
    "/assets/form/q2.svg",
    "/assets/form/q3.svg",
    "/assets/form/q4.svg",
    "/assets/form/q5.svg",
    "/assets/form/q6.svg",
    "/assets/form/q7.svg",
    "/assets/form/finished-1.svg",
    "/assets/form/finished-2.svg",
  ];

  const promises = srcs.map((src) => getPlaiceholder(src));
  const response = await Promise.all(promises);
  const preloadedImg: PreloadedImg[] = response.map((res) => ({
    src: res.img,
    blurDataURL: res.base64,
  }));

  const preloadedImgs = {
    welcome: preloadedImg[0],
    q1: preloadedImg[1],
    q2: preloadedImg[2],
    q3: preloadedImg[3],
    q4: preloadedImg[4],
    q5: preloadedImg[5],
    q6: preloadedImg[6],
    q7: preloadedImg[7],
    result: {
      msg1: preloadedImg[8],
      msg2: preloadedImg[9],
    },
  };

  return {
    props: { preloadedImgs },
  };
}

export default Form;
