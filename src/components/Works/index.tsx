"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import useMeasure from "react-use-measure";

import content1 from "@/assets/content-1.gif";
import content2 from "@/assets/content-2.gif";
import content3 from "@/assets/content-3.gif";
import content4 from "@/assets/content-4.gif";
import content5 from "@/assets/content-5.gif";
import content6 from "@/assets/content-6.gif";
import content7 from "@/assets/content-7.gif";
import { ButtonThree } from "../Button";

const images = [content1, content2, content3, content4, content5, content6, content7];

const duplicatedPartners = [...images, ...images, ...images];

export default function Works() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    const FAST_DURATION = 15;
    const SLOW_DURATION = 45;

    const [duration, setDuration] = useState(FAST_DURATION);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        const finalPosition = (-width / 3) - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
                repeatDelay: 0
            })
        }
        else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0
            });
        }

        return controls?.stop;

    }, [xTranslation, width, duration, rerender, mustFinish])

    return (
        <section className="flex flex-col items-center justify-center h-fit overflow-hidden">
            <div
                className="w-full relative flex overflow-hidden py-12"
            >
                <motion.ul
                    className="flex items-center gap-8 w-max"
                    style={{ x: xTranslation }}
                    ref={ref}
                    onHoverStart={() => {
                        setMustFinish(true);
                        setDuration(SLOW_DURATION);
                    }}
                    onHoverEnd={() => {
                        setMustFinish(true);
                        setDuration(FAST_DURATION)
                    }}
                >
                    {duplicatedPartners.map((src, index) => (
                        <li key={index} className="shrink-0">
                            <motion.div
                                className="h-105 w-fit relative rounded-xl overflow-hidden"
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 z-10 flex justify-center items-center">
                                        {/* Separate div for background with opacity */}
                                        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

                                        {/* Button wrapper without opacity */}
                                        <div className="relative z-20 flex justify-center items-center">
                                            <ButtonThree text="Explore" />
                                        </div>
                                    </div>
                                )}
                                <Image
                                    src={src}
                                    alt={`Showcase ${index + 1}`}
                                    className="h-full w-auto"
                                    unoptimized={true}
                                />
                            </motion.div>
                        </li>
                    ))}

                </motion.ul>
            </div>
        </section>
    );
}
