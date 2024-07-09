"use client";

import { usePathname } from "next/navigation.js";
import GithubLogo from "../assets/iconmonstr-github-1.jsx";
import LinkedInLogo from "../assets/LinkedInLogo.jsx";
import Link from "next/link";
import { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <div className="h-full font-medium">
      <div className="h-full w-auto mx-auto max-w-screen-2xl flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36">
        {/* Home Button / Logo */}
        <div className="font-semibold ">
          <Link
            href={"/"}
            className="text-2xl bg-secondary text-primary rounded-md p-1 flex items-center justify-center"
          >
            <span className="px-1"> nat </span>
            <span className="pl-0.5 pr-1 bg-primary text-accent rounded-md">
              {" "}
              .dev
            </span>
          </Link>
        </div>
        {/* Website Directory */}
        <div className="hidden md:flex flex-row items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className={`${
                pathName === link.url &&
                "text-accent underline underline-offset-4"
              } hover:text-accent hover:scale-105`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* Links to Socials */}
        <div className="hidden md:flex flex-row items-center justify-center gap-8">
          <Link
            href={"https://github.com/nmayne3"}
            className="*:fill-secondary *:hover:fill-accent"
          >
            <GithubLogo />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nmayne3/"}
            className="*:fill-secondary *:hover:fill-accent"
          >
            <LinkedInLogo className="group" />
          </Link>
        </div>
        {/* Mobile Menu*/}
        <div className="md:hidden">
          {/* MENU Button */}
          <button
            className="w-10 h-6 p-0.5 flex flex-col justify-between relative z-50"
            onClick={() => setOpen(!open)}
          >
            <div className="w-8 h-1 bg-primary rounded-md"></div>
            <div className="w-8 h-1 bg-primary rounded-md"></div>
            <div className="w-8 h-1 bg-primary rounded-md"></div>
          </button>
          {/* MENU LIST */}
          {open && (
            <div className="absolute top-0 left-0 w-full h-full bg-secondary text-primary flex flex-col items-center justify-center gap-8">
              {links.map((link) => (
                <Link
                  href={link.url}
                  key={link.title}
                  className="hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
