import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import cn from "classnames";
import confetti from "canvas-confetti";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import src1 from "@/form-assets/finished-1.svg";
import src2 from "@/form-assets/finished-2.svg";

const Result = () => {
  const { push } = useRouter();
  const [hasLoaded, setLoaded] = useState({ src1: false, src2: false });

  useEffect(() => {
    if (!hasLoaded.src1 && !hasLoaded.src2) return;

    setTimeout(() => {
      let count = 0;
      const intervalId = setInterval(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          angle: 60,
          origin: {
            x: 0,
            y: 1,
          },
        });
        confetti({
          particleCount: 100,
          spread: 70,
          angle: 120,
          origin: {
            x: 1,
            y: 1,
          },
        });

        if (++count === 3) {
          clearInterval(intervalId);
        }
      }, 200);
    }, 200);
  }, [hasLoaded]);

  return (
    <div className="space-y-8 py-12">
      <div className="w-3/4 mx-auto pb-8">
        <div className="text-4xl font-medium text-left text-[#2263A3]">
          Thank You!
        </div>
      </div>
      <Image
        src={src1}
        width={550}
        height={150}
        objectFit="contain"
        alt=""
        onLoad={() => setLoaded((prev) => ({ ...prev, src: true }))}
      />
      <Image
        src={src2}
        width={550}
        height={150}
        objectFit="contain"
        alt=""
        onLoad={() => setLoaded((prev) => ({ ...prev, src2: true }))}
      />
      <div className="flex items-center justify-center pt-4 w-full">
        <BackButton onClick={() => push("/")}>Go back to home page</BackButton>
      </div>
    </div>
  );
};

const BackButton: FC<{ onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center py-3 px-6 rounded-full space-x-2 mt-4 cursor-pointer",
        "bg-gray-200 text-gray-800 hover:bg-[#e7e8e9]",
        "transition-all duration-300 hover:shadow-xl",
        "focus:outline-none focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 focus:ring-offset-2"
      )}
    >
      <ArrowLeftIcon className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
};

export default Result;
