"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTiktok,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { site, activeSocials, whatsappLink, type SocialKey } from "@/config/site";

const SOCIAL_ICONS: Record<SocialKey, IconDefinition> = {
    instagram: faInstagram,
    facebook: faFacebookF,
    linkedin: faLinkedinIn,
    tiktok: faTiktok,
    youtube: faYoutube,
};

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState<Errors>({});

    const socials = activeSocials();

    const validate = (): Errors => {
        const next: Errors = {};
        if (!name.trim()) next.name = "Please tell us your name.";
        if (!email.trim()) {
            next.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            next.email = "That email doesn't look right.";
        }
        if (!message.trim()) next.message = "Tell us a bit about your project.";
        if (!consent) next.consent = "Please accept the Privacy Policy to continue.";
        return next;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const found = validate();
        setErrors(found);
        if (Object.keys(found).length > 0) return;

        // The site has no backend, so the enquiry is handed off to WhatsApp with
        // the form contents prefilled. Swap this for a POST to an API route or a
        // form service if email delivery is preferred later.
        const text = [
            `Hi ${site.name}, I'd like to discuss a project.`,
            "",
            `Name: ${name.trim()}`,
            `Email: ${email.trim()}`,
            "",
            "Project:",
            message.trim(),
        ].join("\n");

        window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    };

    return (
        <div className="w-full bg-(--color-primary) px-6 md:px-12 py-36">

            {/* TOP SECTION */}
            <div className="grid md:grid-cols-2 gap-16 mb-24 items-start">

                {/* LEFT */}
                <div className="text-white flex flex-col gap-8">

                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        CONTACT US
                    </h1>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p className="text-lg font-medium">{site.address}</p>
                        </div>

                        <a
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:underline"
                        >
                            <FontAwesomeIcon icon={faPhone} />
                            <span className="text-lg font-medium">{site.phoneDisplay}</span>
                        </a>

                        <a
                            href={`mailto:${site.email}`}
                            className="flex items-center gap-3 hover:underline"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="text-lg font-medium">{site.email}</span>
                        </a>

                    </div>

                    {/* SOCIAL — only rendered for links configured in src/config/site.ts */}
                    {socials.length > 0 && (
                        <div className="flex gap-4 pt-4">
                            {socials.map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={key}
                                    className="w-10 h-10 bg-white/20 flex items-center justify-center rounded hover:bg-white hover:text-(--color-primary) transition cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={SOCIAL_ICONS[key]} />
                                </a>
                            ))}
                        </div>
                    )}

                </div>

                {/* RIGHT (FORM) */}
                <div className="bg-white p-8 rounded-2xl shadow-md">
                    <h2 className="font-semibold mb-6 text-black">
                        Chat with us or fill out this form:
                    </h2>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                aria-invalid={Boolean(errors.name)}
                                className="border-b border-gray-300 py-2 outline-none text-black placeholder-gray-400 focus:border-(--color-primary)"
                            />
                            {errors.name && (
                                <span className="text-xs text-red-600">{errors.name}</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={Boolean(errors.email)}
                                className="border-b border-gray-300 py-2 outline-none text-black placeholder-gray-400 focus:border-(--color-primary)"
                            />
                            {errors.email && (
                                <span className="text-xs text-red-600">{errors.email}</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="sr-only">Describe your project</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Describe your project"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                aria-invalid={Boolean(errors.message)}
                                className="border-b border-gray-300 py-2 outline-none h-24 text-black placeholder-gray-400 focus:border-(--color-primary)"
                            />
                            {errors.message && (
                                <span className="text-xs text-red-600">{errors.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-500 flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={consent}
                                    onChange={(e) => setConsent(e.target.checked)}
                                />
                                By submitting, you agree to our Privacy Policy.
                            </label>
                            {errors.consent && (
                                <span className="text-xs text-red-600">{errors.consent}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-(--color-primary) text-white py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>

            {/* MAP SECTION */}
            <div className="flex flex-col gap-6 mb-24">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
                    HOW TO FIND US
                </h2>

                <div className="w-full h-75 md:h-100 rounded-2xl overflow-hidden">
                    <iframe
                        title={`Map to ${site.name}`}
                        src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-0"
                    />
                </div>
            </div>

        </div>
    );
}
