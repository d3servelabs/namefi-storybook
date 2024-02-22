import type { Meta, StoryObj } from '@storybook/react';
import { AppLayoutFooter } from '@components/AppLayout/AppLayoutFooter';
import { AppLayoutFooterLink } from '@components/AppLayout/AppLayoutFooterLink';

const meta: Meta<typeof AppLayoutFooter> = {
	title: 'Components/AppLayout/Footer',
	component: AppLayoutFooter,
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
				<AppLayoutFooter
					links={
						<>
							<AppLayoutFooterLink href={'#'}>Contact Us</AppLayoutFooterLink>
							<AppLayoutFooterLink href={'#'}>Private Terms</AppLayoutFooterLink>
							<AppLayoutFooterLink href={'#'}>Terms & Conditions</AppLayoutFooterLink>
						</>
					}
				/>
			</div>
		);
	},
};
