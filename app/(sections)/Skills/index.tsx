import SectionTitle from "@/components/Section/Section";
import SkillBadge from "@/components/Skills/SkillBadge";
import { skills } from "@/data/skills";

export default function Skills() {
    const midpoint = Math.ceil(skills.length / 2);
    const topRow = skills.slice(0, midpoint);
    const bottomRow = skills.slice(midpoint);

    return (
        <section id="skills" className="py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 space-y-16">

                <SectionTitle title="Skills" />

                {/* Top Row */}
                <div className="relative overflow-hidden flex justify-center">
                    <div className="flex gap-10 animate-[scroll-left_20s_linear_infinite]">
                        {topRow.map((skill, i) => (

                            <SkillBadge key={`top-${i}`} skill={skill} />
                        ))}
                    </div>
                </div>


                {/* Bottom Row */}
                <div className="relative overflow-hidden flex justify-center">
                    <div className="flex gap-10 animate-[scroll-right_20s_linear_infinite]">
                        {bottomRow.map((skill, i) => (
                            <SkillBadge key={`top-${i}`} skill={skill} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
