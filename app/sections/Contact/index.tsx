import SectionTitle from "@/components/Section/Section";

export default function Contact() {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <SectionTitle title="Contact" />
                <p className="text-gray-600 mb-6">
                    Feel free to reach out for collaborations or opportunities.
                </p>
                <a
                    href="mailto:youremail@example.com"
                    className="bg-black text-white px-6 py-3 rounded"
                >
                    Send Email
                </a>
            </div>
        </section>
    );
}
