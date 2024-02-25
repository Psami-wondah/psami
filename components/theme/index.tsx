"use client";
import { useTheme } from "next-themes";
import MoonIcon from "@/assets/icons/navbar/moon";
import SunIcon from "@/assets/icons/navbar/sun";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={` hover:scale-110 active:scale-100 duration-200`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
