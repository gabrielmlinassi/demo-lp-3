import { IFormValues } from "pages/form";
import { FC } from "react";
import MyImage from "@/shared/MyImage";

const Result: FC<{ data: IFormValues }> = ({ data }) => {
  return (
    <div className="space-y-8">
      <MyImage
        className="w-3/4 mx-auto"
        src="/assets/finished-1.svg"
        alt="welcome message"
      />
      <MyImage
        className="w-3/4 mx-auto"
        src="/assets/finished-2.svg"
        alt="welcome message"
      />
    </div>
  );
};

export default Result;
