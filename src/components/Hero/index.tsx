"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";

// Next
import Image from "next/image";

// Import Components
import Overline from "../Overline";
import { ButtonOne, ButtonTwo, ButtonThree } from "../Button";
import BlurText from "../BlurText";

// Import Assets
import KOL from "../../assets/kol.png";
import KOL2 from "../../assets/kol2.png";
import KOL3 from "../../assets/kol3.png";
import KOL4 from "../../assets/kol4.png";
import KOL5 from "../../assets/kol5.png";
import Element3 from "../../assets/asset-3.svg";

import cse1 from "@/assets/cse1.png";
import cse2 from "@/assets/cse2.png";
import cse3 from "@/assets/cse3.png";
import cse4 from "@/assets/cse7.png";
import cse5 from "@/assets/cse8.png";
import cse6 from "@/assets/cse9.png";
import cse7 from "@/assets/cse10.png";
import cse8 from "@/assets/cse4.png";
import cse9 from "@/assets/cse5.png";
import cse10 from "@/assets/cse6.png";

const logos = [
    cse1,
    cse2,
    cse3,
    cse4,
    cse5,
    cse6,
    cse7,
    cse8,
    cse9,
    cse10,
];



// Import Logo

// Import Motion Libraries
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    Variants,
} from "framer-motion";

const images = [KOL, KOL2, KOL3, KOL4, KOL5];

const SECTIONHEIGHT = 200;

export default function Hero() {
    const { scrollYProgress } = useScroll();

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 20,
        restDelta: 0.001,
    });

    const yTransform = useTransform(
        smoothScroll,
        [0, 1],
        ["0vh", `${SECTIONHEIGHT}vh`]
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    const reveal: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.7,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.6,
            },
        },
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    // SCROLL ON CLICK FUNCTION
    const scrollToDiscover = () => {
        const section = document.getElementById("discover");
        if (section) {
            const y =
                section.getBoundingClientRect().top +
                window.pageYOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section>
            <motion.div
                className="flex flex-col w-full items-center justify-start bg-(--color-primary) relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ height: `calc(${SECTIONHEIGHT}vh)` }}
            >
                {/* SECTION 1 */}
                <motion.div className="h-screen sticky top-0">
                    <motion.div
                        className="flex flex-col items-center justify-center h-screen gap-4"
                        style={{ transform: yTransform }}
                    >
                        {/* Overline */}
                        <motion.div initial="hidden" animate="visible" variants={reveal}>
                            <Overline text="CREATIVE SUPPLY ECOSYSTEM" />
                        </motion.div>

                        {/* Title */}
                        <div className="w-fit h-fit relative flex flex-col items-center">
                            <BlurText
                                text={"WE SUPPLY YOUR"}
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-white font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                            />
                            <BlurText
                                text={"CREATIVE NEEDS"}
                                delay={180}
                                animateBy="words"
                                direction="top"
                                className="text-white font-extrabold text-4xl md:text-6xl xl:text-9xl text-center mt-8 uppercase"
                            />

                            {/* Decorative Elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                            >
                                <Image
                                    width={48}
                                    height={48}
                                    src={Element3}
                                    alt="Element"
                                    className="absolute top-12 right-80"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                            >
                                <Image
                                    width={48}
                                    height={48}
                                    src={Element3}
                                    alt="Element"
                                    className="absolute bottom-16 left-64"
                                />
                            </motion.div>
                        </div>
                        {/* Logos */}
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {logos.map((logo, index) => (
                                <div key={index} className="opacity-80 hover:opacity-100 transition">
                                    <Image
                                        src={logo}
                                        alt={`ecosystem-${index}`}
                                        className="h-auto w-24 object-contain brightness-0 invert"
                                    />
                                </div>
                            ))}
                        </div>


                        {/* BUTTON CTA */}
                        {/* <motion.div initial="hidden" animate="visible" variants={reveal}>
                            <ButtonThree
                                text="CLICK TO DISCOVER THE MAGIC"
                                onClick={scrollToDiscover}
                            />
                        </motion.div> */}
                    </motion.div>
                </motion.div>

                {/* SECTION 2 */}
                <motion.div
                    id="discover"
                    className="h-screen relative w-full flex items-center justify-center overflow-hidden z-30"
                >
                    <motion.div className="absolute grid grid-cols-3 gap-4 h-[80%] -bottom-10 w-full items-end">
                        {[prevIndex, currentIndex, nextIndex].map((index, i) => (
                            <motion.div
                                key={index}
                                className={`relative flex justify-center items-end mx-auto ${i === 1 ? "w-full h-full" : "w-2/3 h-2/3"
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <Image
                                    src={images[index]}
                                    alt="Welcome KOL"
                                    fill
                                    className="transition-transform duration-300 hover:translate-y-12 object-contain object-bottom z-30"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA BOTTOM */}
                <motion.div
                    className="absolute bottom-8 flex flex-row w-fit gap-2.5 z-50 bg-white rounded-full p-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            delay: 0.4,
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true, amount: 1 }}
                >
                    <ButtonOne text="Be Our Partner" onClick={() => (window.location.href = "/contact")} />
                    <ButtonTwo text="More Projects" onClick={() => (window.location.href = "/projects")} />
                </motion.div>
            </motion.div>
        </section>
    );
}