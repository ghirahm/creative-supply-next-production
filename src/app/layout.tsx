import type { Metadata, Viewport } from "next";

import "./globals.css";

// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Site config
import { site, address } from "@/config/site";

// Font
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: "Creative Supply Indonesia",
        template: "%s | Creative Supply Indonesia",
    },
    description: "Creative Agency PT Kreatif Suplai Indonesia",
    keywords: "Creative Agency, Indonesia, Digital Marketing, Content Creator, Branding, Talent Management, Production House",
    creator: site.legalName,
    robots: "index, follow",
    other: {
        "facebook-domain-verification": "5d8j78jo71faoah0qgy7pyn7prmm1k",
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        siteName: site.name,
        title: "Creative Supply Indonesia",
        description: "Creative Agency PT Kreatif Suplai Indonesia",
        url: site.url,
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Creative Supply Indonesia",
        description: "Creative Agency PT Kreatif Suplai Indonesia",
    },
    icons: {
        icon: "/logo.ico",
        apple: "/logo.ico",
        shortcut: "/logo.ico"
    },
};

// `viewport` and `themeColor` must be their own export in Next 14+.
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#f1039d",
};

// Machine-readable business identity. Reviewers and crawlers checking that the
// site belongs to the registered entity (e.g. Meta / WhatsApp Business API
// verification) can read the legal name, address and contact details from here
// rather than inferring them from the page copy.
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: `+${site.whatsapp}`,
    address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.locality,
        addressRegion: address.region,
        addressCountry: "ID",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
