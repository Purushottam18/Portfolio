import SectionTitle from "@/components/Section/Section";

export default function About() {
    return (
        <section
            id="about"
            className="py-32 "
        >
            <SectionTitle title="About Me" />
            <p className="text-gray-500 text-center">
                I’m a Web & Mobile App Developer with a strong interest in building clean, scalable, and user-friendly applications.
            </p>
            <p className="text-gray-500 text-center">
                I primarily work with React Native, Flutter, Next.js, React and TypeScript, and I enjoy turning ideas into well-structured digital products.
            </p>

            <p className="text-gray-500 text-center">
                I hold a Bachelor of Science in Computer Science & IT from MGM’s College of CS/IT, Nanded, Maharashtra,     </p>

        </section>
    );
}
