// Deprecated. Use SVG Image instead.

import React from 'react';
import tokeniconSvg from '../../../../assets/tokenicon.svg';
import maskuserSvg from '../../../../assets/maskuser.svg';

export interface NFSCAssetPreviewProps {
	owner: string;
	value: number;
	dollar: number;
	status: string;
}

export const NFSCAssetPreview = ({ owner, value, dollar, status }: NFSCAssetPreviewProps) => {
	return (
		<div className="w-[408px] h-[400px] xl:w-[508px] xl:h-[500px] flex justify-center items-end pb-9 drop-shadow-[0px_0px_15px_rgba(202,202,202,0.25)] ">
			<div className="relative rounded-[20px] pl-12 pr-10 py-6 flex flex-col justify-between items-end w-full h-[320px] bg-black-1000  ">
				<div className="w-full h-[70px] flex justify-between items-center">
					<div className="w-[205px] h-12 flex items-center justify-between ">
						<img className="w-12" src={maskuserSvg} alt="maskuser" />
						<p className="font-medium text-lg font-primary text-white">{owner}</p>
					</div>
					<img className="w-[64px]" src={tokeniconSvg} alt="Token Icon" role="img" />
				</div>
				<div className="w-full h-[90px] ">
					<div className="h-full w-[272px] flex justify-between items-center ">
						<div className="w-[125px] h-full flex flex-col pt-4">
							<p className="text-5xl text-primary-700 tracking-wide font-normal font-primary flex items-end">
								<span className="pr-[0.5em]">{value}</span>
								<span className="font-primary font-normal text-white text-[31px] tracking-wider">
									$NFSC
								</span>
							</p>
							<p className="font-primary mt-2 font-normal text-[#d6d6d6] text-base tracking-wider ">
								≈${dollar}{' '}
							</p>
						</div>
					</div>
				</div>
				<div className=" ">
					<p className='font-["Roboto_Mono"] font-normal text-white text-sm tracking-wider'>
						{status}
					</p>
				</div>
			</div>
		</div>
	);
};
