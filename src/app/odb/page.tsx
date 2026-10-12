import type { Metadata } from "next";

import { site } from "@/config/site";

// Halaman produk ODB — untuk pendaftaran Claude Startup Program & publik.
// Copy dari draf index.html (Okt 2026), style mengikuti situs ini.
// CTA sengaja ke /login ODB (halaman publik), BUKAN root subdomain —
// root odb.creativesupply.id me-redirect guest balik ke halaman ini.
const ODB_LOGIN = "https://odb.creativesupply.id/login";

export const metadata: Metadata = {
    title: "ODB — AI-native ERP",
    description:
        "ODB is an AI-native personal ERP that adapts to any business model. Claude agents run the operations; people act as operators. Built by PT Kreatif Suplai Indonesia.",
    alternates: { canonical: "/odb" },
};

const STEPS = [
    { n: "01", title: "Capture", body: "Agents pick up incoming leads from channels like WhatsApp and log them into ODB automatically." },
    { n: "02", title: "Qualify & quote", body: "Leads are sorted, enriched and turned into draft quotations for the right business unit." },
    { n: "03", title: "Deliver", body: "Approved work becomes a project, with tasks, owners and status tracked in one place." },
    { n: "04", title: "Report", body: "Transactions are recorded and financial reports are produced without manual recap." },
];

const UNITS = [
    { name: "Talent management", unit: "CSPeople" },
    { name: "Video production", unit: "CSWorks" },
    { name: "Design & build", unit: "Rumaya" },
    { name: "F&B management", unit: "Food & beverage" },
    { name: "Studio", unit: "Farpixels" },
];

const AGENT_TASKS = [
    "Capture and log incoming leads",
    "Draft quotations and follow-ups",
    "Keep project status up to date",
    "Record transactions and prepare reports",
];

const TEAM_TASKS = [
    "Approve quotes and key decisions",
    "Handle client relationships",
    "Monitor and maintain the agents",
    "Focus on creative and strategic work",
];

export default function OdbPage() {
    return (
        <main className="bg-white text-[var(--color-black)]">
            {/* HERO — full-bleed primary, ala Hero halaman utama */}
            <div className="bg-(--color-primary)">
                <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 pb-24 pt-28 md:pb-32 md:pt-36">
                    <div className="w-fit rounded-full border border-[var(--color-white)] px-4 py-2">
                        <p className="text-xs font-semibold uppercase tracking-widest text-white md:text-sm">
                            ODB · One Day Better · Built on Claude
                        </p>
                    </div>
                    <h1 className="text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl xl:text-7xl">
                        The ERP that runs itself, and fits any business.
                    </h1>
                    <p className="max-w-2xl text-base text-white/90 md:text-lg">
                        ODB is an AI-native personal ERP. Instead of rigid modules, Claude agents run
                        day-to-day operations — leads, quotations, projects and finance — while your
                        team works as operators who review, decide and steer.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={ODB_LOGIN}
                            className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-black)] transition hover:opacity-85"
                        >
                            Open ODB
                        </a>
                        <a
                            href={`mailto:${site.email}?subject=ODB`}
                            className="rounded-full border border-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
                        >
                            Talk to us
                        </a>
                    </div>
                </section>
            </div>

            {/* HOW IT WORKS */}
            <section id="how" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
                <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
                    <h2 className="text-3xl font-extrabold uppercase md:text-4xl">How it works</h2>
                    <p className="max-w-xl text-black/70">
                        ODB follows the full path of the work, from the first message a client sends
                        to the moment the money is booked. Agents do the repetitive steps. People
                        step in where judgment matters.
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {STEPS.map((s) => (
                        <div key={s.n} className="rounded-2xl border border-black/10 p-6">
                            <p className="text-sm font-extrabold text-(--color-primary)">{s.n}</p>
                            <h3 className="mb-2 mt-3 text-xl font-extrabold uppercase">{s.title}</h3>
                            <p className="text-sm text-black/70">{s.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* AGENTS vs OPERATORS */}
            <section className="mx-auto w-full max-w-6xl border-t border-black/10 px-6 py-20 md:py-28">
                <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
                    <h2 className="text-3xl font-extrabold uppercase md:text-4xl">
                        AI does the work. People operate it.
                    </h2>
                    <p className="max-w-xl self-end text-black/70">
                        Most ERPs assume your business fits their modules. ODB starts from your
                        business model and lets agents adapt the workflow to it.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-[var(--color-black)] p-8 text-white">
                        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                            Claude agents
                        </p>
                        <h3 className="mb-4 mt-2 text-2xl font-extrabold uppercase">Run the operations</h3>
                        <ul className="divide-y divide-white/15 text-white/90">
                            {AGENT_TASKS.map((t) => (
                                <li key={t} className="py-3">{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-black/10 p-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                            Your team
                        </p>
                        <h3 className="mb-4 mt-2 text-2xl font-extrabold uppercase">Operate and decide</h3>
                        <ul className="divide-y divide-black/10 text-black/80">
                            {TEAM_TASKS.map((t) => (
                                <li key={t} className="py-3">{t}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROOF — 5 business units */}
            <section className="mx-auto w-full max-w-6xl border-t border-black/10 px-6 py-20 md:py-28">
                <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
                    <h2 className="text-3xl font-extrabold uppercase md:text-4xl">
                        Proven on five different businesses
                    </h2>
                    <p className="max-w-xl self-end text-black/70">
                        We built ODB to run our own group first. Each unit has a different business
                        model, which is exactly what ODB is designed for.
                    </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                    {UNITS.map((u) => (
                        <div key={u.unit} className="rounded-2xl bg-[color-mix(in_srgb,var(--color-tertiary)_15%,white)] p-5">
                            <p className="font-extrabold uppercase leading-tight">{u.name}</p>
                            <p className="text-sm text-black/60">{u.unit}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-black/10 p-6">
                    <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 flex-none rounded-full bg-[#2fa66a] shadow-[0_0_0_5px_rgba(47,166,106,0.2)]"
                    />
                    <p>
                        <b className="font-extrabold">Live in production:</b> a Claude agent runs
                        24/7, capturing client leads from WhatsApp straight into ODB.
                    </p>
                </div>
                {/* Screenshot dashboard: tampilkan saat filenya tersedia.
                    <img src="/odb/dashboard.png" alt="ODB dashboard" className="mt-6 w-full rounded-2xl border border-black/10" /> */}
            </section>

            {/* ABOUT */}
            <section className="mx-auto grid w-full max-w-6xl gap-8 border-t border-black/10 px-6 py-20 md:grid-cols-2 md:gap-12 md:py-28">
                <h2 className="text-3xl font-extrabold uppercase md:text-4xl">
                    Built by Creative Supply
                </h2>
                <div>
                    <p className="mb-4 text-black/70">
                        ODB is built by {site.legalName} (Creative Supply), a creative group based in
                        Bekasi, Indonesia. We started Creative Supply in 2023 and run it with a lean
                        team that leans on AI for operations.
                    </p>
                    <p className="mb-8 text-black/70">
                        ODB grew out of a simple question: what if a small team could run several
                        businesses by letting agents handle the operations?
                    </p>
                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10">
                        {[
                            ["Founded", "2023"],
                            ["Founder", "Gilang"],
                            ["Business units", "5"],
                            ["Built on", "Claude"],
                        ].map(([k, v]) => (
                            <div key={k} className="bg-white p-5">
                                <p className="text-xs uppercase tracking-widest text-black/50">{k}</p>
                                <p className="text-xl font-extrabold">{v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
