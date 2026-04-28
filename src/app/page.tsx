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
import Showreels from '@/components/Showreels';

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
            <div ref={circleRef} className='h-[320vh] w-full overflow-y-clip'>
                <Showreels />
                {/* <Service /> */}

                <div className='relative overflow-x-clip h-[screen]'>
                    {/* Expanding Circle Animation */}
                    <motion.div
                        className="absolute left-0 right-0 -top-1/2 w-full h-full bg-white rounded-t-full z-20"
                        style={{ scale }}
                    ></motion.div>

                    <div className="w-full h-fit sticky top-0 z-30 flex flex-col items-center">
                        <BlurText
                            text={"ENOUGH ABOUT US"}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-(--color-primary) font-black text-4xl md:text-6xl xl:text-7xl text-center mt-8 uppercase"
                        />
                        <BlurText
                            text={"LET'S TALK ABOUT YOU!"}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-(--color-primary) font-black text-4xl md:text-6xl xl:text-7xl text-center mt-8 uppercase italic"
                        />
                        <Works />
                    </div>
                </div>
            </div>
        </ReactLenis >
    );
}
