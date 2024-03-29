import React from 'react'
import CartIcon from "../../Core/icons/CartIcon";
import CustomLoader from "../../Core/icons/CustomLoader";

export const ProcessingOrders = () => {
  return (
    <div className='relative flex flex-col justify-center items-center gap-9 '>
        <div className='relative flex gap-5 items-center'>
            <CartIcon className={'h-10'}/>

            <div className='relative flex flex-col gap-3 tracking-wider'>
                <p className='font-semibold text-white text-xl'>Processing your order </p>
                <p className='font-normal text-brand-300 text-sm'>Please wait a sec...</p>
            </div>
        </div>
        <div className='relative w-[120px] h-[120px]  '>
            <CustomLoader
                firstPath={{className: 'animate-[spin_2s_ease-in-out_infinite] origin-center'}}
                secondPath={{className: 'animate-[spin_3s_ease-in-out_infinite_reverse] origin-center'}}
            />
        </div>
    </div>
  )
}
