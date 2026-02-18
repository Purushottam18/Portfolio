import SectionTitle from "@/components/Section/Section";
import SkillBadge from "@/components/Skills/SkillBadge";
import { skills } from "@/data/skills";


export default function Skills() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="Skills" />
                <div className="flex flex-wrap gap-4 justify-center">
                    {skills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
