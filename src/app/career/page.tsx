"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faBullhorn,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";

import { site } from "@/config/site";

const jobs = [
    {
        icon: faCode,
        title: "Creative Director",
        requirements: [
            "1+ years experience in creative or production leadership",
            "Strong storytelling and campaign development skills",
            "Ability to lead creative teams (design, video, content)",
            "Strong understanding of branding, visual direction, and trends",
        ],
    },
    {
        icon: faBullhorn,
        title: "HR Generalist",
        requirements: [
            "Experience in recruitment and employee management",
            "Strong interpersonal and communication skills",
            "Understanding of HR processes and labor regulations",
            "Ability to manage onboarding, engagement, and internal culture",
        ],
    },
    {
        icon: faVideo,
        title: "Personal Assistant",
        requirements: [
            "Excellent organizational and time management skills",
            "Strong communication and coordination abilities",
            "Able to handle scheduling, meetings, and daily operations",
            "Detail-oriented and able to work in a fast-paced environment",
        ],
    },
];

export default function CareerSection() {
    return (
        <div className="w-full pt-36 pb-24 px-6 bg-(--color-primary)">

            {/* TOP */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-20">

                {/* LEFT */}
                <h1 className="text-6xl md:text-8xl xl:text-9xl font-extrabold text-white">
                    JOIN US
                </h1>

                {/* RIGHT */}
                <div className="text-white space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                        We’re always on the lookout for talented individuals who share our
                        passion for bringing the best ideas to life. At Creative Supply,
                        we believe that to create extraordinary things, we need extraordinary
                        people.
                    </p>
                    <br />
                    <p>
                        Joining our team means becoming part of a dynamic and innovative
                        community where everyone is encouraged to contribute their ideas
                        and talents.
                    </p>
                </div>
            </div>

            {/* JOB CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-md hover:shadow-xl transition"
                    >
                        {/* ICON */}
                        <div className="w-12 h-12 flex items-center justify-center bg-(--color-primary) rounded-xl">
                            <FontAwesomeIcon icon={job.icon} className="text-white text-lg" />
                        </div>

                        {/* TITLE */}
                        <h3 className="text-lg font-semibold text-black">
                            {job.title}
                        </h3>

                        {/* REQUIREMENTS */}
                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                            {job.requirements.map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>

                        {/* BUTTON — opens an email draft prefilled with the role */}
                        <a
                            href={`mailto:${site.email}?subject=${encodeURIComponent(
                                `Application: ${job.title}`
                            )}`}
                            className="mt-4 w-full border border-(--color-primary) text-(--color-primary) text-sm font-medium py-2 rounded-lg hover:bg-(--color-primary) hover:text-white transition text-center"
                        >
                            Apply Now
                        </a>
                    </div>
                ))}

            </div>
        </div>
    );
}