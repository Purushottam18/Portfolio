"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white dark:bg-black transition-colors">
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

                {/* Logo */}
                <a href="#hero" className="font-semibold text-xl tracking-wide">
                    <span className="text-purple-700">P</span>urushottam <span className="text-purple-700">S</span>amleti
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <NavLinks />
                </nav>

                {/* Hamburger (visible below lg) */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-2xl"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="px-6 pb-6 flex flex-col gap-6 bg-white dark:bg-black">
                    <NavLinks mobile onClick={closeMenu} />
                </nav>
            </div>
        </header>
    );
}

function NavLinks({
    mobile = false,
    onClick,
}: {
    mobile?: boolean;
    onClick?: () => void;
}) {
    const base =
        "relative text-lg after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full";

    const mobileStyle = mobile ? "block text-left" : "";

    return (
        <>
            <a href="#about" onClick={onClick} className={`${base} ${mobileStyle}`}>
                About
            </a>
            <a href="#projects" onClick={onClick} className={`${base} ${mobileStyle}`}>
                Portfolio
            </a>
            <a href="#contact" onClick={onClick} className={`${base} ${mobileStyle}`}>
                Contacts
            </a>
            <a href="#resume" onClick={onClick} className={`${base} ${mobileStyle}`}>
                Resume
            </a>
        </>
    );
}
