import Link from "next/link";

type PostRowProps = {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tag: string;
  href: string;
};

const PostRow = ({
  title,
  description,
  date,
  readingTime,
  tag,
  href,
}: PostRowProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col sm:flex-row gap-4 items-start pb-8 border-b border-slate-200 dark:border-slate-800 hover:opacity-80 cursor-pointer group"
    >
      <span className="text-xs font-bold font-mono text-slate-400 dark:text-slate-500 pt-1">
        {date}
      </span>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-display font-bold dark:text-white group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
        <div className="flex gap-4 items-center">
          <span className="text-xs text-slate-400">{readingTime}</span>
          <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
            {tag}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostRow;
