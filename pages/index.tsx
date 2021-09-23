import Image from "next/image";
import cn from "classnames";

import Navbar from "components/Navbar";
import Hero from "components/Hero";

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

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        {/* another section */}
        <section className="max-w-screen-xl mx-auto w-full min-h-screen bg-yellow-200">
          <h1>Roles We Place</h1>
          <p>
            Our learning and development professionals are experienced, vetted,
            available, and ready to augment your team in these roles:
          </p>
          <div className="grid gap-y-12 grid-cols-2 grid-rows-4 xl:grid-rows-3 xl:grid-cols-6 place-items-center mt-12">
            {ROLES.map((role, key) => (
              <div
                key={key}
                className={cn(
                  "inline-flex flex-col w-40 xl:w-48 h-40 px-8 space-y-2 items-center justify-center rounded-2xl bg-gray-400",
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
                <div className="-mt-12">
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
                  <p className="text-center">{role.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
