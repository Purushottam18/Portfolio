import { experience } from "@/data/experience";
import SectionTitle from "@/components/Section/Section";

export default function Experience() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <SectionTitle title="Experience" />
                {experience.map((exp) => (
                    <div key={exp.id} className="mb-6">
                        <h3 className="font-semibold">
                            {exp.role} - {exp.company}
                        </h3>
                        <p className="text-sm text-gray-500">{exp.duration}</p>
                        <p className="text-gray-600">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
