"use client";

import { useState } from "react";

import ServiceSection from "@/components/Service";
import CreativeSupplySection from "@/components/CreativeSupplySection";
import CSPeopleSection from "@/components/CSPeopleSection";
import CSWorksSection from "@/components/CSWorksSection";

const tabs = ["CREATIVE SUPPLY", "CSPEOPLE", "CSWORKS"];

export default function Service() {
    const [active, setActive] = useState(0);

    return (
        <div>
            <ServiceSection />
            <div className="w-full bg-(--color-primary) py-12">

                {/* Tabs Container */}
                <div className="w-full max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 bg-yellow-400 rounded-full p-1">

                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`rounded-full py-3 text-sm font-semibold transition-all duration-300 ${active === index
                                    ? "bg-(--color-primary) text-white shadow-md"
                                    : "text-black hover:bg-yellow-300"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}

                    </div>
                </div>

                {/* Content */}
                <div className="mt-10 w-full mx-auto">
                    {active === 0 && <CreativeSupplySection />}
                    {active === 1 && <CSPeopleSection />}
                    {active === 2 && <CSWorksSection />}
                </div>

            </div>
        </div>
    );
}