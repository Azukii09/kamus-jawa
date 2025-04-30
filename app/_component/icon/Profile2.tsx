import React from 'react';

export default function Profile2({className}: { className: string}) {
    return (
        <svg
            className={`${className} fill-current`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z" />
            <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20H18C18 17.7909 15.3137 16 12 16C8.68629 16 6 17.7909 6 20H4Z" />
        </svg>
    );
}