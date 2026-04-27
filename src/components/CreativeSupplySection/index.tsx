"use client";

import { motion } from "framer-motion";

export default function CreativeSupplySection() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* 1 */}
                <motion.div className="bg-white rounded-3xl p-24 flex items-center justify-between h-80 md:h-90">
                    <div className="max-w-[75%]">
                        <h3 className="text-black font-semibold text-xl italic leading-snug">
                            Creative Supply is a holding ecosystem that connects strategy,
                            talent, and production into one seamless creative force.
                        </h3>
                    </div>
                </motion.div>

                {/* 2 */}
                <motion.div className="bg-yellow-400 rounded-3xl p-8 flex flex-col justify-center items-center h-80 md:h-90">
                    <div className="max-w-[75%] gap-2 flex flex-col">
                        <h2 className="text-4xl text-center font-extrabold">
                            OUR APPROACH
                        </h2>
                        <p className="text-lg text-center">
                            We don’t just create content, we build integrated solutions where
                            ideas, creators, and execution work as one system.
                        </p>
                    </div>
                </motion.div>

                {/* 3 */}
                <motion.div className="bg-yellow-400 rounded-3xl p-8 flex flex-col justify-center items-center h-80 md:h-90">
                    <div className="max-w-[75%] gap-2 flex flex-col">
                        <h2 className="text-4xl text-center font-extrabold">
                            WHAT WE BUILD
                        </h2>
                        <p className="text-lg text-center">
                            From brand campaigns to large-scale productions, we craft experiences
                            that move audiences.
                        </p>
                    </div>
                </motion.div>

                {/* 4 */}
                <motion.div className="bg-white rounded-3xl p-8 flex items-center justify-center h-80 md:h-90">
                    <div className="text-center gap-2 flex flex-col">
                        <h2 className="text-4xl font-black leading-none">
                            CREATIVE
                            <br />
                            SUPPLY
                        </h2>
                        <p className="mt-4 text-md font-medium">
                            Creative Agency • Talent Management • Production House
                        </p>
                    </div>
                </motion.div>
            </div>


        </div>
    );
}