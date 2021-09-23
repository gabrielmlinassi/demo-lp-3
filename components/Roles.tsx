import Image from "next/image";
import cn from "classnames";
import CTAButton from "./CTAButton";

const ROLES = [
  {
    src: "/assets/administrator.png",
    title: "LMS Administrators",
    alt: "administrator",
  },
  {
    src: "/assets/facilitator.png",
    title: "Training Facilitators",
    alt: "facilitator",
  },
  {
    src: "/assets/graphic-designer.png",
    title: "Graphic Designers",
    alt: "graphic designer",
  },
  {
    src: "/assets/instructional-designer.png",
    title: "Instructional Designers",
    alt: "instructional designer",
  },
  {
    src: "/assets/manager.png",
    title: "Project Managers",
    alt: "manager",
  },
  {
    src: "/assets/psychometrician.png",
    title: "Psychometricians",
    alt: "psychometrician",
  },
];

const Roles = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-16">
      <h1 className="text-4xl text-center font-bold text-[#5E6284]">
        <span className="font-strawberry text-8xl leading-tight font-medium mr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5A4797] to-[#2364A4]">
          Roles
        </span>
        We Place
      </h1>
      <p className="text-center text-[#5E6284] text-lg">
        Our learning and development professionals are{" "}
        <span className="font-bold">experienced, vetted, available,</span> and
        ready to augment your team in these roles:
      </p>
      <div className="grid gap-y-12 xl:gap-y-0 grid-cols-2 grid-rows-4 xl:grid-rows-3 xl:grid-cols-6 place-items-center mt-20">
        {ROLES.map((role, key) => (
          <div
            key={key}
            className={cn(
              "inline-flex flex-col w-40 xl:w-48 h-36 px-8 space-y-4 items-center justify-center rounded-2xl bg-[#F1F2F4]",
              key === 0 && "row-start-1 row-span-2 col-start-1",
              key === 1 && "row-start-2 col-start-2",
              key === 2 &&
                "row-start-2 row-span-2 col-start-1 xl:row-start-1 xl:col-start-3",
              key === 3 &&
                `row-start-3 col-start-2 xl:row-start-2 xl:col-start-4`,
              key === 4 &&
                "row-start-3 row-span-2 col-start-1 xl:row-start-1 xl:col-start-5",
              key === 5 &&
                "row-start-4 col-start-2 xl:row-start-2 xl:col-start-6"
            )}
          >
            <div
              className={cn(
                "-mt-20 p-2 rounded-full flex shadow-lg",
                key === 0 &&
                  "bg-gradient-to-r from-[#5A4797] via-[#8F4087] to-[#ED1B68]",
                key === 1 &&
                  "bg-gradient-to-r from-[#C9203B] via-[#DD1E57] to-[#ED1B68]",
                key === 2 &&
                  "bg-gradient-to-r from-[#C9203B] via-[#E76632] to-[#F4772D]",
                key === 3 &&
                  "bg-gradient-to-r from-[#FFCD34] via-[#F99C31] to-[#F4772D]",
                key === 4 &&
                  "bg-gradient-to-r from-[#ABD03B] via-[#65AC62] to-[#3CA06F]",
                key === 5 &&
                  "bg-gradient-to-r from-[#42BEAD] via-[#3195AC] to-[#2364A4]"
              )}
            >
              <Image
                src={role.src}
                width={109}
                height={109}
                objectFit="cover"
                alt={role.alt}
                className="rounded-full"
              />
            </div>
            <div className="h-16">
              <p
                className={cn(
                  "text-center font-bold leading-tight",
                  key === 0 && "text-[#594697]",
                  key === 1 && "text-[#FF0066]",
                  key === 2 && "text-[#CA193A]",
                  key === 3 && "text-[#F5762D]",
                  key === 4 && "text-[#3DA06E]",
                  key === 5 && "text-[#2263A3]"
                )}
              >
                {role.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center space-y-6">
        <p className="text-[#2263A3] font-bold">
          We’re also adept at securing difficult-to-find Subject Matter Experts.
        </p>
        <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
      </div>
    </section>
  );
};

export default Roles;
