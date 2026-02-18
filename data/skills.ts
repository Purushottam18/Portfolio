import { Skill } from "@/types/skills";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiAndroid,
  SiApple,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

export const skills: Skill[] = [
  {
    id: "1",
    name: "Next.js",
    icon: SiNextdotjs,
    url: "https://nextjs.org/",
    color: "#ffffff",
  },
  {
    id: "2",
    name: "React",
    icon: SiReact,
    url: "https://react.dev/",
    color: "#61DAFB",
  },
  {
    id: "3",
    name: "React Native",
    icon: SiReact,
    url: "https://reactnative.dev/",
    color: "#61DAFB",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/",
    color: "#38BDF8",
  },
  {
    id: "5",
    name: "Android",
    icon: SiAndroid,
    url: "https://developer.android.com/",
    color: "#3DDC84",
  },
  {
    id: "6",
    name: "iOS",
    icon: SiApple,
    url: "https://developer.apple.com/",
    color: "#ffffff",
  },
  {
    id: "7",
    name: "TypeScript",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org/",
    color: "#3178C6",
  },
  {
    id: "8",
    name: "JavaScript",
    icon: SiJavascript,
    url: "https://developer.mozilla.org/",
    color: "#F7DF1E",
  },
  // { id: "9", name: "HTML", icon: "/images/icons/skillIcons/html.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  // { id: "10", name: "CSS", icon: "/images/icons/skillIcons/css.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  // { id: "11", name: "Figma", icon: "/images/icons/skillIcons/figma.svg", url: "https://www.figma.com/" },
];
