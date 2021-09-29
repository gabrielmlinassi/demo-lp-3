import Question from "@/form/Question";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

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

const defaults: IFormValues = {
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

export default function Example() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<IFormValues>(defaults);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setResult((prev) => ({ ...prev, ...data }));
    setStep((prev) => ++prev);
  };

  // const Steps = {
  //   "0": <Welcome onSubmit={onSubmit} />,
  //   "1": <ContactForm onSubmit={onSubmit} />,
  //   "2": <Step1 onSubmit={onSubmit} />,
  //   "3": <Step2 onSubmit={onSubmit} />,
  //   "4": <Result data={result} />,
  // };

  return (
    <div className="max-w-screen-xl flex flex-col p-4 bg-red-200">
      <Question
        question={options[0].question}
        options={options[0].options}
        onSubmit={onSubmit}
      />
    </div>
  );
}

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
