import React, { useRef, useState } from 'react'
export const Home = () => {

    const [isVisible, setIsVisible] = useState(false)

    const pswdRef = useRef<HTMLInputElement>(null!)

    function checkPassword() {
        if (pswdRef.current.type === 'password') {
            pswdRef.current.type = 'text'
        } else{
            pswdRef.current.type = 'password'
        }
        setIsVisible(!isVisible)
    }
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-20'>
          <div className='relative rounded-[20px] p-6 bg-black flex flex-col justify-between items-center w-[400px] h-[400px] rounded-[20px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]'>
              <div className='flex w-full h-[30px] items-center justify-between'>
                  <img className='w-[163px]' src="/assets/namefiapp.svg" alt="namefiapp img" role='img' />
                  <button className='relative block'>
                      <img className='w-[30px]' src="/assets/Gear.svg" alt="Gear image" role='img' />
                  </button>
              </div>
              <h3 className='text-white font-semibold text-[28px] tracking-[0.1em]'>namefi.com</h3>
              <div className='w-full h-[36px] flex justify-between '>
                  <div className='w-[106px] h-full '>
                      <p className='text-[#acacac] text-xs tracking-[0.1em] '>Owned by</p>
                      <p className='text-[#ededed] text-sm tracking-[0.1em] '>0x3923...d9s3</p>
                  </div>
                  <div className='w-[150px] h-full flex items-center justify-between '>
                    <img className='w-[36.75px]' src="/assets/lock.svg" alt="lock image" role='img' />
                      <div className='w-[99px]'>
                        <p className='text-[#acacac] text-[11px] font-bold tracking-[0.1em] '>Expires on</p>
                        <p className='text-[#ededed] text-sm font-bold tracking-[0.1em] '>Mar 01 2025</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='relative flex justify-between w-[613px] h-[472px] pt-7 pl-10 rounded-[20px] bg-[#232C27] '>
                <div className='w-[240px] h-[399px] flex flex-col justify-between '>
                    <div className='w-full h-[282px] flex flex-col justify-between '>
                        <p className='font-semibold text-lg tracking-[0.05em] text-white'>Transfer</p>
                        <div className='w-full h-[226px] flex flex-col justify-between items-center'>
                            <div className='w-[120px] h-[152px] flex flex-col items-center justify-end gap-[30px] '>
                                <img src="/assets/locks.svg" alt="lock image" role='img' />
                                <button className='w-[90px] h-[32px] rounded-[54px] bg-[#111] text-white text-[12px] font-normal font-["Roboto_Mono"] '>Transfer</button>
                            </div>
                            <div className='h-[32px] w-full flex flex-col justify-between'>
                                <p className='font-medium text-sm tracking-[0.05em] text-[#48E59B] '>NFT Lock</p>
                                <p className='font-normal text-[11px] text-[#C6EEDB] '>EPP Lock needs to stay on to change NFT Lock.</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[81px] flex flex-col justify-between '>
                        <p className='text-sm font-medium tracking-[0.05em] text-[#48E59B] '>Auth-Code</p>
                        <form className='relative w-full h-[55px] bg-[#313131] rounded-[10px] px-[10px] '>
                            <label className='w-full h-full'>
                                <input ref={pswdRef} type="password" className='w-[80%] h-full outline-0 bg-inherit text-[15px] font-["Roboto_Mono"] font-medium tracking-[0.02em] text-white' placeholder='****************'  />
                            </label>
                            <button onClick={checkPassword} className='absolute right-5 top-[17px] ' type='button'>
                                {
                                    isVisible ? <img src="/assets/show-password.svg" alt="Eye image" role='img' />:
                                    <img src="/assets/Eye.svg" alt="Eye image" role='img' />
                                }
                            </button>
                        </form>
                    </div>
                </div>
                <div className='relative w-[304px] h-[399px] items-center flex flex-col justify-between items-start
                before:absolute
                before:w-[1px]
                before:h-[100%]
                before:bg-[#C6EEDB]
                before:left-0
                before:bottom-0'>
                    <div className='w-[240px] h-[365px] flex flex-col justify-between '>
                        <div className='w-full h-[199px] flex flex-col justify-between '>
                            <p className='text-white font-semibold text-[16px] tracking-[0.05em] '>Ownership</p>
                            <div className='w-full h-[80px] rounded-[10px] bg-[#111] flex justify-start items-center pl-[12px] '>
                                <div className='w-[173px] h-[48px] flex justify-between items-center '>
                                    <img src="/assets/users.svg" alt="user profile image" role='img' />
                                    <p className='font-semibold text-white text-lg tracking-[0.05em]'>Albert Heijn</p>
                                </div>
                            </div>
                            <div className='w-full h-[64px] flex flex-col justify-between items-end '>
                                <div className='w-full h-[24px] flex justify-between '>
                                    <img src="/assets/toggle.svg" alt="toggle image" role='img' />
                                    <p className='text-sm tracking-[0.05em] text-[#48E59B] font-medium '>Auto Renew</p>
                                    <p className='text-[#3488FC] text-[12px] font-normal tracking-[0.05em] '> on Mar 01, 2025</p>
                                </div>
                                <button className='w-[105px] h-[32px] bg-[#111] rounded-[54px] text-white text-[12px] font-normal font-["Roboto_Mono"] '>Extend Now</button>
                            </div>
                        </div>
                        <div className='w-[187px] h-[143px] flex flex-col justify-between '>
                            <p className='text-[16px] font-semibold tracking-[0.05em] text-white '>Privacy and security</p>
                            <div className='w-full h-[99.6px] flex flex-col justify-between '>
                                <div className='h-[21.6px] w-[126.6px] flex justify-between items-center '>
                                    <img src="/assets/Done.svg" alt="done image" role='img' />
                                    <p className='font-medium text-sm tracking-[0.05em] text-[#C6EEDB]'>WHOIS privacy</p>
                                </div>
                                <div className='h-[60px] w-full flex flex-col justify-between '>
                                    <div className='w-full h-[24px] flex justify-between items-center '>
                                        <img src="/assets/toggle.svg" alt="toggle image" role='img' />
                                        <p className='font-medium text-sm tracking-[0.05em] text-[#48E59B] '>EasyENS·™️ enabled</p>
                                    </div>
                                    <div className='w-full h-[24px] flex gap-[8px] items-center '>
                                        <img src="/assets/toggle.svg" alt="toggle image" role='img' />
                                        <p className='font-medium text-sm tracking-[0.05em] text-[#48E59B] '>EPP Lock</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <a className='font-normal text-[12px] text-[#C6EEDB] tracking-[0.05em] underline '>Manage DNS records</a>
                </div>
          </div>
      </div>

    </section>
  )
}
