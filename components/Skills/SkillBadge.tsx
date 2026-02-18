import { Skill } from "@/types/skills";

type Props = {
    skill: Skill;
};

export default function SkillBadge({ skill }: Props) {
    return (
        <div className="px-4 py-2 border rounded">{skill.name}</div>
    );
}
