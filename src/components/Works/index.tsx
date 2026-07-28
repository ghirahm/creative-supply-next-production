"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
// React & Next
import Link from "next/link";

import useMeasure from "react-use-measure";

import { ButtonThree } from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// These were 25-32 MB animated GIFs (144 MB total) rendered through next/image
// with `unoptimized`, so every visitor downloaded all of them uncompressed.
// They are 9-second vertical clips, so h264 is the right container: the same
// footage is now 7.3 MB total. Served from /public so they bypass the bundler.
const CLIPS = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    src: `/works/content-${n}.mp4`,
    poster: `/works/content-${n}.webp`,
}));

// Tripled so the marquee can loop seamlessly. The browser fetches each unique
// URL once, so this costs bandwidth for 7 clips, not 21.
const duplicatedPartners = [...CLIPS, ...CLIPS, ...CLIPS];

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
                    {duplicatedPartners.map((clip, index) => (
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
                                <video
                                    src={clip.src}
                                    poster={clip.poster}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    aria-label={`Showcase ${index + 1}`}
                                    className="h-full w-auto"
                                />
                            </motion.div>
                        </li>
                    ))}

                </motion.ul>
            </div>
            <Link href="/contact">
                <button className="group relative text-(--color-primary) border border-(--color-primary) px-10 py-6 rounded-3xl hover:border-b-8 hover:border-r-8 transition-all cursor-pointer flex items-center gap-3">

                    <span className="font-extrabold text-3xl md:text-5xl uppercase flex items-center gap-3">
                        Be Our Partner
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="w-[1em] h-[1em] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 -rotate-45"
                        />
                    </span>

                </button>
            </Link>
        </section>
    );
}
