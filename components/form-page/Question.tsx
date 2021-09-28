import Image from "next/image";
import Options from "components/form-page/Options";
import { FC } from "react";

type QuestionProps = {
  options: string[];
};

const Question: FC<QuestionProps> = ({ options }) => {
  return (
    <>
      <div>
        <Image
          src="/form/q1.png"
          width={550}
          height={150}
          objectFit="contain"
          alt="welcome message"
        />
      </div>
      <div>
        <Options options={options} />
      </div>
    </>
  );
};

export default Question;
