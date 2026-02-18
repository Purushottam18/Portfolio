import { Skill } from "@/types/skills";

type Props = {
    skill: Skill;
};

export default function SkillBadge({ skill }: Props) {
    const Icon = skill.icon;

    return (
        <a
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3 
                 bg-neutral-100 dark:bg-neutral-900
                 border border-neutral-200 dark:border-neutral-800
                 rounded-xl
                 hover:border-purple-700 hover:-translate-y-1
                 transition duration-300"
        >
            <Icon
                className="text-2xl group-hover:scale-110 transition"
                style={{ color: skill.color }}
            />

            <span className="text-sm font-medium">
                {skill.name}
            </span>
        </a>
    );
}
