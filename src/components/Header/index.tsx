"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Assets Import
import Logo from '../../assets/logo.webp';

// Import Component
import { ButtonOne } from "../Button";

// Import Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Import Motion
import { useAnimation, motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "Service", href: "/service" },
    { label: "Projects", href: "/projects" },
    { label: "Career", href: "/career" },
] as const;

export default function Header() {
    const controls = useAnimation();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                controls.start({ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", padding: "12px 0", backgroundColor: "var(--color-primary)" });
            } else {
                controls.start({ boxShadow: "none", padding: "8px 0", backgroundColor: "transparent" });
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    // Close the drawer whenever the route changes.
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Lock background scrolling while the drawer is open, and allow Esc to close.
    useEffect(() => {
        if (!menuOpen) return;

        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [menuOpen]);

    return (
        <header className="w-full h-auto flex flex-col px-4 lg:px-14 z-50 fixed top-4 text-white uppercase font-bold">
            <motion.nav
                animate={controls}
                className="w-full mx-auto flex items-center justify-between rounded-full px-4 py-2 relative bg-(--color-primary)">

                {/* LEFT: LOGO + INLINE LINKS */}
                <ul className="flex items-center gap-5 xl:gap-10 md:ml-10 text-lg">
                    <li>
                        <Link href="/" aria-label="Creative Supply home">
                            <Image
                                src={Logo}
                                alt="Creative Supply"
                                width={32}
                                height={32}
                                priority
                                className="h-8 w-auto cursor-pointer transition-transform duration-300 hover:rotate-12"
                            />
                        </Link>
                    </li>

                    {NAV_LINKS.slice(0, 2).map((item) => (
                        <li key={item.href} className="hidden md:block">
                            <Link
                                className="cursor-pointer overflow-hidden h-6 block"
                                href={item.href}
                            >
                                <div className="relative h-12 w-full flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-6 text-sm">
                                    <p className="h-6 flex items-center justify-center w-full">{item.label}</p>
                                    <p className="h-6 flex items-center justify-center w-full">{item.label}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* RIGHT: DESKTOP CAREER + CTA */}
                <ul className="hidden xl:flex items-center gap-10 mr-10 text-lg">
                    <li>
                        <Link
                            className="cursor-pointer overflow-hidden h-6 block"
                            href="/career"
                        >
                            <div className="relative h-12 w-full flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-6 text-sm">
                                <p className="h-6 flex items-center justify-center w-full">Career</p>
                                <p className="h-6 flex items-center justify-center w-full">Career</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <ButtonOne text="Be Our Partner" />
                        </Link>
                    </li>
                </ul>

                {/* HAMBURGER (below xl) */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    className="xl:hidden mr-2 flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/20 cursor-pointer"
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-xl" />
                </button>
            </motion.nav>

            {/* MOBILE DRAWER */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            className="xl:hidden fixed inset-0 -z-10 bg-black/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                        />

                        <motion.div
                            id="mobile-menu"
                            className="xl:hidden mt-3 rounded-3xl bg-(--color-primary) p-6 shadow-xl"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <ul className="flex flex-col gap-5 text-base">
                                {NAV_LINKS.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="block py-1 transition hover:opacity-70"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="pt-2">
                                    <Link href="/contact">
                                        <ButtonOne text="Be Our Partner" />
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
