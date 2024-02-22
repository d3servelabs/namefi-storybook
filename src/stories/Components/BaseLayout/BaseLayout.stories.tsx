import type { Meta, StoryObj } from '@storybook/react';
import { BaseLayoutFooter } from '@components/Layouts/BaseLayout/BaseLayoutFooter';
import { BaseLayoutFooterLink } from '@components/Layouts/BaseLayout/BaseLayoutFooterLink';
import { BaseLayoutRoot } from '@components/Layouts/BaseLayout/BaseLayoutRoot';
import { UserAuthState } from '@components/UserAuthState/UserAuthState';
import { BaseLayoutHeader } from '@components/Layouts/BaseLayout/BaseLayoutHeader';
import { BaseLayoutBody } from '@components/Layouts/BaseLayout/BaseLayoutBody';

const meta: Meta<typeof BaseLayout> = {
	title: 'Components/Layouts/BaseLayout',
	component: BaseLayout,
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
			<div className={'w-full h-full min-h-[720px]'}>
				<BaseLayout
					className={'min-h-[720px]'}
					header={<BaseLayoutHeader endSlot={<UserAuthState />} />}
					footer={
						<BaseLayoutFooter
							links={
								<>
									<BaseLayoutFooterLink href={'#'}>Contact Us</BaseLayoutFooterLink>
									<BaseLayoutFooterLink href={'#'}>
										Private Terms
									</BaseLayoutFooterLink>
									<BaseLayoutFooterLink href={'#'}>
										Terms & Conditions
									</BaseLayoutFooterLink>
								</>
							}
						/>
					}>
					<BaseLayoutBody>
&nbsp;
					</BaseLayoutBody>
				</BaseLayout>
			</div>
		);
	},
};
