import React, { useEffect, useState } from 'react'

export const Home = () => {
    const [label, setLabel] = useState('')
    const [ TLDSuggestions, setTLDSuggestions] = useState(false)
    const [ isValidDomain, setIsValidDomain] = useState(false)

    function handleChange(e) {
      setLabel(e.target.value)
    }

    function handleTLDSuggestions(e: any) {
      if (label.includes('.')) {
        const x = label.split('.')[0]
        setLabel(`${x}.`)
      }
      const target = e.target.value
      setLabel(value => value + target)
      setIsValidDomain(true)
    }

    function handleSubmit(e: any) {
      e.preventDefault()
      alert(label)
    }

    useEffect(() => {
      if (label.includes('.')) {
        setTLDSuggestions(true)
      } else{
        setTLDSuggestions(false)
      }
      
    }, [label])
    
  return (
    <section className='relative min-h-[85vh] flex flex-col justify-center items-center'>
    <div className='w-full h-auto flex flex-col justify-center items-center relative'>
        <div className='h-[193px] w-[660px] flex flex-col justify-between '>
            <h2 className=' text-4xl font-normal font-["Roboto_Mono"] text-[#797979]'>Start trading <span className='font-["Roboto_Serif"] italic font-light text-[#fdfdfd]'>any domains</span> today</h2>
            <div className='flex flex-col justify-between w-[660px] h-[115.14px]'>
                <form onSubmit={handleSubmit} className='relative w-full flex items-center bg-white rounded-[85px] overflow-hidden'>
                    <label className='w-full h-[64.29px]'>
                        <input 
                          onChange={handleChange}
                          value={label}
                        className='focus:border-[#48E59B] rounded-[85px] text-[#313131] focus:border-2 w-full h-full text-[21px] font-medium font-["Roboto_Mono"] tracking-[0.02em] px-5 border-0 outline-0 ' type="text" placeholder='Type in a domain' />
                    </label>
                    <button style={{
                      backgroundColor: `${isValidDomain && '#313131'}`
                    }} className=" absolute right-1 w-[55.29px] h-[55.29px] rounded-full flex justify-center items-center" type='submit'><img className="w-[20.57px]" src="/assets/lens.svg" alt="search icon" role="img" /></button>
                </form>
                <div className='flex gap-2 w-full h-[37.14px] pl-[20.57px] self-start'>
                  {TLDSuggestions &&
                    [
                      {name: 'eth'},
                      {name: 'com'},
                      {name: 'net'},
                      {name: 'co.uk'},
                      {name: 'btc'},
                      {name: 'cosmos'},
                    ].map(data => 
                      <button key={data.name} onClick={handleTLDSuggestions} className='flex justify-center leading-none items-center font-["Roboto_Mono"] font-normal text-[15px] text-[#ffffffcc] h-full px-[21.43px] rounded-[21.43px] bg-[#1c1c1c] border-[1.29px] border-[#797979] ' value={data.name}>.{data.name}</button>
                      )
                  }
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
