import React from 'react';
import { css } from '@emotion/css';
import  { cn }  from "@namefi/utils"
import iPhoneMaskSVG from '../../../../assets/iPhoneMask.svg?raw';
import iPhoneMaskFullSVG from '../../../../assets/iPhoneMaskFull.svg?raw';
import iPhoneSVG from '../../../../assets/iPhone.svg?raw';
import StyledDiv from '../../../Core/StyledDiv';

const PhoneMockupContent = StyledDiv(css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	mask-image: url('data:image/svg+xml,${encodeURIComponent(iPhoneMaskFullSVG)}');
	mask-size: 100%;
	mask-repeat: no-repeat;
	@media (min-width: 640px) {
		mask-image: url('data:image/svg+xml,${encodeURIComponent(iPhoneMaskSVG)}');
	}
`);

export interface PhoneMockupProps {
	children?: React.ReactNode;
	className?: string;
}

export const PhoneMockup = ({ children, className }: PhoneMockupProps) => {
	return (
		<div className={cn('relative', className)}>
			<img
				className="hidden sm:block w-screen sm:w-[373px] sm:min-w-[373px]"
				src={`data:image/svg+xml,${encodeURIComponent(iPhoneSVG)}`}
			/>
			<img
				className="block sm:hidden w-screen"
				src={`data:image/svg+xml,${encodeURIComponent(iPhoneMaskFullSVG)}`}
			/>
			<PhoneMockupContent>
				<div className="w-full h-full py-0 px-0 sm:py-3 sm:px-4 bg-[#2d2d2d]">
					{children}
				</div>
			</PhoneMockupContent>
		</div>
	);
};
