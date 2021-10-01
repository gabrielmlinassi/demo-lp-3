import { FC, MouseEvent } from "react";
import cn from "classnames";
import { ChevronRightIcon } from "@heroicons/react/outline";

enum Sizes {
  base = "base",
  large = "large",
}

type ButtonProps = {
  size?: keyof typeof Sizes;
  type: "button" | "submit";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ChevronPosition = {
  [Sizes.base]: "right-8 group-hover:right-3",
  [Sizes.large]: "right-8 group-hover:right-10",
};

const FormButton: FC<ButtonProps> = ({
  children,
  onClick,
  size = "base",
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "group relative flex items-center justify-center space-x-2",
        size === Sizes.large ? "px-16 py-3" : "px-8 py-3",
        "text-white font-semibold bg-gradient-to-r from-[#2075C6] to-[#51A1FF] rounded-full",
        "transition-all duration-300 hover:shadow-fly hover:to-[#2875bd]"
      )}
    >
      <span>{children}</span>
      <ChevronRightIcon
        className={cn(
          "w-5 absolute opacity-0 group-hover:opacity-100",
          ChevronPosition[size],
          "transition-all duration-300"
        )}
      />
    </button>
  );
};

export default FormButton;
