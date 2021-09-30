import Image from "next/image";
import cn from "classnames";
import { FC } from "react";

type MyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const MyImage: FC<MyImageProps> = ({ src, alt, className }) => {
  return (
    <div className={cn(className, "responsive-img-wrap")}>
      <Image layout="fill" src={src} alt={alt} />
    </div>
  );
};

export default MyImage;
