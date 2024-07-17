import { Pencil2Icon } from '@radix-ui/react-icons';
import React, { ComponentProps } from 'react';
import { GhostButton } from '../../../../Core';
import  { cn }  from "@namefi/utils"

const EditButton: React.FC<ComponentProps<typeof GhostButton>> = ({ className, ...props }) => {
	return (
		<div>
			<GhostButton
				{...props}
				className={cn(
					'w-7 h-7 aspect-square rounded-full p-1 bg-primary/20 hover:bg-primary/30',
					className,
				)}>
				<Pencil2Icon className={'w-full h-full text-primary'} />
			</GhostButton>
		</div>
	);
};
export default EditButton;
