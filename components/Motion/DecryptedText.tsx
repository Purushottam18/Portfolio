"use client";

import { useEffect, useState } from "react";

type Props = {
    text: string;
    speed?: number;
};

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


export default function DecryptedText({ text, speed = 10 }: Props) {
    const [display, setDisplay] = useState(text);

    useEffect(() => {
        let frame = 0;
        const totalFrames = text.length * 6;

        const interval = setInterval(() => {
            const output = text
                .split("")
                .map((char, index) => {
                    if (index < frame / 6) {
                        return text[index];
                    }

                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");

            setDisplay(output);

            frame++;

            if (frame >= totalFrames) {
                clearInterval(interval);
                setDisplay(text);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{display}</span>;
}
