"use client";

import { useTheme } from "@/components/Theme/ThemeProvider";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 w-full z-50 bg-white dark:bg-black transition-colors">
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

                <a href="#hero" className="font-semibold text-xl tracking-wide">
                    <span className="text-pink-500">P</span>urushottam
                </a>

                <div className="flex items-center gap-8 text-md">
                    <a href="#about" className="hover:text-pink-500 transition">About</a>
                    <a href="#projects" className="hover:text-pink-500 transition">Portfolio</a>
                    <a href="#contact" className="hover:text-pink-500 transition">Contacts</a>

                    <button
                        onClick={toggleTheme}
                        className="text-xl hover:text-pink-500 transition"
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>
        </header>
    );
}
