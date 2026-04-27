import type { Metadata } from "next";

import "./globals.css";

// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Font
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: "Creative Supply Indonesia",
    description: "Creative Agency PT Kreatif Suplai Indonesia",
    keywords: "Creative Agency, Indonesia, Digital Marketing, Content Creator, Branding, Talent Management, Production House",
    creator: "PT Kreatif Suplai Indonesia",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
    icons: {
        icon: "/logo.ico",
        apple: "/logo.ico",
        shortcut: "/logo.ico"
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`} cz-shortcut-listen="true">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
