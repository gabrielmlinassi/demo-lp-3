import { FC } from "react";
import cn from "classnames";

type HeadingProps = {
  highlightedTitle: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  color?: "white" | "purple";
  alignment?: "left" | "center";
};

const COLORS = {
  white: "text-white",
  purple: "text-[#5E6284]",
};

const TEXT_ALIGNMENT = {
  left: "text-left",
  center: "text-center",
};

const Heading: FC<HeadingProps> = ({
  highlightedTitle,
  title,
  subtitle,
  className,
  color = "purple",
  alignment = "center",
}) => {
  return (
    <div className={cn(className, COLORS[color], TEXT_ALIGNMENT[alignment])}>
      <h1>
        <span className="font-strawberry text-8xl leading-[0] font-medium mr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5A4797] to-[#2364A4]">
          {highlightedTitle}
        </span>
        <span className="text-[40px] leading-tight font-bold">{title}</span>
      </h1>
      {subtitle && <p className="text-lg mt-4">{subtitle}</p>}
    </div>
  );
};

export default Heading;
