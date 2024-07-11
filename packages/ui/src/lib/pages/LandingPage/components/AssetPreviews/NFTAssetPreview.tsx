// Deprecated. Use SVG Image instead.

import React from 'react';
import { NamefiBrandText } from '../../../../components/Core/NamefiBrandText';
import { LockIcon } from 'lucide-react';

export interface NFTAssetPreviewProps {
	status: string;
	domain: string;
	owner: string;
	expiry: string;
}

export const NFTAssetPreview = ({ status, domain, owner, expiry }: NFTAssetPreviewProps) => {
	return (
		<div className="relative bg-black-1000 rounded-[20px] p-6 bg-black flex flex-col justify-between items-center w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]">
			<div className="flex w-full h-[30px] items-center justify-between">
				<p>
					<NamefiBrandText className="text-2xl text-[#3488FC]">{status}</NamefiBrandText>
				</p>
			</div>
			<h3 className="text-white font-semibold text-[28px] tracking-widest">{domain}</h3>
			<div className="w-full h-[36px] flex justify-between ">
				<div className="w-full h-full flex justify-between ">
					<div className="min-w-[106px] h-full">
						<p className="text-[#acacac] font-normal text-xs tracking-widest ">
							Owned by
						</p>
						<p className="text-[#ededed] font-normal text-sm tracking-widest ">
							{owner}
						</p>
					</div>
					<div className="w-[150px] h-full flex items-center justify-between ">
						<LockIcon className="w-8 h-8 text-primary-500" />
						<div className="w-[100px] font-secondary">
							<p className="text-[#acacac] text-[11px] font-extrabold tracking-widest ">
								Expires on
							</p>
							<p className="text-[#ededed] text-sm font-extrabold tracking-widest ">
								{expiry}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
