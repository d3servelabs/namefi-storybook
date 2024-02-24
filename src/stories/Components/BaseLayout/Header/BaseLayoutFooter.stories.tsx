import type { Meta, StoryObj } from '@storybook/react';
import BaseLayoutHeader from "@components/Layouts/BaseLayout/BaseLayoutHeader";
import {UserAuthState} from "@components/UserAuthState/UserAuthState";



const meta: Meta<typeof BaseLayoutHeader> = {
	title: 'Components/Layouts/BaseLayout/Header',
	component: BaseLayoutHeader,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'light',
		},
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	render: () => {
		return (
			<div className={'w-full'}>
				<BaseLayoutHeader
					endSlot={<UserAuthState/>}
				/>
			</div>
		);
	},
};
