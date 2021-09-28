import { FC } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

const CTAButton: FC = ({ children }) => {
  const { push } = useRouter();

  return (
    <div className="inline-flex p-1 rounded-full border-4 border-pink-400 border-opacity-0 focus-within:border-opacity-100">
      <button
        className={cn(
          "px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300",
          "text-sm sm:text-lg text-white font-medium whitespace-nowrap bg-[#FF0066]",
          "focus:outline-none hover:bg-[#b42d63] hover:shadow-md"
        )}
        onClick={() => push("/form")}
      >
        {children}
      </button>
    </div>
  );
};

export default CTAButton;
