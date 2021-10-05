import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import cn from "classnames";
import Logo from "@/landing-page/shared/Logo";

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="h-16">
      {({ open }) => (
        <div className="lg:fixed lg:top-0 z-20 lg:w-full bg-white shadow-md">
          <div className="max-w-screen-xl mx-auto px-3 xl:px-5 2xl:px-0">
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
                <Logo className="flex-shrink-0" />
                <div className="hidden lg:block mt-1">
                  <div className="flex 2xl:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.current
                            ? "hover:text-[#0d263f]"
                            : "hover:text-[#0d263f]",
                          "text-[#2263A3] underline px-3 py-2 rounded-md text-sm font-medium"
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
};

const navigation = [
  { name: "Build Your Team", href: "#", current: true },
  { name: "Roles We Place", href: "#roles", current: false },
  { name: "How We Work With You", href: "#how-we-work", current: false },
  { name: "Why Work With Us?", href: "#why-work-with-us", current: false },
  { name: "Meet Rodrigo", href: "#meet-rodrigo", current: false },
];

export default Navbar;
