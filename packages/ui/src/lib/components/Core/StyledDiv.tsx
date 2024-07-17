import React, { ComponentProps, forwardRef, useMemo } from 'react';
import  { cn }  from "@namefi/utils"
import { css } from '@emotion/css';

export default function StyledDiv(classes: ReturnType<typeof css>) {
	return forwardRef<HTMLDivElement, ComponentProps<'div'>>(function StyledDiv(props, ref) {
		return (
			<div {...props} className={cn(classes, props.className)}>
				{props.children}
			</div>
		);
	});
}
