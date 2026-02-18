import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";


export default function Contact() {
    return (
        <section id="contact" className="py-32">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-10">
                        Contact <span className="text-purple-700">Me!</span>
                    </h2>

                    <div className="space-y-6">

                        {/* Mail */}
                        <div className="flex items-start gap-4">
                            <FiMail className="text-purple-700 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold">Mail</h4>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    purushottamsamlety18@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <FiMapPin className="text-purple-700 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Hyderabad, Telangana, India
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-10 text-2xl">
                        <a
                            href="https://github.com/Purushottam18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-purple-700 transition"
                        >
                            <FiGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/purushottamsamleti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-purple-700 transition"
                        >
                            <FiLinkedin />
                        </a>
                    </div>
                </div>


                {/* RIGHT SIDE FORM */}
                <form className="space-y-6">

                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-neutral-900 border border-neutral-800 
                       px-4 py-3 rounded-md 
                       focus:outline-none focus:border-purple-700 
                       text-white  hover:border-purple-700"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-neutral-900 border border-neutral-800 
                       px-4 py-3 rounded-md 
                       focus:outline-none focus:border-purple-700 
                       text-white  hover:border-purple-700"
                    />

                    <textarea
                        rows={5}
                        placeholder="Message"
                        className="w-full bg-neutral-900 border border-neutral-800 
                       px-4 py-3 rounded-md 
                       focus:outline-none focus:border-purple-700 
                       text-white  hover:border-purple-700"
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 border border-purple-700 
                       text-purple-700 rounded-md 
                       hover:bg-purple-700 hover:text-black 
                       transition"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </section>
    );
}
