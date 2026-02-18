"use client";

// import { useTheme } from "@/components/Theme/ThemeProvider";

export default function Navbar() {
    // const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 w-full z-50 bg-white dark:bg-black transition-colors">
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

                <a href="#hero" className="font-semibold text-xl tracking-wide">
                    <span className="text-pink-500">P</span>urushottam
                </a>

                <div className="flex items-center gap-8 text-md">

                    <a
                        href="#about"
                        className="relative text-lg after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
                   after:h-0.5 after:w-0 after:bg-pink-500 
                   after:transition-all after:duration-300 
                   hover:after:w-full"
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className="relative text-lg after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
                   after:h-0.5 after:w-0 after:bg-pink-500 
                   after:transition-all after:duration-300 
                   hover:after:w-full"
                    >
                        Portfolio
                    </a>

                    <a
                        href="#contact"
                        className="relative text-lg after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
                   after:h-0.5 after:w-0 after:bg-pink-500 
                   after:transition-all after:duration-300 
                   hover:after:w-full"
                    >
                        Contacts
                    </a>

                </div>
            </div>
        </header>

    );
}
