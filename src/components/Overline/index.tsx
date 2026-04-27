export default function Overline({ text }: { text: string }) {
    return (
        <div className="w-fit border rounded-full py-2 px-4 border-[var(--color-white)]">
            <h2 className="text-[var(--color-white)]">{text}</h2>
        </div>
    );
}