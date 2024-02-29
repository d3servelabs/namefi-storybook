import type { Meta, StoryObj } from '@storybook/react';


import { Button as Component } from '../../../components/Core/Buttons/Button';
import {ArrowRight} from "../../../components/Core/icons/ArrowRight";
import {ButtonText} from "../../../components/Core/Buttons/ButtonText";
import {ButtonLoadingContent} from "../../../components/Core/Buttons/ButtonLoadingContent";

const meta = {
	title: 'Core/Buttons/BaseButton/Variants',
	component: Component,
	parameters: {
		layout: 'centered',
	},
	argTypes: { 

		onClick: {
			action: 'click',
		},
		loading: { type: 'boolean' },
		loadingContent: { type: 'function' },
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingButton: Story = {
	argTypes:{
	  loadingLabel:{type:'string'},
		content:{type:'string'},
	} as any,
	args: {
		onClick: () => {},
		loadingLabel: 'Loading',
		content: 'Button',
	} as any,
	render: ({ loadingLabel, content, ...props }: any) => {

		return (
			<Component {...props} loadingContent={<ButtonLoadingContent>{loadingLabel}</ButtonLoadingContent>}>
				<ButtonText>{content}</ButtonText> <ArrowRight/>
			</Component>
		);
	},
};
