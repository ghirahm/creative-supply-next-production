import type { Metadata } from "next";
import Link from "next/link";

import { site, address, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `How ${site.legalName} collects, uses and protects personal data.`,
    alternates: { canonical: "/privacy" },
};

// Update whenever the substance of this policy changes.
const LAST_UPDATED = "28 July 2026";

function Section({
    id,
    heading,
    children,
}: {
    id: string;
    heading: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="flex flex-col gap-3 scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-extrabold uppercase text-black">
                {heading}
            </h2>
            <div className="flex flex-col gap-3 text-black/75 leading-relaxed">
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPolicyPage() {
    return (
        <div className="w-full bg-(--color-primary) px-6 md:px-12 pt-36 pb-24">
            <div className="mx-auto max-w-3xl">

                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                    PRIVACY POLICY
                </h1>
                <p className="text-white/80 mb-10">Last updated: {LAST_UPDATED}</p>

                <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 flex flex-col gap-10">

                    <Section id="controller" heading="1. Who we are">
                        <p>
                            This website is operated by {site.legalName} (&ldquo;Creative
                            Supply&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a company
                            incorporated in Indonesia. We are the data controller
                            responsible for the personal data described in this policy.
                        </p>
                        <address className="not-italic">
                            <span className="block font-bold text-black uppercase">
                                {site.legalName}
                            </span>
                            {address.lines.map((line) => (
                                <span key={line} className="block">{line}</span>
                            ))}
                            <span className="block">{address.country}</span>
                        </address>
                        <p>
                            Email:{" "}
                            <a href={`mailto:${site.email}`} className="text-(--color-primary) hover:underline break-all">
                                {site.email}
                            </a>
                            <br />
                            WhatsApp:{" "}
                            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-(--color-primary) hover:underline">
                                {site.phoneDisplay}
                            </a>
                        </p>
                    </Section>

                    <Section id="collect" heading="2. What we collect">
                        <p>We only collect personal data that you choose to send us.</p>

                        <p className="font-bold text-black">Enquiries sent from this website</p>
                        <p>
                            The contact form asks for your name, email address and a
                            description of your project. This form does not submit to our
                            own server. When you press Submit, your browser opens WhatsApp
                            with those details written into a draft message, which you then
                            send yourself. We receive the information only once you send
                            that message, and it reaches us through WhatsApp.
                        </p>

                        <p className="font-bold text-black">Messages you send us</p>
                        <p>
                            If you contact us by WhatsApp or email, we receive the content
                            of your message together with the sender details your service
                            provides, such as your phone number, WhatsApp profile name or
                            email address. Where we use the WhatsApp Business Platform, the
                            messages are processed through WhatsApp on our behalf.
                        </p>

                        <p className="font-bold text-black">Job applications</p>
                        <p>
                            The career page opens an email draft addressed to us. Anything
                            you include, such as your CV, portfolio or work history, is
                            received by email and used only to assess your application.
                        </p>

                        <p className="font-bold text-black">Server logs</p>
                        <p>
                            Our web server records standard technical information for each
                            request, including your IP address, the date and time, the page
                            requested and your browser&rsquo;s user agent string. These logs
                            exist to keep the site running securely and are not used to
                            build a profile of you.
                        </p>
                    </Section>

                    <Section id="not-collect" heading="3. What we do not do">
                        <p>To be explicit about what this website does not do:</p>
                        <ul className="list-disc pl-5 flex flex-col gap-2">
                            <li>
                                It sets no cookies and stores nothing in your browser&rsquo;s
                                local or session storage.
                            </li>
                            <li>
                                It runs no analytics, advertising or tracking scripts, and no
                                third-party pixels.
                            </li>
                            <li>
                                It loads no third-party embeds. Fonts are served from our own
                                domain, so viewing a page does not contact any other company.
                            </li>
                            <li>
                                We never sell your personal data, and we do not share it for
                                anyone else&rsquo;s advertising.
                            </li>
                        </ul>
                        <p>
                            Because we use no cookies or tracking, this site shows no cookie
                            banner. Links to other services, such as WhatsApp, are only
                            followed when you click them.
                        </p>
                    </Section>

                    <Section id="purpose" heading="4. Why we use your data and on what basis">
                        <p>We use personal data to:</p>
                        <ul className="list-disc pl-5 flex flex-col gap-2">
                            <li>reply to your enquiry and discuss a possible project;</li>
                            <li>provide services and manage our working relationship;</li>
                            <li>assess job applications;</li>
                            <li>keep the website secure and diagnose faults;</li>
                            <li>meet our legal, tax and accounting obligations.</li>
                        </ul>
                        <p>
                            We rely on your consent when you send us an enquiry or an
                            application, on the performance of a contract when we work
                            together, on our legitimate interest in operating the site
                            securely, and on legal obligation where the law requires us to
                            keep records. Where we rely on consent, you may withdraw it at
                            any time.
                        </p>
                    </Section>

                    <Section id="sharing" heading="5. Who we share data with">
                        <p>
                            We do not sell or rent personal data. We share it only with
                            service providers who help us operate, and only as far as they
                            need it:
                        </p>
                        <ul className="list-disc pl-5 flex flex-col gap-2">
                            <li>
                                <span className="font-semibold text-black">
                                    WhatsApp / Meta Platforms
                                </span>{" "}
                                — carries messages between you and us. Your use of WhatsApp
                                is also governed by WhatsApp&rsquo;s own privacy policy.
                            </li>
                            <li>
                                <span className="font-semibold text-black">
                                    Our hosting and email providers
                                </span>{" "}
                                — store the website and the mailboxes that receive your
                                messages.
                            </li>
                            <li>
                                <span className="font-semibold text-black">
                                    Professional advisers and authorities
                                </span>{" "}
                                — where we are legally required to disclose information.
                            </li>
                        </ul>
                    </Section>

                    <Section id="transfer" heading="6. Transfers outside Indonesia">
                        <p>
                            Some of the providers above operate servers outside Indonesia,
                            so your data may be transferred and stored abroad. This applies
                            in particular to WhatsApp and Meta Platforms. When we make such
                            a transfer we take reasonable steps to confirm that the
                            receiving country or organisation provides an adequate level of
                            protection, or that appropriate safeguards are in place, as
                            required by Indonesian law.
                        </p>
                    </Section>

                    <Section id="retention" heading="7. How long we keep it">
                        <p>
                            We keep personal data only as long as we need it for the purpose
                            we collected it for. In practice: enquiry correspondence is kept
                            while we are in contact and for a reasonable period afterwards
                            in case you return to us; job applications are kept for the
                            duration of the recruitment process unless you agree to us
                            keeping them longer; server logs are kept for a short
                            operational period; and records we must retain for tax or
                            accounting reasons are kept for the period the law prescribes.
                            When data is no longer needed we delete it.
                        </p>
                    </Section>

                    <Section id="rights" heading="8. Your rights">
                        <p>
                            Under Indonesian personal data protection law, in particular
                            Law No. 27 of 2022 on Personal Data Protection, you have the
                            right to:
                        </p>
                        <ul className="list-disc pl-5 flex flex-col gap-2">
                            <li>be informed about how your data is used;</li>
                            <li>access the data we hold about you and obtain a copy;</li>
                            <li>have inaccurate or incomplete data corrected;</li>
                            <li>have your data deleted, where the law allows;</li>
                            <li>withdraw consent you previously gave;</li>
                            <li>object to or restrict certain processing;</li>
                            <li>
                                object to decisions made solely by automated means, including
                                profiling;
                            </li>
                            <li>
                                receive your data in a usable format and have it transmitted
                                to another controller where technically possible;
                            </li>
                            <li>seek redress for a breach of your rights.</li>
                        </ul>
                        <p>
                            To exercise any of these, email us at{" "}
                            <a href={`mailto:${site.email}`} className="text-(--color-primary) hover:underline break-all">
                                {site.email}
                            </a>
                            . We will respond within the period required by law. We may ask
                            you to confirm your identity first, so that we do not disclose
                            your data to someone else.
                        </p>
                    </Section>

                    <Section id="security" heading="9. Security">
                        <p>
                            This site is served over an encrypted HTTPS connection, and we
                            apply reasonable organisational and technical measures to
                            protect the data we hold, including limiting who can access it.
                            No method of transmission or storage is completely secure,
                            however, so we cannot guarantee absolute security. Please do not
                            send us sensitive information, such as identity document numbers
                            or financial details, through the contact form.
                        </p>
                    </Section>

                    <Section id="children" heading="10. Children">
                        <p>
                            Our services are directed at businesses and are not intended for
                            children. We do not knowingly collect personal data from
                            children. Where a child&rsquo;s data must be processed, we will
                            do so only with verified parental or guardian consent as
                            required by law. If you believe a child has given us personal
                            data, please contact us and we will delete it.
                        </p>
                    </Section>

                    <Section id="changes" heading="11. Changes to this policy">
                        <p>
                            We may update this policy as our services or the law change. The
                            date at the top shows when it was last revised, and the current
                            version is always available on this page. Where a change
                            materially affects you, we will take reasonable steps to tell
                            you.
                        </p>
                    </Section>

                    <Section id="contact" heading="12. How to contact us">
                        <p>
                            For any question about this policy or about how we handle your
                            personal data, contact {site.legalName} at{" "}
                            <a href={`mailto:${site.email}`} className="text-(--color-primary) hover:underline break-all">
                                {site.email}
                            </a>
                            , by WhatsApp on{" "}
                            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-(--color-primary) hover:underline">
                                {site.phoneDisplay}
                            </a>
                            , or by post at the address in section 1.
                        </p>
                        <p>
                            If you are not satisfied with our response, you may lodge a
                            complaint with the competent Indonesian personal data protection
                            authority.
                        </p>
                    </Section>

                    <div className="border-t border-black/10 pt-6">
                        <Link href="/contact" className="text-(--color-primary) font-semibold hover:underline">
                            Get in touch →
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
