import { clsx } from "@/utils/utils";

type TagProps = {
  label: string;
  variant?: "solid" | "soft";
  className?: string;
};

const Tag = ({ label, variant = "soft", className }: TagProps) => {
  const base =
    "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider";
  const styles =
    variant === "solid"
      ? "bg-primary text-white"
      : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400";

  return <span className={clsx(base, styles, className || "")}>{label}</span>;
};

export default Tag;
