// Single source of truth for contact details and social links.
// Fill in the social URLs below — components hide any link left empty,
// so an unfilled entry never ships as a dead link.

export const site = {
    name: "Creative Supply Indonesia",
    legalName: "PT Kreatif Suplai Indonesia",
    url: "https://creativesupply.id",
    address: "East Jakarta, Indonesia",
    email: "hello@creativesupply.id",
    // Digits only, international format without "+" — used to build wa.me links.
    whatsapp: "6281112003998",
    phoneDisplay: "+62 811 1200 3998",
    // Google Maps embed query. Replace with the exact office address.
    mapQuery: "Creative Supply Indonesia, Jakarta Timur",
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
