import Image from "next/image";
import cn from "classnames";

import CTAButton from "@/shared/CTAButton";
import Heading from "@/shared/Heading";

const Roles = () => {
  return (
    <section
      id="roles"
      className="max-w-screen-xl mx-auto pb-16 pt-24 sm:px-3 xl:px-0"
    >
      <Heading
        highlightedTitle="Roles"
        title="We Place"
        subtitle={
          <>
            Our learning and development professionals are{" "}
            <span className="font-bold">experienced, vetted, available,</span>{" "}
            and ready to augment your team in these roles:
          </>
        }
      />
      <CardRoles />
      <div className="text-center space-y-6 mt-20 sm:mt-0">
        <p className="text-[#2263A3] font-bold">
          We’re also adept at securing difficult-to-find Subject Matter Experts.
        </p>
        <CTAButton>Find My Perfect Fit Learning Professional</CTAButton>
      </div>
    </section>
  );
};

const CardRoles = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 grid-rows-4 xl:grid-rows-3 place-items-center gap-y-20 xl:gap-y-0 xl:mt-20 sm:max-w-xl sm:mx-auto xl:max-w-full"
      )}
    >
      {ROLES.map((role, key) => (
        <div
          key={key}
          className={cn(
            "inline-flex flex-col w-40 sm:w-44 xl:w-48 h-36 px-8 space-y-4 items-center justify-center rounded-2xl bg-[#F1F2F4]",

            key === 0 &&
              cn(
                "row-start-1 row-span-2 col-start-1",
                "sm:row-start-1 sm:row-span-2 sm:col-start-1",
                "xl:row-start-1 xl:row-span-2 xl:col-start-1"
              ),
            key === 1 &&
              cn(
                "row-start-2 col-start-2",
                "sm:row-start-2 sm:row-span-2 sm:col-start-1",
                "xl:row-start-2 xl:col-start-2"
              ),
            key === 2 &&
              cn(
                "row-start-2 row-span-2 col-start-1",
                "sm:row-start-2 sm:row-span-1 sm:col-start-2",
                "xl:row-start-1 xl:row-span-2 xl:col-start-3"
              ),
            key === 3 &&
              cn(
                "row-start-3 col-start-2",
                "sm:row-start-3 sm:col-start-2",
                "xl:row-start-2 xl:col-start-4"
              ),
            key === 4 &&
              cn(
                "row-start-3 col-start-1 row-span-2",
                "sm:row-start-2 sm:row-span-2 sm:col-start-3",
                "xl:row-start-1 xl:col-start-5 xl:row-span-2"
              ),
            key === 5 &&
              cn(
                "row-start-4 col-start-2",
                "sm:row-start-3 sm:row-span-2 sm:col-start-3",
                "xl:row-start-2 xl:col-start-6"
              )
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
  );
};

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

export default Roles;
