import React, {useState} from 'react';

export function UserAuthStateDropdownBody() {
    //TODO
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="min-w-[234px] p-4 flex flex-col items-center justify-center gap-6 ">
            <div className="relative w-full flex items-center justify-center gap-3">
                <img className="w-5" src="/assets/user.svg" alt="user"/>
                {/* <p className='text-white text-xs font-primary font-normal tracking-[0.02em]'>Account</p> */}
                <div className="relative flex items-center gap-4">
                    <label className="relative block w-[94px] h-8  ">
                        <input
                            className="relative w-full h-full bg-transparent outline-0 border-0 font-medium text-lg tracking-[0.05em] text-white"
                            type={isVisible ? 'text' : 'password'}
                            placeholder="************"
                        />
                    </label>
                    <button className="w-10" type="button" onClick={() => setIsVisible(!isVisible)}>
                        <img
                            src={isVisible ? '/assets/eye-open.svg' : '/assets/eye-close.svg'}
                            alt="eyen image"
                            role="img"
                        />
                    </button>
                </div>
                {/* <button><img className='w-4' src="/assets/arrow-right1.svg" alt="arrow-right" /></button> */}
            </div>
            <a className="font-400 underline text-xs font-primary text-brand-300" href="#">
                Please verify your email.
            </a>
        </div>
    );
}

export default UserAuthStateDropdownBody;