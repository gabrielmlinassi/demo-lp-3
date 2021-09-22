import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import Navbar from "components/Navbar";

const NAV_ITEMS = [
  "Roles We Place",
  "How We Work With You",
  "Why Work With Us?",
  "Meet Rodrigo",
];

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* hero */}
        <section className="bg-gradient-to-r from-[#5A4797] to-[#2364A4]">
          <div className="grid grid-cols-3 lg:grid-cols-2 max-w-screen-xl mx-auto pt-10 lg:pt-20">
            <div className="col-span-3 lg:col-span-1 px-3">
              <h1 className="text-7xl sm:text-9xl leading-none text-white font-strawberry capitalize">
                Build your team.
              </h1>
              <h2 className="text-3xl sm:text-5xl leading-tight font-medium text-white">
                Meet your deadlines. Create training that gets results.
              </h2>
              <p className="text-base sm:text-lg text-white mt-6">
                You need good people to get the job done. Every day we produce
                training solutions, so we know how you feel! Allow us to help
                you find exceptional talent to augment your team. We love this
                work and we’re ready to help.
              </p>
            </div>
            <div className="col-start-1 col-span-2 row-start-2 row-end-2 z-10 lg:col-span-1 pb-28 lg:pb-56 pl-3">
              <div className="text-lg sm:text-2xl mt-4 sm:mt-12 font-bold italic text-[#3CBFAE]">
                “I have worked with SweetRush and Rodrigo for many years, and I
                trust them and count on them, and they never let me down.”
              </div>
              <div className="max-w-[200px] sm:max-w-full flex flex-col lg:flex-row lg:items-end space-y-2 lg:space-y-0 lg:space-x-4 mt-6 text-white">
                <p>
                  <b>—Douglas E. Miller, </b>
                  Director, Learning and Awareness
                </p>
                <div>
                  <Image
                    src="/kaiser-logo.png"
                    width={125}
                    height={15}
                    objectFit="contain"
                    objectPosition="bottom"
                    alt="Kaiser Permanente logo"
                  />
                </div>
              </div>
            </div>
            <div className="relative col-start-3 lg:col-start-2 lg:row-start-1 lg:row-span-2 -ml-20 sm:ml-0 mt-6 sm:mt-0">
              <Image
                src="/hero-large.png"
                layout="fill"
                objectFit="cover"
                alt="woman"
                className="object-left-top sm:object-top"
              />
            </div>
          </div>
        </section>
        {/* another section */}
        <section className="w-full h-screen bg-yellow-200"></section>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
