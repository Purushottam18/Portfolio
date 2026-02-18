import ProjectCard from "@/components/Project/ProjectCard";
import SectionTitle from "@/components/Section/Section";
import { projects } from "@/data/projects";


export default function Projects() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="Projects" />
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
