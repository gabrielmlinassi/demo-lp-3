import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        "flex items-center space-x-4 divide-x-2 divide-[#768390]"
      )}
    >
      <a href="https://www.sweetrush.com/" target="_blank" rel="noreferrer">
        <div className="relative h-10 w-36">
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
      <div className="hidden xl:block pl-3 mt-1">
        <Link href="/" passHref>
          <span className="text-[#009BDE] text-sm font-medium cursor-pointer">
            TALENT SOLUTIONS
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
