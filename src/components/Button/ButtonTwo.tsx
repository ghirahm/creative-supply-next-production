// Import Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ButtonTwo({ text, onClick }: { text: string; onClick?: () => void }) {
    return (
        <button
            className="border border-black w-fit rounded-full py-2 px-4 text-(--text-tertiary) font-bold flex items-center gap-2 group cursor-pointer transition-all duration-300"
            onClick={onClick}
        >
            <h2 className="font-bold text-black">
                {text}
            </h2>
            <FontAwesomeIcon icon={faArrowRight} className="size-6 transform group-hover:translate-x-2 ease-in-out duration-300"></FontAwesomeIcon>
        </button>
    )

}