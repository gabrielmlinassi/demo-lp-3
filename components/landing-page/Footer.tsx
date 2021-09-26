import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:justify-between px-3 py-10 space-y-6 sm:space-y-0 sm:py-4 bg-[#313131]">
      <div className="flex-shrink-0 flex items-center justify-center space-x-3 divide-x-2 divide-[#768390]">
        <div className="relative h-10 w-36">
          <Image
            className="block"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            src="/logo-light.svg"
            alt="SweetRush"
          />
        </div>
        <div className="pl-3 mt-1">
          <span className="text-[#009BDE] text-sm font-medium">
            TALENT SOLUTIONS
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-2 text-center text-white text-opacity-75">
        <div>© 2021 SweetRush, Inc. All Rights Reserved.</div>
        <div>
          Visit us at{" "}
          <a
            href="https://www.sweetrush.com"
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            www.sweetrush.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
