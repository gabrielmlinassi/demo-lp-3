import { FC } from "react";
import cn from "classnames";
import Logo from "@/landing-page/shared/Logo";

const Container: FC = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen p-4 bg-gray-50 bg-form bg-no-repeat bg-right-top bg-contain">
      <Logo />
      <div className="flex-1 flex flex-col items-center justify-center max-w-screen-md w-full mx-auto text-center">
        <div
          className={cn(
            "px-6 pt-6 pb-8 rounded-lg bg-gray-50 w-full",
            "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 shadow-md"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
