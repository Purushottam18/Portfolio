import Image from "next/image";
import DecryptedText from "@/components/Motion/DecreptedText";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-32 px-6"
        >
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

                {/* Text */}

                <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Hello there! 👋
                    </h1>

                    <h2 className="text-3xl md:text-3xl font-bold mt-4">
                        I’m <span className="text-purple-500"><DecryptedText text="Purushottam Samleti" /></span>
                    </h2>

                    <p className="mt-6 text-neutral-600 text-xl dark:text-neutral-400 max-w-lg">
                        I&apos;m a frontend developer passionate about crafting modern,
                        scalable and user-focused web & mobile experiences.
                    </p>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/profile.png"
                        alt="Profile"
                        width={420}
                        height={420}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}
