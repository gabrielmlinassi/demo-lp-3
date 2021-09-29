import { IFormValues } from "pages/form";
import { FC } from "react";

const Result: FC<{ data: IFormValues }> = ({ data }) => {
  return (
    <div>
      <div>Result:</div>
      <div>{JSON.stringify(data)} </div>
    </div>
  );
};

export default Result;
