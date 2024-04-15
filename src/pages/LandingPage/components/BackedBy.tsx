import React, { ComponentProps } from 'react';
import alchemySvg from '../../../../public/assets/alchemy.svg';
import maskSvg from '../../../../public/assets/mask.svg';
import foothillSvg from '../../../../public/assets/foothill.svg';
import orangedaoSvg from '../../../../public/assets/orangedao.svg';
import { cn } from '../../../utils/cn';

export type BackedByProps = ComponentProps<'div'> & {};
export const BackedBy = ({ className, ...props }: BackedByProps) => {
	return (
		<div
			{...props}
			className={cn(
				'w-full max-w-[1400px] min-h-[166px] flex flex-row flex-wrap justify-center lg:justify-between items-center bg-[#24242480] rounded-5  p-8',
				className,
			)}>
			<div className={'self-start lg:w-2/12'}>
				<p className="font-primary text-lg font-normal text-brand-300 tracking-wide">
					Backed by
				</p>
			</div>

			<div className="w-full lg:w-10/12 min-h-25 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-6 lg:gap-12 items-center justify-center">
				<img className="grayscale hover:grayscale-0 mx-auto" src={alchemySvg} alt="" />
				<img className="grayscale hover:grayscale-0 mx-auto" src={maskSvg} alt="" />
				<img className="grayscale hover:grayscale-0 mx-auto" src={foothillSvg} alt="" />
				<img className="grayscale hover:grayscale-0 mx-auto" src={orangedaoSvg} alt="" />
			</div>
		</div>
	);
};
