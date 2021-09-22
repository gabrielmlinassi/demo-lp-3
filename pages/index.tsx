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
          <div className="grid grid-cols-3 sm:grid-cols-2 max-w-screen-xl mx-auto pt-10 sm:pt-20">
            <div className="col-span-3 sm:col-start-1 sm:col-span-1 px-3">
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
            <div className="col-start-1 row-start-2 row-end-2 z-10 col-span-2 sm:col-span-1 pb-28 sm:pb-56 pl-3">
              <div className="text-lg sm:text-2xl mt-4 sm:mt-12 font-bold italic text-[#3CBFAE]">
                “I have worked with SweetRush and Rodrigo for many years, and I
                trust them and count on them, and they never let me down.”
              </div>
              <div className="max-w-[200px] sm:max-w-full flex flex-col sm:flex-row sm:items-end space-y-2 sm:space-y-0 sm:space-x-4 mt-6 text-white">
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
            <div className="relative col-start-3 sm:col-start-2 sm:row-start-1 sm:row-span-2 -ml-20 sm:ml-0 mt-6 sm:mt-0">
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

const NavMobile = () => {
  return (
    <div className="flex items-center justify-between gap-8 h-12 px-2 py-2 bg-white">
      <div className="w-full h-full">
        <div className="relative h-full">
          <Image
            src="/logo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="logo"
          />
        </div>
      </div>
      <Menu as="div">
        <div className="flex">
          <Menu.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MenuIcon className="w-7 h-7 text-[#FF0066]" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-4 right-0 top-12 bottom-4 origin-top-right bg-[#F1F2F4] ring-0 focus:outline-none">
            <div className="py-1 divide-y divide-white">
              {NAV_ITEMS.map((txt, key) => (
                <Menu.Item key={key}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-[#2263A3]"
                      } group flex items-center w-full px-4 py-4 text-sm underline`}
                    >
                      {txt}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const NavDesktop = () => {
  return (
    <nav className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-4">
      <div className="flex items-center justify-center divide-gray-700 divide-x-2">
        <div className="relative h-12 w-48 mr-4">
          <Image
            src="/logo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="logo"
          />
        </div>
        <div>
          <div className="ml-4 uppercase">talent solutions</div>
        </div>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row md:space-x-6">
          <li>Roles We Place</li>
          <li>How We Work With You</li>
          <li>Why Work With Us?</li>
          <li>Meet Rodrigo</li>
        </ul>
      </div>
    </nav>
  );
};
