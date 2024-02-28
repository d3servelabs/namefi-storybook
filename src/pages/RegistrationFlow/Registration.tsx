import { Button } from '../../components/Core/Buttons/Button'
import { Checkbox } from '../../components/Core/Checkbox'
import React, { useMemo } from 'react'
import { ProcessingOrders } from './ProcessingOrders'

export type CartProps = {
    checkedOut?: boolean
    isConnectWalletError?: boolean
    signInError?: boolean
    isConnectWallet?: boolean
}

export const Cart = ({checkedOut, signInError, ...props}: CartProps) => {

    const isConnectWallet = useMemo(() => 
        checkedOut && props.isConnectWallet
    , [checkedOut, props.isConnectWallet])

    const isConnectWalletError = useMemo(() => 
        checkedOut && props.isConnectWalletError
    , [checkedOut, props.isConnectWalletError])
  return (
    <>
        { isConnectWallet ?
            <ProcessingOrders /> :
            
            <div className='relative flex flex-col gap-9 items-center  '>
                <div className='relative w-[500px] flex flex-col gap-8'>
                    <div className='relative w-full flex flex-col gap-12'>
                        <div className='relative flex items-center gap-5 '>
                            <img className='w-12' src="/assets/cart1.svg" alt="cart image" />
                            <p className='font-semibold text-xl tracking-wider text-white '>Your cart</p>
                        </div>
                        <div className='relative w-full flex flex-col gap-9'>
                            <div className='relative w-full flex justify-between'>
                                <div className='w-[120px] h-[120px] bg-brand-black rounded-lg drop-shadow-[0_2px_4px_rgba(202,202,202,0.25)] flex justify-center items-center'>
                                    <p className='font-bold text-xs tracking-widest text-white'>Example.com</p>
                                </div>
                                <div className='w-[332px] flex justify-between items-start text-white font-primary font-normal '>
                                    <div className='min-w-[109px] flex flex-col gap-2  '>
                                        <p>Example.com</p>
                                        <p>1 Year</p>
                                    </div>
                                    <div className='relative flex gap-6 items-center '>
                                        <p className='flex gap-3 text-sm tracking-[0.02em]  '>
                                            <span>20</span>
                                            <span>$NFSC</span>
                                        </p>
                                        <button>
                                            <img src="/assets/delete.svg" alt="delete image" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='relative  w-full flex flex-col justify-end items-end gap-3 pt-4
                                before:absolute
                                before:h-[1.5px]
                                before:w-full
                                before:left-0
                                before:top-0
                                before:bg-border-500'>
                                <div className='flex items-center gap-3 font-normal text-sm teacking-wider text-white'>
                                    <p className=' '>Total:</p>
                                    <div className='flex items-center gap-2 pr-5'>
                                        <img src="/assets/token-icon.svg" alt="token-icon image" />
                                        <p className='text-lg'>20. <span className='text-sm'>00</span></p>
                                    </div>
                                    <p className='font-primary'>$NFSC</p>
                                </div>
                                {
                                    !checkedOut && 
                                        <div className='relative flex items-center gap-3 font-normal text-sm teacking-wider text-white'>
                                            <p className=' text-primary-500 '>Available Credits:</p>
                                            <div className='flex items-center gap-2 pr-5'>
                                                <img src="/assets/token-icon.svg" alt="token-icon image" />
                                                <p className='text-lg'>20. <span className='text-sm'>00</span></p>
                                            </div>
                                            <p className='font-primary'>$NFSC</p>
                                        </div>
                                }
                            </div>
                            { isConnectWalletError &&
                                <div className='relative w-full flex justify-end pr-24'>
                                    <p className='font-normal font-primary text-warning text-xs '>Failed to connect wallet, please try again.</p>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        !checkedOut && 
                            <div className='relative w-full flex items-center justify-end'>
                                <div className='relative flex items-center gap-3 '>
                                    <Checkbox />
                                    <p className='font-primary text-white font-normal text-xs  '>
                                        I agree to the   
                                        <a className='underline' 
                                        href="#"> terms and conditions</a>
                                    </p>
                                </div>
                            </div>
                    }
                </div>

                <div className='relative w-[500px] h-12 flex justify-between items-center'>
                    <a href="#"
                        className='block flex items-center gap-2.5'>
                        <img 
                            className='w-4' 
                            src="/assets/arrow-left.svg" alt="arrow-left" />
                        <span className='font-normal text-[16px] tracking-wider font-normal text-[16px] tracking-wider text-brand-300 '>Back</span>
                    </a>
                    <Button 
                        img={ <img className='w-4' src={checkedOut ? '/assets/arrow-right1.svg':'/assets/dark-right-arrow.svg'} alt='dark-right-arrow' /> }
                        borderWidth={checkedOut ? '1.5px' : '0'}
                        color={checkedOut? '' : '#232C27'}
                        backgroundColor={checkedOut ? '' : '#48e59bcc'}
                    >{checkedOut ? 'Connect Wallet': 'Check out'}
                    </Button>
                </div>
            </div>
        
        }
    </>
  )
}
