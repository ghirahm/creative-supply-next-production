"use client";

export default function Showreels() {
    return (
        <section className="relative h-[200vh]">

            {/* STICKY VIDEO */}
            <div className="sticky top-0 h-screen flex items-center justify-center">

                <video
                    src="/showreel.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />

            </div>

        </section>
    );
}