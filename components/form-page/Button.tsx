import { FC } from "react";
import cn from "classnames";
import { ChevronRightIcon } from "@heroicons/react/outline";

enum Sizes {
  base = "base",
  large = "large",
}

type ButtonProps = {
  size?: keyof typeof Sizes;
};

const Button: FC<ButtonProps> = ({ children, size = "base" }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center space-x-2",
        size === Sizes.large ? "px-16 py-3" : "px-6 py-3",
        "text-white font-semibold bg-gradient-to-r from-[#2075C6] to-[#51A1FF] rounded-full"
      )}
    >
      <span>{children}</span>
      <ChevronRightIcon className="w-5" />
    </button>
  );
};

export default Button;
