import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { UserBalanceCardRoot } from '../../../components/Templates/Dashboard/BalanceCard/UserBalanceCardRoot';
import { UserBalanceCardBalance } from '../../../components/Templates/Dashboard/BalanceCard/UserBalanceCardBalance';

const meta = {
	title: 'Templates/Dashboard/UserBalanceCard',
	component: UserBalanceCardRoot,
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
		},
	},
} satisfies Meta<typeof UserBalanceCardRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DomainCreditCardStory: Story = {
	args: {},
	render(props: any) {
		return (
			<UserBalanceCardRoot username={'0x1b0f291c8fFebE891886351CDfF8A304a840C8Ad'}>
				<></>
				<UserBalanceCardBalance balance={3200} />
			</UserBalanceCardRoot>
		);
	},
};
