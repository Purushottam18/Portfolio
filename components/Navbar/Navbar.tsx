"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 w-full z-50 bg-white text-black dark:bg-black dark:text-white transition-colors"
        >
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

                {/* Logo */}
                <a href="#hero" className="font-semibold text-xl tracking-wide">
                    <span className="text-purple-500">P</span>urushottam{" "}
                    <span className="text-purple-500">S</span>amleti
                </a>

                {/* Desktop Nav */}
                <nav className="flex md:flex items-center gap-8 md:relative absolute -left-2499.75 md:left-0">

                    <NavLinks />
                </nav>

                {/* Hamburger / Close with animation */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl relative w-6 h-6"
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.span
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <FiX />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <FiMenu />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Dropdown with proper exit animation */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white dark:bg-black"
                    >
                        <nav className="px-6 pb-6 pt-4 flex flex-col gap-6">
                            <NavLinks mobile onClick={closeMenu} />
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
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
        "relative text-lg after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full";

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
