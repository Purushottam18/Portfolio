"use client"

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi"

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formRef.current) return

        try {
            await emailjs.sendForm(
                "service_d3lsn8j",
                "template_ony1z0v",
                formRef.current,
                "Rq3pX1WU0rLe2qKEj"
            )

            alert("Message sent successfully")
            formRef.current.reset()

        } catch (error) {
            console.error(error)
            alert("Failed to send message")
        }
    }

    return (
        <section id="contact" className="py-32">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-10">
                        Contact <span className="text-purple-500">Me!</span>
                    </h2>

                    <div className="space-y-6">

                        <div className="flex items-start gap-4">
                            <FiMail className="text-purple-500 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold">Mail</h4>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    purushottamsamlety18@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FiMapPin className="text-purple-500 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Hyderabad, Telangana, India
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-10 text-2xl">
                        <a
                            href="https://github.com/Purushottam18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-purple-500 transition"
                        >
                            <FiGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/purushottamsamleti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-purple-500 transition"
                        >
                            <FiLinkedin />
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                    <input
                        name="name"        // MUST match {{name}}
                        type="text"
                        placeholder="Name"
                        required
                        className="w-full bg-neutral-900 border border-neutral-800 
                        px-4 py-3 rounded-md 
                        focus:outline-none focus:border-purple-500 
                        text-white hover:border-purple-500"
                    />

                    <input
                        name="email"       // MUST match {{email}}
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full bg-neutral-900 border border-neutral-800 
                        px-4 py-3 rounded-md 
                        focus:outline-none focus:border-purple-500 
                        text-white hover:border-purple-500"
                    />

                    <textarea
                        name="message"     // MUST match {{message}}
                        rows={5}
                        placeholder="Message"
                        required
                        className="w-full bg-neutral-900 border border-neutral-800 
                        px-4 py-3 rounded-md 
                        focus:outline-none focus:border-purple-500 
                        text-white hover:border-purple-500"
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 border border-purple-500 
                        text-purple-500 rounded-md 
                        hover:bg-purple-500 hover:text-black 
                        transition"
                    >
                        Submit
                    </button>

                </form>

            </div>
        </section>
    )
}