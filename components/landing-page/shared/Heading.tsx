import { FC } from "react";
import cn from "classnames";

type HeadingProps = {
  highlightedTitle: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  titleColor?: "white" | "purple";
  highlightedTitleColor?: "green" | "purple";
  alignment?: "left" | "center";
};

const HIGHLIGHTED_TITLE_COLORS = {
  green: "bg-gradient-to-r from-[#42BEAD] via-[#3EA57B] to-[#3CA06F]",
  purple: "bg-gradient-to-r from-[#5A4797] to-[#2364A4]",
};

const TITLE_COLORS = {
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
  titleColor = "purple",
  highlightedTitleColor = "purple",
  alignment = "center",
}) => {
  return (
    <div
      className={cn(
        className,
        TITLE_COLORS[titleColor],
        TEXT_ALIGNMENT[alignment],
        "pb-4"
      )}
    >
      <h1>
        <span
          className={cn(
            "inline-block -mt-3 font-strawberry z-10 relative text-7xl sm:text-8xl font-medium mr-2 text-transparent bg-clip-text",
            HIGHLIGHTED_TITLE_COLORS[highlightedTitleColor]
          )}
        >
          {highlightedTitle}
        </span>
        <span className="text-[30px] sm:text-[40px] leading-3 z-0 font-bold">
          {title}
        </span>
      </h1>
      {subtitle && <p className="text-lg">{subtitle}</p>}
    </div>
  );
};

export default Heading;
