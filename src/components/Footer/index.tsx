// Next Hook
// Import Image from "next/image";
import Link from "next/link";

// Import Components
import Overline from '@/components/Overline';
import BlurText from '../BlurText';

// Import Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faDribbble, faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-(--color-primary)">
            <div className='sticky bg-(--color-primary) h-screen z-10 top-0 flex flex-col items-center p-36 text-white gap-12'>
                <Overline text="WE ARE DEEPLY DEDICATED TO" />

                <BlurText
                    text={"Turning collaborations into real, meaningful relationships"}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="font-extrabold text-4xl md:text-6xl xl:text-8xl text-center uppercase"
                />

                <Link href="/contact">
                    <button className="relative text-white border border-white px-10 py-6 rounded-3xl hover:border-b-8 hover:border-r-8 transition-all cursor-pointer">
                        <span className="font-extrabold text-3xl md:text-5xl uppercase">
                            Be Our Partner
                        </span>
                    </button>
                </Link>
            </div>
            <div className='bg-white h-screen z-0 sticky top-0'></div>

            <div className='bg-(--color-tertiary) h-screen w-full z-30 text-black flex flex-col items-center justify-center relative p-24'>

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-24">

                    {/* LEFT */}
                    <div className="flex flex-col gap-8">
                        {/* Language */}
                        <div className="flex flex-col gap-4">
                            <p className="text-md text-black hover:underline">CREATIVE SUPPLY</p>
                            <p className="text-md text-black hover:underline">CSPEOPLE</p>
                            <p className="text-md text-black hover:underline">CSWORKS</p>
                        </div>

                        {/* Social */}
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-black font-bold">Social</p>
                            <div className="flex gap-4 text-lg">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faDiscord} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faGithub} />
                                <FontAwesomeIcon icon={faDribbble} />
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold">Services</h4>
                        <ul className="space-y-4 text-black/70">
                            <li className="hover:text-black cursor-pointer">Creative Agency</li>
                            <li className="hover:text-black cursor-pointer">Talent Management</li>
                            <li className="hover:text-black cursor-pointer">Production House</li>
                        </ul>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold">Company</h4>
                        <ul className="space-y-4 text-black/70">
                            <li className="hover:text-black cursor-pointer">Projects</li>
                            <li className="hover:text-black cursor-pointer">Careers</li>
                            <li className="hover:text-black cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold">Resources</h4>
                        <ul className="space-y-4 text-black/70">
                            <li className="hover:text-black cursor-pointer">Blog</li>
                            <li className="hover:text-black cursor-pointer">Case Study</li>
                            <li className="hover:text-black cursor-pointer">Support</li>
                        </ul>
                    </div>

                    {/* COLUMN 4 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold">Legal</h4>
                        <ul className="space-y-4 text-black/70">
                            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-black cursor-pointer">Terms of Service</li>
                            <li className="hover:text-black cursor-pointer">Cookie Policy</li>
                        </ul>
                    </div>
                </div>

                {/* BIG BACKGROUND TEXT */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none overflow-hidden">
                    <h1 className="text-[140px] md:text-[200px] font-extrabold text-black/5 leading-none whitespace-nowrap">
                        CREATIVE SUPPLY
                    </h1>
                </div>

                {/* BOTTOM BAR */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 mt-20 border-t border-black/10 pt-6">

                    <span className="text-sm text-black/60 text-center md:text-left">
                        © 2026 Creative Supply. All rights reserved — East Jakarta, ID
                    </span>

                    <div className="flex gap-6 text-sm text-black/60">
                        <span className="hover:text-black cursor-pointer">Privacy</span>
                        <span className="hover:text-black cursor-pointer">Terms</span>
                        <span className="hover:text-black cursor-pointer">Contact</span>
                    </div>

                </div>
            </div>
        </footer>
    )
}