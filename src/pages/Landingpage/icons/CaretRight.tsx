import React from 'react'

export const CaretRight = React.memo<{className}>(({className})=>{
    return (
        <svg  width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} fill-rule="evenodd" clipRule="evenodd" d="M0.706386 1.03215C1.35105 0.427781 2.36358 0.460443 2.96795 1.1051L14.9679 13.9051C15.5449 14.5206 15.5449 15.4783 14.9679 16.0937L2.96795 28.8937C2.36358 29.5384 1.35104 29.571 0.706383 28.9667C0.0617233 28.3623 0.0290609 27.3498 0.633429 26.7051L11.6075 14.9994L0.633432 3.29371C0.0290637 2.64905 0.0617263 1.63652 0.706386 1.03215Z" fill="#48E59B"/>
        </svg>

    )

},(p,c)=>p.className===c.className)