import React from 'react';
import { ArrowRight } from 'lucide-react';

export const LaunchDApp = ({ href }) => {
	return (
		<a href={href}>
			<div className="lg:min-w-[240px] lg:h-[60px] py-3 px-6 bg-black-700 relative flex justify-center items-center duration:300 gap-2 rounded-full group">
				<p className="font-primary font-medium tracking-wider text-lg text-white">
					Launch Dapp
				</p>
				<ArrowRight
					className={'text-primary group-hover:translate-x-2 duration-200 transition-all'}
				/>
			</div>
		</a>
	);
};
