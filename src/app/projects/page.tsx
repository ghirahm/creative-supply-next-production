"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// sample images
import img1 from "@/assets/p1.png";
import img2 from "@/assets/p2.png";
import img3 from "@/assets/p3.png";
import img4 from "@/assets/p4.png";
import img5 from "@/assets/p5.png";
import img6 from "@/assets/p6.png";
import img7 from "@/assets/p7.png";
import img8 from "@/assets/p8.png";

const categories = [
    "ALL",
    "BEAUTY",
    "COMEDY",
    "E-COMMERCE",
    "F&B",
    "TECH",
    "MOVIE",
    "AUTOMOTIVE",
];

const projects = [
    {
        image: img1,
        category: "F&B",
        title: "Pop Mie Miso Ramen",
        kol: "Aldo Giustino",
        production: "CS Works",
        year: "2024",
        href: "/projects/fnb",
    },
    {
        image: img2,
        category: "TECH",
        title: "PUBG Mobile",
        kol: "Sofarsabi",
        production: "CS Works",
        year: "2025",
        href: "/projects/tech",
    },
    {
        image: img3,
        category: "BEAUTY",
        title: "Wardah Beauty",
        kol: "Leyla Aderina",
        production: "CS Works",
        year: "2025",
        href: "/projects/beauty",
    },
    {
        image: img4,
        category: "AUTOMOTIVE",
        title: "Honda Stylo Woman",
        kol: "CSWORKS",
        production: "CS Works",
        year: "2025",
        href: "/projects/automotive",
    },
    {
        image: img5,
        category: "F&B",
        title: "Chocolatos Drink",
        kol: "Caciliaaaaa",
        production: "CS Works",
        year: "2025",
        href: "/projects/fnb",
    },
    {
        image: img6,
        category: "E-COMMERCE",
        title: "Tiket.com Holiday Sale",
        kol: "Aldo Giustino",
        production: "CS Works",
        year: "2024",
        href: "/projects/e-commerce",
    },
    {
        image: img7,
        category: "COMEDY",
        title: "Gomu-Gomu no Lato-Lato",
        kol: "Sofarsabi",
        production: "CS Works",
        year: "2024",
        href: "/projects/comedy",
    },
    {
        image: img8,
        category: "MOVIE",
        title: "The Algorithm of Journey",
        kol: "Aldo Giustino & Leyla Aderina",
        production: "CS Works",
        year: "2025",
        href: "/projects/movie",
    },
];

export default function Projects() {
    const [active, setActive] = useState("ALL");

    const filtered =
        active === "ALL"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <div className="w-full bg-(--color-primary) py-24 px-6 relative overflow-hidden">

            {/* TITLE */}
            <div className="mb-12 text-center flex flex-col gap-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    SELECTED WORKS
                </h2>
                <p className="text-white/80 mx-auto text-sm md:text-base">
                    A collection of our latest productions across industries and platforms.
                </p>
            </div>

            {/* FILTER */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 relative z-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`text-sm font-semibold uppercase transition ${active === cat
                            ? "text-yellow-400"
                            : "text-white/60 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 relative z-10">
                {filtered.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <div className="relative w-full aspect-9/16 rounded-2xl overflow-hidden group cursor-pointer border-2 border-white">

                            {/* IMAGE */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* ✅ Cinematic Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition" />

                            {/* CONTENT */}
                            <div className="absolute bottom-4 left-3 right-3 flex flex-col gap-2">

                                {/* TITLE */}
                                <h3 className="text-white text-sm font-semibold leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
                                    {item.title}
                                </h3>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-2 text-[10px] text-white/90">

                                    <span className="bg-white/10 backdrop-blur px-2 py-0.5 rounded-full">
                                        {item.kol}
                                    </span>

                                    <span className="bg-white/10 backdrop-blur px-2 py-0.5 rounded-full">
                                        {item.production}
                                    </span>

                                    <span className="bg-white/10 backdrop-blur px-2 py-0.5 rounded-full">
                                        {item.year}
                                    </span>

                                </div>
                            </div>

                            {/* PLAY ICON */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-lg">
                                    ▶
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}