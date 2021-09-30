import $Image from "next/image";

const MyImage = ({ src, alt }) => {
  return (
    <div className="responsive-img-wrap">
      <$Image layout="fill" src={src} alt={alt} />
    </div>
  );
};

export default function Test3() {
  return (
    <div>
      <div className="relative max-w-screen-sm">
        <MyImage src="/assets/finished-1.svg" alt="" />
      </div>
    </div>
  );
}
