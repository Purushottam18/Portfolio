"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth trailing effect
    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX - 8);
            mouseY.set(e.clientY - 8);
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full 
                 bg-purple-600 pointer-events-none z-9999"
            style={{
                translateX: springX,
                translateY: springY,
            }}
        />
    );
}
