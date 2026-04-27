/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ReactLenis } from 'lenis/react'

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import Components
import { PartnerOne, PartnerTwo } from '@/components/Partner';
import BlurText from '@/components/BlurText';
import Service from '@/components/Service';
import Hero from '@/components/Hero';
import Works from '@/components/Works';

export default function Home() {
    const circleRef = useRef(null);

    // Always Call Hooks
    const { scrollYProgress } = useScroll({
        target: circleRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 2.5]);

    // Track Client Mount
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <ReactLenis root>
            <Hero />
            <PartnerOne />
            <PartnerTwo />
            <div ref={circleRef} className='h-[400vh] w-full overflow-y-clip'>
                <Service />

                <div className='relative bg-amber-500 overflow-x-clip h-screen'>
                    {/* Expanding Circle Animation */}
                    <motion.div
                        className="absolute left-0 right-0 -top-1/4 w-full h-screen bg-white rounded-t-full z-20"
                        style={{ scale }}
                    ></motion.div>
                    <div className="w-full h-fit sticky top-0 bg-white z-30 flex flex-col items-center">
                        <BlurText
                            text={"OUR"}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-(--color-primary) font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                        />
                        <BlurText
                            text={"WORKS"}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-(--color-primary) font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                        />
                        <Works />
                    </div>
                </div>
            </div>
        </ReactLenis >
    );
}
