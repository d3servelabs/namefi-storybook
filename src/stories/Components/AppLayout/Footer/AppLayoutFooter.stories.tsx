import type { Meta, StoryObj } from '@storybook/react';
import { AppLayoutFooter } from '@components/AppLayout/AppLayoutFooter';
import { AppLayoutFooterLink } from '@components/AppLayout/AppLayoutFooterLink';
import { allModes } from '../../../../../.storybook/mode';

const meta: Meta<typeof AppLayoutFooter> = {
	title: 'Components/AppLayout/Footer',
	component: AppLayoutFooter,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'light',
		},
		chromatic: {
			//🔶 Test each story for ArticleCard in two modes
			modes: {
				mobile: allModes["small"],
				desktop: allModes["large"],
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	render: () => {
		return (
			<div className={'w-full'}> {'XXX'}
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
