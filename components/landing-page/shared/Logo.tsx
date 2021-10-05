import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

interface LogoProps {
  className?: string;
  isBlured?: boolean;
}

const Logo: FC<LogoProps> = ({ className, isBlured = false }) => {
  return (
    <div
      className={cn(
        className,
        "flex items-center space-x-2 sm:space-x-4 divide-x-2 divide-[#768390]"
      )}
    >
      <a href="https://www.sweetrush.com/" target="_blank" rel="noreferrer">
        <div className="relative h-10 w-32 sm:w-36">
          <Image
            className="block"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            src="/logo.png"
            alt="SweetRush"
          />
        </div>
      </a>
      <div className="pl-2 sm:pl-3 mt-1">
        <Link href="/" passHref>
          <span
            className={cn(
              isBlured ? "text-white" : "text-[#009BDE]",
              "sm:text-[#009BDE] text-sm font-medium cursor-pointer"
            )}
          >
            TALENT SOLUTIONS
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
