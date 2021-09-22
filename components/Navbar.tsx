import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import cn from "classnames";

const navigation = [
  { name: "Build Your Team", href: "#", current: true },
  { name: "Roles We Place", href: "#", current: false },
  { name: "How We Work With You", href: "#", current: false },
  { name: "Why Work With Us?", href: "#", current: false },
  { name: "Meet Rodrigo", href: "#", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <div className="shadow-md">
          <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#ff99c2]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-[#FF0066]"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-[#FF0066]"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center space-x-3 divide-x-2 divide-[#768390]">
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
                  <div className="hidden sm:block pl-3 mt-1">
                    <span className="text-[#009BDE] text-sm font-medium">
                      TALENT SOLUTIONS
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.current
                            ? "text-[#2263A3] hover:bg-gray-700 hover:text-white"
                            : "text-[#2263A3] hover:bg-gray-700 hover:text-white",
                          "underline px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="absolute left-4 right-0 top-16 bottom-4 z-20 pt-2 pb-3 space-y-1 divide-y divide-white bg-[#F1F2F4]">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    item.current
                      ? "text-[#2263A3] hover:bg-gray-700 hover:text-white"
                      : "text-[#2263A3] hover:bg-gray-700 hover:text-white",
                    "block px-4 py-4 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
