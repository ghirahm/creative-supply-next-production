import type { Metadata, Viewport } from "next";

import "./globals.css";

// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Site config
import { site } from "@/config/site";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
