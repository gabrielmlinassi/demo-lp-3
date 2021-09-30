import { FC } from "react";
import cn from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const Error: FC<{ show: boolean }> = ({ children, show }) => {
  return (
    <div
      className={cn(
        "col-span-full flex items-center justify-center space-x-4",
        "bg-red-400 px-4 py-2 rounded-md text-sm text-white transition-opacity duration-300",
        show ? "opacity-100" : "opacity-0"
      )}
    >
      <ExclamationCircleIcon className="w-5 h-5 text-red-500 bg-white rounded-full" />
      <span>{children}</span>
    </div>
  );
};

export default Error;
