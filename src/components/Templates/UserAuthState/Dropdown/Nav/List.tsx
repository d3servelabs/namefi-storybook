import React, { ComponentProps, useMemo, useState } from 'react';
import {cn} from "../../../../../utils/cn";

function List({ children,className,...props }: ComponentProps<'div'>) {
	// const count = useMemo(() => {
	// 	return Array.isArray(children) ? children.length : 1;
	// }, [children]);
	return (
		<div {...props} className={cn("relative w-full flex",className)}>
			<table className="w-full border-collapse table-fixed">
				<tbody>{children}</tbody>
			</table>
			{/*<div className=" mx-auto grid grid-cols-[auto_2fr] gap-x-2">{children}</div>*/}
			{/*{*/}
			{/*	new Array(count-1).fill(null).map((_,index)=>{*/}
			{/*		const top = `${100*(index+1) / (count)}%`*/}
			{/*		return <div className={'absolute h-0.25 bg-white/30 rounded-full w-full left-0 top-0'} style={{top}} />*/}
			{/*	})*/}
			{/*}*/}
		</div>
	);
}

export default List;
