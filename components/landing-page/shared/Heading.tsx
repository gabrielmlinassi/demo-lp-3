import { FC } from "react";

type HeadingProps = {
  highlightedTitle: string;
  title: string;
  subtitle: React.ReactNode;
};

const Heading: FC<HeadingProps> = ({ highlightedTitle, title, subtitle }) => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold text-[#5E6284]">
        <span className="font-strawberry text-8xl leading-tight font-medium mr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5A4797] to-[#2364A4]">
          {highlightedTitle}
        </span>
        {title}
      </h1>
      <p className="text-center text-[#5E6284] text-lg">{subtitle}</p>
    </>
  );
};

export default Heading;
