export default function ButtonOne({
    text,
    onClick,
}: {
    text: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="relative text-white bg-(--color-primary) w-fit p-3 border border-white rounded-full hover:border-b-4 transition-all cursor-pointer"
        >
            <span className="relative z-10 text-sm">{text}</span>
        </button>
    );
}