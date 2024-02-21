import React, { useState } from 'react';

export const UserAuthStateDropDown = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="relative rounded-[32px] bg-[#111] drop-shadow-[0_0_20px_rgba(255,239,239,0.15)] py-12 px-6 ">
			<div className="w-[460px] flex flex-col gap-5 ">
				<div
					className="relative w-full h-12 flex justify-between items-center
                before:absolute
                before:-bottom-5
                before:left-0
                before:w-full
                before:h-[1.5px]
                before:bg-border-500">
					<div className="relative h-full flex items-center gap-3 ">
						<img className="w-12" src="/assets/maskuser.svg" alt="avatar" />
						<p className="font-primary text-white">0x8312...9ds0</p>
						<button>
							<img src="/assets/copy.svg" alt="copy image" />
						</button>
					</div>
					<div className="w-[146px] h-full flex items-center justify-center gap-3">
						<img src="/assets/eth-logo.svg" alt="eth-logo" />
						<div className="relative flex items-center min-w-[90px] gap-1">
							<span className="block w-2 h-2 bg-primary-500 rounded-full"></span>
							<p className="font-primary font-normal text-sm text-brand-300">connectetd</p>
						</div>
					</div>
				</div>
				<div className="min-w-[234px] p-4 flex flex-col items-center justify-center gap-6 ">
					<div className="relative w-full flex items-center justify-center gap-3">
						<img className="w-5" src="/assets/user.svg" alt="user" />
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
				<div
					className="relative h-[41.6px] flex items-center justify-between
                before:absolute
                before:-top-5
                before:left-0
                before:w-full
                before:h-[1.5px]
                before:bg-[#444]">
					<button className="relative h-full font-normal text-sm font-primary text-brand-300 flex justify-center gap-2 items-center min-w-[173px] p-2.5">
						<img src="/assets/switch.svg" alt="switch image" />
						<span>Switch Wallet</span>
					</button>
					<button className="relative rounded-full h-full font-normal text-sm font-primary text-brand-300 bg-brand-100 gap-2 flex justify-center items-center min-w-[173px] p-2.5">
						<img src="/assets/disconnect1.svg" alt="disconnect image" />
						<span>Disconnect</span>
					</button>
				</div>
			</div>
		</div>
	);
};
