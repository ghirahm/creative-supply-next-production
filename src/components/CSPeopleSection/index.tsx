"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// IMPORT IMAGES
import creator1 from "@/assets/1.png";
import creator2 from "@/assets/2.png";
import creator3 from "@/assets/3.png";
import creator4 from "@/assets/4.png";
import creator5 from "@/assets/5.png";
import creator6 from "@/assets/6.png";
import creator7 from "@/assets/7.png";
import creator8 from "@/assets/8.png";
import creator9 from "@/assets/9.png";
import creator10 from "@/assets/10.png";
import creator11 from "@/assets/11.png";
import creator12 from "@/assets/12.png";
import creator13 from "@/assets/13.png";
import creator14 from "@/assets/14.png";
import creator15 from "@/assets/15.png";
import creator16 from "@/assets/16.png";
import creator17 from "@/assets/17.png";
import creator1x from "@/assets/1_1.png";
import creator2x from "@/assets/2_1.png";
import creator3x from "@/assets/3_1.png";
import creator4x from "@/assets/4_1.png";
import creator5x from "@/assets/5_1.png";
import creator6x from "@/assets/6_1.png";
import creator7x from "@/assets/7_1.png";
import creator8x from "@/assets/8_1.png";
import creator9x from "@/assets/9_1.png";
import creator10x from "@/assets/10_1.png";
import creator11x from "@/assets/11_1.png";
import creator12x from "@/assets/12_1.png";
import creator13x from "@/assets/13_1.png";
import creator14x from "@/assets/14_1.png";
import creator15x from "@/assets/15_1.png";
import creator16x from "@/assets/16_1.png";
import creator17x from "@/assets/17_1.png";

const creators = [
    { image: creator1, close: creator1x, name: "Aldo Giustino", instagram: "@aldogiustino", tiktok: "@aldogiustino21", niche: ["VFX", "Editing", "Skits"] },
    { image: creator2, close: creator2x, name: "Leyla Aderina", instagram: "@leyladerina", tiktok: "@leyladerina", niche: ["Skits", "Comedy", "Voice Over"] },
    { image: creator3, close: creator3x, name: "Sofarsabi", instagram: "@sofarsabi", tiktok: "@sofarsabi", niche: ["VFX", "Crafting"] },
    { image: creator4, close: creator4x, name: "Caciliaaaaa", instagram: "@caciliaaaaa", tiktok: "@caciliaaaaa", niche: ["Voice Over", "Princess Roleplay"] },
    { image: creator5, close: creator5x, name: "Sumber Makmur Asli", instagram: "@sumbermakmurasli", tiktok: "@sumbermakmurasli", niche: ["Comedy", "Skits"] },
    { image: creator6, close: creator6x, name: "Sumber Makmur Palsu", instagram: "@sumbermakmurpalsu", tiktok: "@sumbermakmurpalsu", niche: ["DJ", "Comedy", "Skits"] },
    { image: creator7, close: creator7x, name: "Aganta Ramadaanu", instagram: "@aganta7", tiktok: "@iniganta", niche: ["Random", "Comedy", "Skits"] },
    { image: creator8, close: creator8x, name: "Aisyah Putri", instagram: "@aisyahputri17", tiktok: "@aisyahwanitakalem", niche: ["Comedy"] },
    { image: creator9, close: creator9x, name: "Adhitya Putri", instagram: "@adhityaputri", tiktok: "@adhityaputri025", niche: ["Actress", "Family Content"] },
    { image: creator10, close: creator10x, name: "Ridwan Ghany", instagram: "@ridwanghany", tiktok: "@ridwanghany", niche: ["Actor", "Family Content"] },
    { image: creator11, close: creator11x, name: "Egi Haw", instagram: "@egiargians", tiktok: "@egiargianss", niche: ["Comedy", "Skits", "Parody"] },
    { image: creator12, close: creator12x, name: "Indira Berliana", instagram: "@indiraberl", tiktok: "@badjinkan", niche: ["Comedy", "Skits", "Parody"] },
    { image: creator13, close: creator13x, name: "Tabob", instagram: "@ttbobz", tiktok: "@ttbobz", niche: ["Comedy", "Skits", "Parody"] },
    { image: creator14, close: creator14x, name: "Makmur", instagram: "@makmuruluk", tiktok: "@makmuruluk", niche: ["Comedy", "Skits", "Parody"] },
    { image: creator15, close: creator15x, name: "Acim", instagram: "@hasimpesan", tiktok: "@acimmalaka", niche: ["Comedy", "Skits", "Parody"] },
    { image: creator16, close: creator16x, name: "Romi Alparizi", instagram: "@alprziiii", tiktok: "@alpariziiz", niche: ["Comedy", "Skits", "Prank"] },
    { image: creator17, close: creator17x, name: "Rizky Pahlevi", instagram: "@rizkypahleviii", tiktok: "@rizkypahleviii", niche: ["Actor", "Drama", "Comedy"] },
];

export default function CSPeopleSection() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedCreator, setSelectedCreator] = useState<any>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [dragWidth, setDragWidth] = useState(0);

    const generateWhatsAppLink = (name: string) => {
        const phone = "6281112003998";
        const message = `Halo, saya tertarik bekerja sama dengan talent ${name} dari CS People. Boleh minta informasi lebih lanjut?`;

        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    useEffect(() => {
        if (carouselRef.current && containerRef.current) {
            setDragWidth(
                carouselRef.current.scrollWidth -
                containerRef.current.offsetWidth
            );
        }
    }, []);

    return (
        <div className="w-full">

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6">

                {/* LEFT */}
                <motion.div className="bg-white rounded-3xl p-12 md:p-24 flex items-center justify-between h-auto md:h-90">
                    <div className="max-w-[90%]">
                        <h3 className="text-black font-semibold text-xl md:text-2xl italic leading-snug">
                            CS People connects brands with the right creators, building
                            authentic collaborations that drive engagement, influence,
                            and real impact.
                        </h3>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div className="bg-yellow-400 rounded-3xl p-8 flex flex-col justify-center items-center h-auto md:h-90 text-center">
                    <div className="max-w-[90%] flex flex-col gap-3">
                        <h2 className="text-3xl md:text-4xl font-extrabold">
                            TALENT MANAGEMENT
                        </h2>
                        <p className="text-base md:text-lg">
                            From creator partnerships to campaign execution, we manage talents
                            strategically to ensure every collaboration feels natural,
                            engaging, and results-driven.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div ref={containerRef} className="w-full overflow-hidden">

                {/* 🔥 CAROUSEL BACK */}
                <motion.div
                    ref={carouselRef}
                    drag="x"
                    dragConstraints={{ left: -dragWidth, right: 0 }}
                    className="flex gap-6 p-6 cursor-grab active:cursor-grabbing"
                >
                    {creators.map((creator, index) => (
                        <div
                            key={index}
                            className="min-w-60 bg-white rounded-2xl overflow-hidden shadow-md"
                        >
                            <div className="relative w-full h-96">
                                <Image
                                    src={creator.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="font-semibold text-sm">
                                    {creator.name}
                                </h3>

                                <button
                                    onClick={() => setSelectedCreator(creator)}
                                    className="mt-2 w-full bg-black text-white py-2 rounded-lg text-xs cursor-pointer"
                                >
                                    Show Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* 🔥 SLIDE PANEL */}
                <AnimatePresence>
                    {selectedCreator && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCreator(null)}
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            />

                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                                className="fixed top-0 right-0 h-full w-full md:w-175 bg-white z-50 shadow-2xl overflow-y-auto"
                            >
                                <button
                                    onClick={() => setSelectedCreator(null)}
                                    className="absolute top-4 right-4 text-xl"
                                >
                                    ✕
                                </button>

                                <div className="p-16 flex flex-col gap-6">

                                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                                        <Image
                                            src={selectedCreator.close}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h2 className="text-3xl font-extrabold">
                                        {selectedCreator.name}
                                    </h2>

                                    <p>Instagram: {selectedCreator.instagram}</p>
                                    <p>TikTok: {selectedCreator.tiktok}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {selectedCreator.niche.map((tag: string, i: number) => (
                                            <span key={i} className="text-xs px-3 py-1 bg-yellow-400 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => window.open(generateWhatsAppLink(selectedCreator.name), "_blank")}
                                        className="mt-2 w-full bg-black text-white py-4 rounded-xl text-md cursor-pointer"
                                    >
                                        Contact Talent
                                    </button>

                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}