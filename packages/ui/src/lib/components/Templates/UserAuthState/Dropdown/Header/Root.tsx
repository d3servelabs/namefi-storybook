import React from 'react';
import  { Tuple }  from "@namefi/utils"

export default function Root({ children }: { children: Tuple<React.ReactNode, 2> }) {
	return (
		<div className="relative w-full h-17 flex flex-row flex-wrap justify-between items-center pb-5">
			<div className="relative h-full flex items-center gap-2 ">{children[0]}</div>
			<div className="h-full flex items-center justify-center gap-2">{children[1]}</div>
			<div className={'absolute -bottom-0 left-0 w-full h-0.5 bg-border-500'} />
		</div>
	);
}
