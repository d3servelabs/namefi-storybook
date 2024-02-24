import React from 'react';

export default function BaseLayoutFooterLink({children, href}) {
    return (
        <a
            href={href}
            className="block opacity-80 text-neutral-300 text-lg font-normal font-['Roboto'] leading-[28.80px] tracking-tight">
            {children}
        </a>
    );
}