import { Project } from "@/types/project";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                    <span key={tech} className="text-sm bg-gray-200 px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            <a href={project.link} className="text-blue-500 underline">
                View Project
            </a>
        </div>
    );
}
