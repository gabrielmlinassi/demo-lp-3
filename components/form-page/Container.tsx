import { FC } from "react";
import cn from "classnames";
import Logo from "@/landing-page/shared/Logo";

const Container: FC = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden space-y-6 p-0 pb-6 bg-gray-50 bg-form bg-no-repeat bg-right-top bg-contain bg-local">
      <div
        className={cn(
          "px-4 py-2",
          "bg-clip-padding backdrop-filter sm:backdrop-filter-none backdrop-blur-xl sm:backdrop-blur-none",
          "bg-opacity-60 sm:bg-opacity-100 border-b sm:border-b-0 border-gray-200 shadow-md sm:shadow-none"
        )}
      >
        <Logo isBlured />
      </div>
      <div className="flex-1 flex flex-col items-center justify-start sm:justify-center max-w-screen-md w-full mx-auto px-2 sm:p-4 text-center">
        <div
          className={cn(
            "w-full min-h-[70%]",
            "px-3 sm:px-6 pt-6 pb-8 rounded-lg bg-gray-50",
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
