import { FC } from "react";

type HeadingProps = {
  highlightedTitle: string;
  title: string;
  subtitle: React.ReactNode;
};

const Heading: FC<HeadingProps> = ({ highlightedTitle, title, subtitle }) => {
  return (
    <>
      <h1 className="text-center">
        <span className="font-strawberry text-8xl leading-[0] font-medium mr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5A4797] to-[#2364A4]">
          {highlightedTitle}
        </span>
        <span className="text-[40px] leading-tight font-bold text-[#5E6284]">
          {title}
        </span>
      </h1>
      <p className="text-center text-[#5E6284] text-lg mt-4">{subtitle}</p>
    </>
  );
};

export default Heading;
