import SectionTitle from "@/components/Section/Section";

export default function About() {
    return (
        <section className="py-20 max-w-4xl mx-auto px-6">
            <SectionTitle title="About Me" />
            <p className="text-gray-600 text-center">
                Passionate developer focused on building scalable and modern applications.
            </p>
        </section>
    );
}
