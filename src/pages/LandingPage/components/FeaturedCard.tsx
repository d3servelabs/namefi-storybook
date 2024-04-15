import React from 'react';
import { NamefiBrandText } from '../../../components/Core/NamefiBrandText';

interface FeaturedCard {
	label: string;
	children?: React.ReactNode;
	img?: React.ReactNode;
}

export type FeaturedCardGridProps = {
	children?: React.ReactNode;
};

export const Grid = ({ children }: FeaturedCardGridProps) => {
	return (
		<div className="relative w-full max-w-[1400px]">
			<div className="absolute left-0 top-[3rem] font-bold tracking-wider flex justify-between z-10  flex-row items-center">
				<NamefiBrandText className="text-2xl lg:text-5xl text-primary-500">
					Namefi
				</NamefiBrandText>
				<p className=" text-xl lg:text-4xl text-primary-500 ">Features</p>
			</div>
			<div className="relative w-full ml-auto max-w-[1230px] min-h-[736px] rounded-5 py-14 pt-64 bg-[#24242480] px-3 lg:px-0">
				<div className="relative w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center items-center gap-5">
					{children}
				</div>
			</div>
		</div>
	);
};

export const Item = ({ label, img, children }: FeaturedCard) => {
	return (
		<>
			<div
				key={label}
				className="relative w-full max-w-[300px] lg:max-w-[350px] rounded-3xl p-2.5 bg-[#ffffffe6] hover:bg-white text-black-600 mx-auto">
				<div className="w-full gap-12 flex flex-col lg:pt-[4rem] py-4 pl-[18px] ">
					<div className="w-[146px] h-[160px] gap-[1.125rem] flex flex-col justify-between ">
						{img}
						<p className="font-bold text-4xl tracking-wider text-black">{label}</p>
					</div>
					<ul className="w-full min-h-[107px] text-[1.25rem] font-medium tracking-wide">
						{children}
					</ul>
				</div>
			</div>
		</>
	);
};
