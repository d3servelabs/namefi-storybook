import { CropIcon } from '@radix-ui/react-icons'
import React from 'react'

export const WhoisINfoForm = () => {
  return (
    <div className='w-full h-[340px] flex flex-col justify-center items-center rounded-5 bg-brand-black rounded-2xl '>
        <form className='w-[493px] h-[284px] flex flex-col items-end gap-4 text-sm text-white font-normal tracking-wider'>
            <div className='flex gap-5  '>
                <label className=' flex items-center w-[237px] '>
                    <p className='text-black-500 tracking-wider w-[150px] font-normal text-sm '>First Name</p>
                    <input
                        className='outline-none bg-[#232C27] min-w-[150px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="text" placeholder='Vitalik' />
                </label>
                <label className=' flex items-center w-[237px] '>
                    <p className='text-black-500 tracking-wider w-[150px] font-normal text-sm '>Last Name</p>
                    <input
                        className='outline-none bg-[#232C27] min-w-[150px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="text" placeholder='BUterin' />
                </label>
            </div>
            <div>
                <label className='flex items-center gap-6'>
                    <p className='text-black-500'>Email</p>
                    <input
                        className='outline-none bg-[#232C27] w-[280px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="email" placeholder='@gmail.com' />
                    <p className='text-[#FEF556CC] flex items-center gap-2'><img src="/assets/x-shape.svg" alt="x-shape" /> Not Verified</p>
                </label>
            </div>
            <div className='pr-[122px]'>
                <label className='flex items-center gap-3'>
                    <p className='text-black-500'>Phone</p>
                    <input
                        className='outline-none bg-[#232C27] w-[90px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="number" placeholder='+1' />
                        <input
                        className='outline-none bg-[#232C27] w-[182px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="number" placeholder='(0) xxx-xxx-xxx' />
                </label>
            </div>
            <div className='flex gap-7'>
                <label className='flex items-center gap-3'>
                    <p className='text-black-500'>Street</p>
                    <input
                        className='outline-none bg-[#232C27] w-[235px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="text" placeholder='Street' />
                </label>
                <label className='flex items-center gap-3'>
                    <p className='text-black-500'>Number</p>
                    <input
                        className='outline-none bg-[#232C27] w-[75px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="number" placeholder='xx' />
                </label>
            </div>
            <div className='flex gap-8'>
                <label className='flex items-center gap-3'>
                    <p className='text-black-500'>City</p>
                    <input
                        className='outline-none bg-[#232C27] w-[150px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="text" placeholder='New York' />
                </label>
                <label className='flex items-center gap-3'>
                    <p className='text-black-500'>Province/State</p>
                    <input
                        className='outline-none bg-[#232C27] w-[110px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="text" placeholder='xx' />
                </label>
            </div>
            <div className='flex gap-[84px]'>
                <label className='flex items-center gap-3'>
                    <p className='text-black-500'>Post Code</p>
                    <input
                        className='outline-none bg-[#232C27] w-[100px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="number" placeholder='xxxx xx' />
                </label>
                <label className='flex items-center gap-3'>
                    <p className='text-black-500'>Country</p>
                    <input
                        className='outline-none bg-[#232C27] w-[159px] py-2 px-3 placeholder:text-[#797979] rounded-md ' 
                        type="text" placeholder='United State' />
                </label>
            </div>
        </form>
    </div>
  )
}
