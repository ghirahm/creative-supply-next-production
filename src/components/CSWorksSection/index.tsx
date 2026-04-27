"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTv,
    faVideo,
    faBullhorn,
    faClapperboard,
    faFilm,
    faLightbulb,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

const works = [
    {
        icon: faTv,
        title: "Television Commercial",
        description:
            "High-end TVC production crafted with cinematic storytelling and premium visual execution.",
    },
    {
        icon: faVideo,
        title: "Digital Content Production",
        description:
            "Engaging video content tailored for digital platforms, built to capture attention and drive engagement.",
    },
    {
        icon: faBullhorn,
        title: "Performance Creative",
        description:
            "Strategic and creative assets optimized for performance-driven digital campaigns across platforms.",
    },
    {
        icon: faClapperboard,
        title: "Branded Series",
        description:
            "Episodic storytelling formats designed to build audience connection and long-term brand engagement.",
    },
    {
        icon: faFilm,
        title: "Post Production",
        description:
            "End-to-end editing, color grading, sound design, and finishing to deliver polished, high-quality outputs.",
    },
    {
        icon: faLightbulb,
        title: "Creative Development",
        description:
            "From concept ideation to storytelling direction, we craft strong creative foundations for impactful productions.",
    },
];

export default function CSWorksSection() {
    const generateWhatsAppLink = (workTitle: string) => {
        const phone = "6281112003998";
        const message = `Halo, saya tertarik bekerja sama dengan CS Works. Boleh minta informasi lebih lanjut tentang ${workTitle}?`;

        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };
    return (
        <div className="w-full">

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6">

                {/* LEFT */}
                <motion.div className="bg-white rounded-3xl p-12 md:p-24 flex items-center justify-between h-auto md:h-90">
                    <div className="max-w-[90%]">
                        <h3 className="text-black font-semibold text-xl md:text-2xl italic leading-snug">
                            CS Works delivers high-quality productions that transform
                            ideas into impactful visual experiences.
                        </h3>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div className="bg-yellow-400 rounded-3xl p-8 flex flex-col justify-center items-center h-auto md:h-90 text-center">
                    <div className="max-w-[90%] flex flex-col gap-3">
                        <h2 className="text-3xl md:text-4xl font-extrabold">
                            PRODUCTION HOUSE
                        </h2>
                        <p className="text-base md:text-lg">
                            From TVC and digital campaigns to branded series, we execute
                            end-to-end productions that deliver both creative excellence
                            and measurable impact.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12">

                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-white rounded-3xl p-8 flex flex-col gap-4 shadow-md hover:shadow-xl transition-all"
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-xl">
                            <FontAwesomeIcon
                                icon={work.icon}
                                className="text-black text-xl"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold">
                            {work.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {work.description}
                        </p>
                        <button
                            onClick={() => window.open(generateWhatsAppLink(work.title), "_blank")}
                            className="mt-2 w-full bg-black text-white py-2 rounded-xl text-md cursor-pointer flex items-center justify-center gap-2"
                        >
                            <FontAwesomeIcon icon={faPhone} className="text-sm" />
                            Start a Conversation
                        </button>
                    </motion.div>
                ))}

            </div>
        </div>
    );
}