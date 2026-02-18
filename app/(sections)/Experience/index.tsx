import { experience } from "@/data/experience";
import SectionTitle from "@/components/Section/Section";

export default function Experience() {
    return (
        <section id="experience" className="py-10">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="Experience" />

                <div className="space-y-10 mt-12">
                    {experience.map((exp) => (
                        <div
                            key={exp.id}
                            className="border-l-2 border-purple-700 pl-6"
                        >
                            <h3 className="text-xl font-semibold">
                                {exp.role}
                            </h3>

                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                {exp.company} • {exp.duration}
                            </p>

                            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
