import React, { ComponentProps } from 'react';
import {cn} from "../../../../../utils/cn";

export default function ActivitiesListRoot({ children, className, ...props }: ComponentProps<'div'>) {
	return <div {...props} className={cn("w-full h-[275px] flex flex-col justify-between")}>{children}</div>;
}
