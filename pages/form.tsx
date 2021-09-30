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
import { isEmpty } from "helpers";

export interface IFormValues {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  name: string;
  email: string;
  companyName: string;
  message: string;
}

const defaultValues: IFormValues = {
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  name: "",
  email: "",
  companyName: "",
  message: "",
};

const Form = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<IFormValues>(defaultValues);
  const { handleSubmit, register, control, formState } = useForm<IFormValues>();

  const Steps = {
    "1": <Q1 control={control} />,
    "2": <Q2 control={control} />,
    "3": <Q3 control={control} />,
    "4": <Q4 control={control} />,
    "5": <Q5 control={control} />,
    "6": <Q6 control={control} />,
    "7": <ContactForm register={register} errors={formState.errors} />,
  };

  const started = step > 0;
  const finished = step === Object.keys(Steps).length + 1;

  useEffect(() => {
    if (finished) {
      console.log({ result });
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
        <Result data={result} />
      </Container>
    );
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Steps[step]}
        {!isEmpty(formState.errors) && (
          <Error>{getErrorMessage(formState.errors)}</Error>
        )}
        <div className="flex justify-between items-end w-full pt-6">
          <Progressbar />
          <FormButton type="submit" size="large">
            Next
          </FormButton>
        </div>
      </form>
    </Container>
  );
};

const getErrorMessage = (errors: FieldErrors<IFormValues>) => {
  const { q1, q2, q3, q4, q5, q6, name, email, companyName } = errors;

  if (q1 || q2 || q3 || q4 || q5 || q6) {
    return "Please, choose an option";
  }

  if (name || email || companyName) {
    return "Please, fill out the required fields";
  }

  return "Unkown error message";
};

export default Form;
