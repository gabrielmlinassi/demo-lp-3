import FormButton from "@/form/FormButton";
import Question from "@/form/Question";
import Progressbar from "@/form/Progressbar";
import Container from "@/form/Container";
import ContactForm from "@/form/ContactForm";
import Welcome from "@/form/Welcome";
import { FC, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Result from "@/form/Result";

export interface IFormValues {
  q0: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  name: string;
  email: string;
  companyName: string;
  message: string;
}

const defaultValues: IFormValues = {
  q0: "",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  name: "",
  email: "",
  companyName: "",
  message: "",
};

const Form = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<IFormValues>(defaultValues);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setResult((prev) => ({ ...prev, ...data }));
    setStep((prev) => ++prev);
  };

  const getQuestion = (idx: 0 | 1 | 2 | 3 | 4 | 5) => {
    return (
      <Question
        question={options[idx].question}
        options={options[idx].options}
        onSubmit={onSubmit}
        name={`q${idx}`}
      />
    );
  };

  const Steps = {
    "0": <Welcome onSubmit={onSubmit} />,
    "1": getQuestion(0),
    "2": getQuestion(1),
    "3": getQuestion(2),
    "4": getQuestion(3),
    "5": getQuestion(4),
    "6": getQuestion(5),
    "7": <ContactForm onSubmit={onSubmit} />,
    "8": <Result data={result} />,
  };

  useEffect(() => {
    console.log({ result });
  }, [result]);

  return (
    <Container>
      {/* <Welcome /> */}
      {/* <Question question={options[0].question} options={options[0].options} /> */}
      {/* {options.map((option, key) => (
        <Question
          key={key}
          question={option.question}
          options={option.options}
        />
      ))} */}
      {Steps[step]}
      {/* <div className="flex justify-between items-end w-full pt-6">
        <Progressbar />
        <FormButton size="large">Next</FormButton>
      </div> */}
    </Container>
  );
};

const options = [
  {
    question: "/form/q1.png",
    options: [
      "I need an extra pair of hands to complete a project.",
      "I need a specialized skill that I haven’t been able to find.",
      "I need someone to fill in for a teammate on leave.",
      "I’m looking for someone who could potentially become a FT employee (contract to hire).",
      "I have a different need that I can share with you.",
    ],
  },
  {
    question: "/form/q2.png",
    options: [
      "Less than a month",
      "1–3 months",
      "3–6 months",
      "More than 6 months",
      "I’m not sure yet.",
    ],
  },
  {
    question: "/form/q3.png",
    options: [
      "30 hours per week or more",
      "20–30 hours per week",
      "Less than 20 hours per week",
      "I’m not sure yet; let’s talk!",
    ],
  },
  {
    question: "/form/q4.png",
    options: [
      "Yes, I have a written job description.",
      "I’ve got a specific list of tasks on paper.",
      "I have an idea of what I need and can share when we talk.",
    ],
  },
  {
    question: "/form/q5.png",
    options: [
      "One will be fine.",
      "More than one is needed. ",
      "I need a team with varied skill sets (instructional designer, project manager, graphic designer, etc.).",
      "I’m not sure yet; let’s talk!",
    ],
  },
  {
    question: "/form/q6.png",
    options: [
      "Right away—I am ready and eager to engage the right talent!",
      "In a few weeks",
      "I’m not sure yet; let’s talk!",
    ],
  },
];

export default Form;
