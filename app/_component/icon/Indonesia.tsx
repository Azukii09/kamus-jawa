import React from 'react';

export default function IndonesiaSVG({className}: { className: string}) {
    return (
        <svg
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className={`${className} iconify iconify--twemoji`}
            preserveAspectRatio="xMidYMid meet"
            fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fill="#DC1F26" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"></path>
                <path fill="#EEE" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36v9z"></path>
            </g>
        </svg>
    );
}