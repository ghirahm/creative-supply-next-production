export default function ButtonOne({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <button
            className="relative flex h-fit w-fit items-center justify-center py-2 px-4 text-white bg-(--color-secondary) rounded-full overflow-hidden border-2 border-(--color-secondary) hover:before:bg-(--color-primary) transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-(--color-primary) before:duration-500 before:ease-out hover:shadow-(--color-primary) hover:before:h-56 hover:before:w-56 before:transition-all hover:text-white cursor-pointer"
            onClick={onClick}
        >
            <span className="relative z-10 text-sm uppercase">{text}</span>
        </button>
    );
};
