import { clsx } from "@/utils/utils";
import React from "react";

export const ButtonBase = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className={clsx(
        "py-3 px-4",
        "rounded-[50px]",
        "bg-[#0D101A] dark:bg-[#F9FAFB]",
        "text-[#F9FAFB] dark:text-[#111827]",
        "hover:scale-105 transition-[transform]",
        props.className ?? ""
      )}
    />
  );
};
