import SectionTitle from "@/components/Section/Section";
import SkillBadge from "@/components/Skills/SkillBadge";
import { skills } from "@/data/skills";


export default function Skills() {
    return (
        <section
            id="skills"
            className="py-20"

        >
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="Skills" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
                    {skills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} />
                    ))}
                </div>

            </div>
        </section>
    );
}
