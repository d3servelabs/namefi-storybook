import React, {ReactNode} from 'react';
import MaskUser from '../../../assets/maskuser.svg';

export const UserGreeting = ({ username, avatar }:{ username:string, avatar:ReactNode }) => {
	return (
		<div className="w-full h-16 flex items-center gap-3">
			<h2 className="font-bold tracking-[0.05em] text-6lg text-[#d9d9d9]">GM,</h2>
			{avatar ?? <img src={MaskUser} alt="mask image" role="img" />}
			<h2 className="font-black tracking-[0.05em] text-8lg text-[#d9d9d9]">{username}</h2>
		</div>
	);
};
