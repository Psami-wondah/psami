import Divider from "@/assets/icons/navbar/divider";
import { clsx } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../theme";
import { ButtonBase } from "../button";

const NavBar = () => {
  const items = [
    {
      name: "About me",
      path: "#about-me",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact me",
      path: "#contact-me",
    },
  ];
  return (
    <nav
      className={clsx(
        "dark:bg-psami-dark",
        "flex items-center justify-between",
        "px-28 py-5",
        "font-poppins"
      )}
    >
      <div
        className={clsx(
          "font-bold font-inter",
          "text-[#0D101A] dark:text-[#F9FAFB]",
          "text-4xl"
        )}
      >
        {"<"}
        <span className="font-poppins text-3xl">Psami</span>
        {"/>"}
      </div>
      <div className="flex items-center">
        <div className={clsx("flex gap-x-6")}>
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx(
                "text-[#4B5563] dark:text-[#D1D5DB]",
                "font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mx-6 flex gap-x-6">
          <Divider />
          <ThemeSwitcher />
        </div>
        <div>
          <ButtonBase>Download CV</ButtonBase>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
