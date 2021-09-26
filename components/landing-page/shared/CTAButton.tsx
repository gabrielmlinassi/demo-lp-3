import { FC } from "react";
import cn from "classnames";

const CTAButton: FC = ({ children }) => {
  return (
    <div className="inline-flex p-1 rounded-full border-4 border-pink-400 border-opacity-0 focus-within:border-opacity-100">
      <button
        className={cn(
          "bg-[#FF0066] text-white font-medium whitespace-nowrap text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full focus:outline-none transition-all duration-300 hover:bg-[#b42d63] hover:shadow-md"
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default CTAButton;
