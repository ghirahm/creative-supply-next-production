// Single source of truth for contact details and social links.
// Fill in the social URLs below — components hide any link left empty,
// so an unfilled entry never ships as a dead link.

export const site = {
    name: "Creative Supply Indonesia",
    legalName: "PT Kreatif Suplai Indonesia",
    url: "https://creativesupply.id",
    email: "hello@creativesupply.id",
    // Digits only, international format without "+" — used to build wa.me links.
    // Keep these two in sync: same number, one machine-readable, one for display.
    whatsapp: "6281221492372",
    phoneDisplay: "+62 812-2149-2372",
} as const;

// Registered business address. Kept in parts so it can be rendered on its own
// lines, and as `full` for one-line contexts and structured data. This must
// match the address on the business registration used for Meta / WhatsApp
// Business API verification, so edit both forms together.
export const address = {
    street: "Bintara Raya No. 23, RT 001 / RW 019",
    locality: "Jakasampurna, Bekasi Barat",
    region: "Kota Bekasi, Jawa Barat",
    country: "Indonesia",
    lines: [
        "Bintara Raya No. 23, RT 001 / RW 019",
        "Jakasampurna, Bekasi Barat",
        "Kota Bekasi, Jawa Barat",
    ],
    full: "Bintara Raya No. 23, RT 001 / RW 019, Jakasampurna, Bekasi Barat, Kota Bekasi, Jawa Barat",
    short: "Kota Bekasi, Jawa Barat",
} as const;

export const socials = {
    instagram: "",
    facebook: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
} as const;

export type SocialKey = keyof typeof socials;

/** Social entries that actually have a URL configured. */
export function activeSocials() {
    return (Object.entries(socials) as [SocialKey, string][]).filter(
        ([, url]) => url.length > 0
    );
}

/** wa.me link with an optional prefilled message. */
export function whatsappLink(message?: string) {
    const base = `https://wa.me/${site.whatsapp}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
