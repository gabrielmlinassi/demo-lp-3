import { FC } from "react";
import cn from "classnames";

const Sizes = {
  base: "w-44 h-32 p-1",
  large: "w-44 h-32 p-1 2xl:w-56 2xl:h-44 2xl:p-4",
};

type BadgeProps = {
  name: string;
  role: string;
  size?: "base" | "large";
};

const Badge: FC<BadgeProps> = ({ name, role, size = "base" }) => {
  return (
    <div
      className={cn(
        Sizes[size],
        "relative z-10 inline-flex flex-col items-center bg-bubble-texture bg-no-repeat bg-contain "
      )}
    >
      <div className="font-strawberry text-4xl text-white">{name}</div>
      <div className="text-sm w-3/4 text-center text-white leading-tight">
        {role}
      </div>
    </div>
  );
};

export default Badge;
