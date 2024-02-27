import type { Meta, StoryObj } from '@storybook/react';
import  BaseLayoutFooter from '../../../../components/Layouts/BaseLayout/BaseLayoutFooter';
import  BaseLayoutFooterLink from '../../../../components/Layouts/BaseLayout/BaseLayoutFooterLink';

const meta: Meta<typeof BaseLayoutFooter> = {
	title: 'Components/Layouts/BaseLayout/Footer',
	component: BaseLayoutFooter,
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
				<BaseLayoutFooter
					links={
						<>
							<BaseLayoutFooterLink href={'#'}>Contact Us</BaseLayoutFooterLink>
							<BaseLayoutFooterLink href={'#'}>Private Terms</BaseLayoutFooterLink>
							<BaseLayoutFooterLink href={'#'}>Terms & Conditions</BaseLayoutFooterLink>
						</>
					}
				/>
			</div>
		);
	},
};
