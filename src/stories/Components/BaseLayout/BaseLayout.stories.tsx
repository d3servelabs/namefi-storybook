import type { Meta, StoryObj } from '@storybook/react';
import  BaseLayoutFooter from '@components/Layouts/BaseLayout/BaseLayoutFooter';
import  BaseLayoutFooterLink from '@components/Layouts/BaseLayout/BaseLayoutFooterLink';
import  BaseLayoutRoot from '@components/Layouts/BaseLayout/BaseLayoutRoot';
import  {UserAuthStateDemo} from '@components/UserAuthState/UserAuthStateDemo';
import  BaseLayoutHeader from '@components/Layouts/BaseLayout/BaseLayoutHeader';
import  BaseLayoutBody from '@components/Layouts/BaseLayout/BaseLayoutBody';

const meta: Meta<typeof BaseLayoutRoot> = {
	title: 'Components/Layouts/BaseLayout',
	component: BaseLayoutRoot,
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
				<BaseLayoutRoot
					className={'min-h-[720px]'}
					header={<BaseLayoutHeader endSlot={<UserAuthStateDemo />} />}
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
				</BaseLayoutRoot>
			</div>
		);
	},
};
