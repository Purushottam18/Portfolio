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
            className="flex items-center justify-center
                 w-16 h-16
                 rounded-xl
                 bg-neutral-100 dark:bg-neutral-900
                 border border-neutral-200 dark:border-neutral-800
                 hover:-translate-y-1
                 transition"
        >
            <Icon
                className="text-4xl"
                style={{ color: skill.color }}
            />
        </a>
    );
}
