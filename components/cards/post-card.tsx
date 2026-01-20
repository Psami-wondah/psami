import Link from "next/link";

type PostCardProps = {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tag: string;
  cover: string;
  href: string;
};

const PostCard = ({
  title,
  description,
  date,
  readingTime,
  tag,
  cover,
  href,
}: PostCardProps) => {
  return (
    <article className="group @container">
      <Link
        href={href}
        className="flex flex-col @xl:flex-row gap-6 p-4 rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-[#1a2333] border border-transparent hover:border-slate-200 dark:hover:border-primary/20"
      >
        <div
          className="w-full @xl:w-72 h-48 bg-center bg-no-repeat bg-cover rounded-lg shrink-0 overflow-hidden shadow-lg"
          role="img"
          aria-label={title}
          style={{ backgroundImage: `url(${cover})` }}
        />
        <div className="flex flex-col justify-center flex-1 gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
              {tag}
            </span>
            <span className="text-slate-400 dark:text-[#92a4c9] text-xs">
              • {date} • {readingTime}
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-[#92a4c9] text-base leading-relaxed line-clamp-2">
            {description}
          </p>
          <div className="mt-2 flex items-center text-primary font-bold text-sm gap-1 cursor-pointer">
            <span>Read full article</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
