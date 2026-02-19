import { Project } from "@/types/project";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <div className="group bg-neutral-100 dark:bg-neutral-900 
                    border border-neutral-200 dark:border-neutral-800 
                    rounded-xl p-6 transition 
                    hover:border-purple-500 hover:-translate-y-1 
                    hover:shadow-lg">

            <h3 className="text-xl font-semibold mb-3">
                {project.title}
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full
                       bg-neutral-200 dark:bg-neutral-800
                       text-neutral-700 dark:text-neutral-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a
                // href={project.link}
                className="text-sm font-medium text-purple-500 
                   hover:underline"
            >
                View Project →
            </a>
        </div>
    );
}
