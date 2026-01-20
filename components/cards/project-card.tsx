import Tag from "@/components/ui/tag";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  icon: string;
  tags: string[];
};

const ProjectCard = ({ title, description, image, icon, tags }: ProjectCardProps) => {
  return (
    <div className="group flex flex-col gap-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl hover:border-primary/40 transition-all">
      <div className="w-full aspect-video rounded-xl overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          role="img"
          aria-label={title}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-4xl">
            open_in_new
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2">
        <div className="flex justify-between items-start">
          <h3 className="dark:text-white font-display text-xl font-bold">
            {title}
          </h3>
          <span className="material-symbols-outlined text-slate-500 group-hover:text-primary">
            {icon}
          </span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
