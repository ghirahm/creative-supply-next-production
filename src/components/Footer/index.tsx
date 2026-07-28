import Link from "next/link";

// Import Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTiktok,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { site, activeSocials, type SocialKey } from "@/config/site";

const SOCIAL_ICONS: Record<SocialKey, IconDefinition> = {
    instagram: faInstagram,
    facebook: faFacebookF,
    linkedin: faLinkedinIn,
    tiktok: faTiktok,
    youtube: faYoutube,
};

const COMPANY_LINKS = [
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/career" },
    { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
    { label: "Creative Agency", href: "/service" },
    { label: "Talent Management", href: "/service" },
    { label: "Production House", href: "/service" },
];

export default function Footer() {
    const socials = activeSocials();
    const year = 2026;

    return (
        <footer>
            <div className='bg-(--color-tertiary) min-h-screen w-full z-30 text-black flex flex-col items-center justify-center relative px-6 py-16 md:p-24'>

                {/* TOP GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-24 w-full max-w-6xl">

                    {/* LEFT */}
                    <div className="flex flex-col gap-8">
                        {/* Brands */}
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="text-md text-black hover:underline">CREATIVE SUPPLY</Link>
                            <Link href="/projects" className="text-md text-black hover:underline">CSPEOPLE</Link>
                            <Link href="/projects" className="text-md text-black hover:underline">CSWORKS</Link>
                        </div>

                        {/* Social — only rendered for links configured in src/config/site.ts */}
                        {socials.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-black font-bold">Social</p>
                                <div className="flex gap-4 text-lg">
                                    {socials.map(([key, url]) => (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={key}
                                            className="hover:opacity-60 transition"
                                        >
                                            <FontAwesomeIcon icon={SOCIAL_ICONS[key]} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold">Services</h4>
                        <ul className="space-y-4 text-black/70">
                            {SERVICE_LINKS.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="hover:text-black">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold">Company</h4>
                        <ul className="space-y-4 text-black/70">
                            {COMPANY_LINKS.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="hover:text-black">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold">Get in touch</h4>
                        <ul className="space-y-4 text-black/70">
                            <li>
                                <a href={`mailto:${site.email}`} className="hover:text-black break-all">
                                    {site.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://wa.me/${site.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black"
                                >
                                    {site.phoneDisplay}
                                </a>
                            </li>
                            <li>{site.address}</li>
                        </ul>
                    </div>

                    {/* COLUMN 4 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold">Legal</h4>
                        <ul className="space-y-4 text-black/70">
                            <li>{site.legalName}</li>
                        </ul>
                    </div>
                </div>

                {/* BIG BACKGROUND TEXT */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none overflow-hidden">
                    <h2 className="text-[80px] md:text-[200px] font-extrabold text-black/5 leading-none whitespace-nowrap">
                        CREATIVE SUPPLY
                    </h2>
                </div>

                {/* BOTTOM BAR */}
                <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 mt-20 border-t border-black/10 pt-6">

                    <span className="text-sm text-black/60 text-center md:text-left">
                        © {year} Creative Supply. All rights reserved — {site.address}
                    </span>

                    <div className="flex gap-6 text-sm text-black/60">
                        <Link href="/contact" className="hover:text-black">Contact</Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}
