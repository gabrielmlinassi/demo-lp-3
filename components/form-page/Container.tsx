import { FC } from "react";
import cn from "classnames";
import Logo from "@/landing-page/shared/Logo";

const Container: FC = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden space-y-6 p-4 pb-6 bg-gray-50 bg-form bg-no-repeat bg-right-top bg-contain bg-local">
      <Logo />
      <div className="flex-1 flex flex-col items-center justify-center max-w-screen-md w-full mx-auto text-center">
        <div
          className={cn(
            "w-full min-h-[70%]",
            "px-6 pt-6 pb-8 rounded-lg bg-gray-50",
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
