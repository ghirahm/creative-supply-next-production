import type { MetadataRoute } from "next";

import { site } from "@/config/site";

const ROUTES = [
    { path: "/", priority: 1 },
    { path: "/service", priority: 0.8 },
    { path: "/projects", priority: 0.8 },
    { path: "/career", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return ROUTES.map(({ path, priority }) => ({
        url: `${site.url}${path}`,
        changeFrequency: "monthly",
        priority,
    }));
}
