import { FC } from "react";

type ProgressbarProps = {
  step: number;
  totalSteps: number;
};

const Progressbar: FC<ProgressbarProps> = ({ step, totalSteps }) => {
  const percentage = (step / totalSteps) * 100;

  const styles = {
    width: `${percentage}%`,
  };

  return (
    <div className="flex flex-col items-start">
      <div className="relative w-52 h-3 mb-1 rounded-full overflow-hidden">
        <div className="absolute bg-gray-300 w-full h-3"></div>
        <div
          style={styles}
          className="absolute bg-[#594697] h-3 transition-all duration-300"
        ></div>
      </div>
      <div className="text-xs">
        page {step} of {totalSteps}
      </div>
    </div>
  );
};

export default Progressbar;
