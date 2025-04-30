import React from 'react';

export default function SoundSVG({
    className,
    bgColor
}: {
    className: string
    bgColor: string
}) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g clipPath="url(#clip0_15_174)">
                    <rect width="24" height="24" fill={bgColor}></rect>
                    <path d="M3 16V8H6L11 4V20L6 16H3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M13 9C13 9 15 9.5 15 12C15 14.5 13 15 13 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M15 7C15 7 18 7.83333 18 12C18 16.1667 15 17 15 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M17 5C17 5 21 6.16667 21 12C21 17.8333 17 19 17 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                    <clipPath id="clip0_15_174">
                        <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                </defs>
            </g>
        </svg>
    );
}