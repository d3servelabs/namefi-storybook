import React, { CSSProperties } from 'react'

export type UserAuthStateButtonProps = Partial<{
    children;
    authStateLogo;
    rightArrowImg;
    onClick: () => any;
    backgroundColor?: any
}>
export const UserAuthStateButton = ({children, backgroundColor, onClick, authStateLogo, rightArrowImg}: UserAuthStateButtonProps) => {
  return (
    <button
    onClick={onClick}
        type='button'
        className="relative flex items-center justify-between gap-3 rounded-[32px] p-[8px] bg-[#111] h-[60px]"
        style={
        {backgroundColor}
        }>
        <div className="block w-[48px] min-w-[48px] h-[48px] bg-[#7d7d7d] rounded-full ">
            {authStateLogo}
        </div>
        <p className="text-white text-base font-medium font-['Roboto_Mono']">{children}</p>
        {rightArrowImg}
    </button>
  )
}
