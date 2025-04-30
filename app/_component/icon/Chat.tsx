export default function ChatSvg({className}: {className: string}) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V14C22 15.1046 21.1046 16 20 16H7.41421L4 19.4142V16H4C2.89543 16 2 15.1046 2 14V4ZM4 4V14H6V17.5858L9.58579 14H20V4H4Z" />
        </svg>
    )
}