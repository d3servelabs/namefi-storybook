import React, {ComponentProps, useState} from 'react';
import NavItem from '../Nav/Item';
import List from '../Nav/List';
import { BorderSplitIcon, PersonIcon } from '@radix-ui/react-icons';
import BalanceTile from "./BalanceTile";
import {cn} from "../../../../../utils/cn";

function Root({className,children,...props}:ComponentProps<'div'>) {


	return (
		<div {...props} className={cn("min-w-[234px] flex flex-col items-center justify-center",className)}>
			{children}
		</div>
	);
}

export default Root;
