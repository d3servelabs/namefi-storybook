import React from 'react';
import  ShortAddress  from '../../../components/ShortAddress';
import {useCopyToClipboard} from "@uidotdev/usehooks"
import {cn} from "../../../utils/cn";
import {NetworkLogo} from "../../NetworkLogo";

export function UserAuthStateDropdownHeader({ userAddress,loading,chainId =1 }) {
	const [clipboard,copyToClipboard] = useCopyToClipboard()
	return (
		<div className="relative w-full h-12 flex justify-between items-center">
			<div className="relative h-full flex items-center gap-2 ">
				<img className="w-12" src="/assets/maskuser.svg" alt="avatar" />
				<p className="font-primary text-white">
					<ShortAddress address={userAddress} loading={loading}/>
				</p>
				<button onClick={()=>copyToClipboard(userAddress)} disabled={!userAddress} className={cn(!userAddress &&'grayscale-[50%] opacity-50')}>
					<img src="/assets/copy.svg" alt="copy image" />
				</button>
			</div>
			<div className="h-full flex items-center justify-center gap-2">
				<NetworkLogo network={chainId}/>
				<div className="relative flex items-center min-w-[90px] gap-1">
					<span className={cn("block w-2 h-2 aspect-square rounded-full", userAddress? 'bg-primary-500': 'bg-warning', loading && 'bg-primary-500 animate-pulse')}/>
					<p className="font-primary font-normal text-sm text-brand-300">
						{loading? 'Loading...': userAddress? "connected": 'disconnected'}
					</p>
				</div>
			</div>
			<div className={"absolute -bottom-5 left-0 w-full h-0.5 bg-border-500"}/>
		</div>
	);
}

export default UserAuthStateDropdownHeader;
