import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    { name: "Home", link: "./" },
    { name: "Members", link: "/features" },
    { name: "Tokens", link: "/pricing" },
    { name: "Company", link: "/company" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className="w-full" style={{height: 100}}>
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-green-400  ">
                    <span>
                      <Image
                        src="/img/Saly-44.png"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-10"
                      />
                    </span>
                    <span className="text-gre text-3xl">Green Oasis</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="z-10 flex flex-wrap w-full my-5 lg:hidden">
                  {({ close }) => (
                    <>
                      {navigation.map((item, index) => (
                        <Link key={index} onClick={() => close()} href={item.link} className=" bg-white dark:bg-neutral-900 w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-neutral-800 focus:outline-none">
                            {item.name}
                        </Link>
                      ))}
                      <Link onClick={() => close()} href="/" className="w-full px-4 py-2 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                          Get Started
                      </Link>
                    </>
                  )}
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={item.link} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item gap-2.5">
          <ThemeChanger />
          <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
          </Link>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
