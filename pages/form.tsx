import { useEffect, useState } from "react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
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

const Form = () => {
  const [step, setStep] = useState(0);
  const [isSending, setSending] = useState(false);
  const [result, setResult] = useState<IFormValues>(defaultValues);
  const { handleSubmit, register, control, formState } = useForm<IFormValues>();

  const Steps = {
    "1": <Q1 register={register} />,
    "2": <Q2 control={control} />,
    "3": <Q3 control={control} />,
    "4": <Q4 control={control} />,
    "5": <Q5 control={control} />,
    "6": <Q6 control={control} />,
    "7": <ContactForm register={register} errors={formState.errors} />,
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
        <Welcome onStarted={() => setStep((prev) => ++prev)} />
      </Container>
    );
  }

  if (finished) {
    return (
      <Container>
        <Result />
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

export default Form;
