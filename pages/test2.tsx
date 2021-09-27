import { FC, HTMLAttributes } from "react";
import cn from "classnames";

const BgColors = {
  green: "bg-green-400",
  red: "bg-red-400",
  yellow: "bg-yellow-400",
};

type Component2Props = {
  bgColor?: keyof typeof BgColors;
};

const Component2: FC<Component2Props> = ({ bgColor = "red" }) => {
  return <div className={BgColors[bgColor]}>test gabriel</div>;
};

const Component: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className={cn(props.className, "bg-red-500")}>test gabriel</div>;
};

export default function Test2() {
  return (
    <>
      <Component2 bgColor="green" />
      <Component2 />
      <Component className="bg-yellow-400" />
    </>
  );
}
