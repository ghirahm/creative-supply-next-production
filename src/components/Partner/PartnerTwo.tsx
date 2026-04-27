"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import partner1 from "@/assets/partner-1.webp";
import partner2 from "@/assets/partner-2.webp";
import partner3 from "@/assets/partner-3.webp";
import partner4 from "@/assets/partner-4.webp";
import partner5 from "@/assets/partner-5.webp";
import partner6 from "@/assets/partner-6.webp";
import partner7 from "@/assets/partner-7.webp";
import partner8 from "@/assets/partner-8.webp";
import partner9 from "@/assets/partner-9.webp";
import partner10 from "@/assets/partner-10.webp";
import partner11 from "@/assets/partner-11.webp";

import useMeasure from "react-use-measure";

const partners = [
    partner1, partner2, partner3, partner4, partner5,
    partner6, partner7, partner8, partner9, partner10, partner11
];

const duplicatedPartners = [...partners, ...partners, ...partners];

export default function PartnerTwo() {
    const [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    const FAST_DURATION = 15;
    const SLOW_DURATION = 45;

    const [duration, setDuration] = useState(FAST_DURATION);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        const finalPosition = (-width / 3) - 24;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), 0], {
                ease: 'linear',
                duration: duration * (xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            })
        }
        else {
            controls = animate(xTranslation, [finalPosition, 0], {
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
        <section className="flex flex-col items-center justify-center bg-white h-fit overflow-hidden">
            <div
                className="w-full relative flex overflow-hidden py-12"
            >
                <motion.ul
                    className="flex items-center gap-24 w-max"
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
                    {duplicatedPartners.map((partner, index) => (
                        <li key={index} className="shrink-0">
                            <Image
                                src={partner}
                                alt={`Partner ${index + 1}`}
                                className="h-6 w-auto invert cursor-pointer"
                            />
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
