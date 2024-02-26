import React from "react";

export const  EthereumLogo = React.memo(
    function EthereumLogo(props:React.ComponentProps<'svg'>) {
        return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#617DEA"/>
                <path d="M24.48 8.63977V19.4239L33.5945 23.4977L24.48 8.63977Z" fill="white" fillOpacity="0.6"/>
                <path d="M24.4796 8.63977L15.3599 23.4977L24.4796 19.4239V8.63977Z" fill="white"/>
                <path d="M24.48 30.488V37.8166L33.5998 25.1937L24.48 30.488Z" fill="white" fillOpacity="0.6"/>
                <path d="M24.4796 37.8167V30.4828L15.3599 25.199L24.4796 37.8167Z" fill="white"/>
                <path d="M24.48 28.7921L33.5945 23.5083L24.48 19.4345V28.7921Z" fill="white" fillOpacity="0.2"/>
                <path d="M15.3599 23.4977L24.4796 28.7814V19.4239L15.3599 23.4977Z" fill="white" fillOpacity="0.6"/>
            </svg>


        )
    }
)