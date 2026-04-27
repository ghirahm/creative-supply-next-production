"use client";

/* import Image from "next/image";

import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
    return (
        <div className="w-full bg-(--color-primary) px-12 py-36">

            {/* TOP SECTION */}
            <div className="grid md:grid-cols-2 gap-16 mb-24 items-start">

                {/* LEFT */}
                <div className="text-white flex flex-col gap-8">

                    <h1 className="text-5xl font-extrabold">
                        CONTACT US
                    </h1>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p className="text-lg font-medium">Jakarta, Indonesia</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faPhone} />
                            <p className="text-lg font-medium">+62 811 1200 3998</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className="text-lg font-medium">hello@creativesupply.id</p>
                        </div>

                    </div>

                    {/* SOCIAL */}
                    <div className="flex gap-4 pt-4">
                        <a className="w-10 h-10 bg-white/20 flex items-center justify-center rounded hover:bg-white hover:text-(--color-primary) transition cursor-pointer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>

                        <a className="w-10 h-10 bg-white/20 flex items-center justify-center rounded hover:bg-white hover:text-(--color-primary) transition cursor-pointer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>

                </div>

                {/* RIGHT (FORM) */}
                <div className="bg-white p-8 rounded-2xl shadow-md">
                    <h3 className="font-semibold mb-6 text-black">
                        Chat with us or fill out this form:
                    </h3>

                    <form className="flex flex-col gap-4">

                        <input
                            type="text"
                            placeholder="Name"
                            className="border-b border-gray-300 py-2 outline-none text-black placeholder-gray-400"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="border-b border-gray-300 py-2 outline-none text-black placeholder-gray-400"
                        />

                        <textarea
                            placeholder="Describe your project"
                            className="border-b border-gray-300 py-2 outline-none h-24 text-black placeholder-gray-400"
                        />

                        <label className="text-sm text-gray-500 flex gap-2 items-center">
                            <input type="checkbox" />
                            By submitting, you agree to our Privacy Policy.
                        </label>

                        <button className="mt-4 bg-(--color-primary) text-white py-3 rounded-lg hover:opacity-90 transition">
                            Submit
                        </button>
                    </form>
                </div>

            </div>

            {/* MAP SECTION */}
            <div className="flex flex-col gap-6 mb-24">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                    HOW TO FIND US
                </h2>

                <div className="w-full h-75 md:h-100 rounded-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=Creative Supply HQ&output=embed"
                        className="w-full h-full border-0"
                    />
                </div>
            </div>

            {/* GALLERY */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[img1, img2, img3].map((img, i) => (
                    <div
                        key={i}
                        className="relative w-full h-50 rounded-xl overflow-hidden"
                    >
                        <Image
                            src={img}
                            alt="office"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div> */}

        </div>
    );
}