"use client";

import { useEffect, useRef, useState } from "react";

export default function Showreels() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    // The showreel is ~11 MB, so don't fetch it until the section is close to
    // the viewport. Until then the poster (28 KB) stands in for it, which looks
    // identical because the video is object-cover behind other content.
    useEffect(() => {
        const node = videoRef.current;
        if (!node) return;

        // Without IntersectionObserver, just load it.
        if (typeof IntersectionObserver === "undefined") {
            setShouldLoad(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    // Autoplay once the source is attached. Browsers can still refuse, so the
    // rejection is swallowed and the poster simply stays visible.
    useEffect(() => {
        if (!shouldLoad) return;
        const node = videoRef.current;
        if (!node) return;

        node.load();
        node.play().catch(() => { });
    }, [shouldLoad]);

    return (
        <section className="relative h-[200vh]">

            {/* STICKY VIDEO */}
            <div className="sticky top-0 h-screen flex items-center justify-center">

                <video
                    ref={videoRef}
                    src={shouldLoad ? "/video.mp4" : undefined}
                    poster="/video-poster.webp"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-label="Creative Supply showreel"
                    className="w-full h-full object-cover"
                />

            </div>

        </section>
    );
}
