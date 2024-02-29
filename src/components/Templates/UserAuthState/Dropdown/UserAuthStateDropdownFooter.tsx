import React from 'react';
import {cn} from "../../../../utils/cn";

export function UserAuthStateDropdownFooter({ userAddress, signedIn,loading }:{userAddress?: string, signedIn?:boolean, loading?:boolean}) {
	return (
		<div className="relative h-[41.6px] flex items-center justify-between before:absolute before:-top-5 before:left-0 before:w-full before:h-[1.5px] before:bg-[#444]">
			{(userAddress || loading) && (
				<button disabled={loading} className={cn("relative h-full font-normal text-sm font-primary text-brand-300 flex justify-center gap-2 items-center min-w-[173px] p-2.5", loading && "grayscale-[50%] opacity-50")}>
					<img src="/assets/switch.svg" alt="switch image" />
					<span>Switch Wallet</span>
				</button>
			)}
			{userAddress && (
				<button className="relative rounded-full h-full font-normal text-sm font-primary text-brand-300 bg-brand-100 gap-2 flex justify-center items-center min-w-[173px] p-2.5">
					<img src="/assets/disconnect1.svg" alt="disconnect image" />
					<span>{ signedIn? "SignOut": "Disconnect"}</span>
				</button>
			)}
		</div>
	);
}

export default UserAuthStateDropdownFooter;