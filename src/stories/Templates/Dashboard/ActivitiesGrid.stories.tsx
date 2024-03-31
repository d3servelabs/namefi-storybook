import type { Meta, StoryObj } from '@storybook/react';
import Activities from '../../../components/Templates/Dashboard/Activities';
import StatusChip from "../../../components/Core/StatusChip";

const meta = {
	title: 'Templates/Dashboard/ActivitiesGrid',
	component: Activities.Root,
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
		},
	},
} satisfies Meta<typeof Activities.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Status: Story = {
	args: {
		activities: [
			{
				label: 'Register',
				domainName: 'Namefi.io',
				isLoading: true,
				waitingForRegistrar: false,
			},
			{
				label: 'Release',
				domainName: 'Namefi.io',
				isLoading: true,
				waitingForRegistrar: false,
			},
			{
				label: 'Burn',
				domainName: 'Namefi.io',
				isLoading: false,
				waitingForRegistrar: true,
			},
			{
				label: 'Mint',
				domainName: 'abrac...fa.com',
				isLoading: false,
				waitingForRegistrar: true,
			},
			{
				label: 'Transfer',
				domainName: 'abrac...fa.com',
				isLoading: false,
				waitingForRegistrar: true,
			},
			{
				label: 'List',
				domainName: 'abrac...fa.com',
				isLoading: true,
				waitingForRegistrar: false,
			},
			{
				label: 'Register',
				domainName: 'Namefi.io',
				isLoading: true,
				waitingForRegistrar: false,
			},
			{
				label: 'Release',
				domainName: 'Namefi.io',
				isLoading: true,
				waitingForRegistrar: false,
			},
			{
				label: 'Burn',
				domainName: 'Namefi.io',
				isLoading: false,
				waitingForRegistrar: true,
			},
			{
				label: 'Mint',
				domainName: 'abrac...fa.com',
				isLoading: false,
				waitingForRegistrar: true,
			},
			{
				label: 'Transfer',
				domainName: 'abrac...fa.com',
				isLoading: false,
				waitingForRegistrar: true,
			},
			{
				label: 'List',
				domainName: 'abrac...fa.com',
				status: 'error'
			},
			{
				label: 'List',
				domainName: 'abrac...fa.com',
				status: 'success'
			},
		],
	} as any,
	render: ({ activities }: any) => {
		return (
			<Activities.Root>
				<Activities.Header.Root>
					<Activities.Header.Title>Latest Activities</Activities.Header.Title>
					<Activities.Header.Tabs>
						<Activities.Header.TabItem selected showBadge>
							On-going
						</Activities.Header.TabItem>
						<Activities.Header.TabItem>Finished</Activities.Header.TabItem>
					</Activities.Header.Tabs>
				</Activities.Header.Root>
				<Activities.List.Root>
					<Activities.List.Item.Root className={'*:!text-3.5lg'}>
						<Activities.List.Item.Columns.One>Type</Activities.List.Item.Columns.One>
						<Activities.List.Item.Columns.Two>
							Domain Name
						</Activities.List.Item.Columns.Two>
						<Activities.List.Item.Columns.Three>
							Status
						</Activities.List.Item.Columns.Three>
					</Activities.List.Item.Root>

					{activities.map(({ status, domainName, isLoading, waitingForRegistrar,label }) => {
						return (
							<Activities.List.Item.Root>
								<Activities.List.Item.Columns.One>
									{label}
								</Activities.List.Item.Columns.One>
								<Activities.List.Item.Columns.Two>
									{domainName}
								</Activities.List.Item.Columns.Two>

								{status?
									<Activities.List.Item.Columns.Three>
										<StatusChip color={status}>{status.toUpperCase()}</StatusChip>
									</Activities.List.Item.Columns.Three>
									:isLoading ? (
									<Activities.List.Item.Columns.Three.PendingOperation />
								) : waitingForRegistrar ? (
									<Activities.List.Item.Columns.Three.WaitingForRegistrar />
								) : (
									<Activities.List.Item.Columns.Three>
										<StatusChip color={'error'}>Failed</StatusChip>
									</Activities.List.Item.Columns.Three>
								)}
							</Activities.List.Item.Root>
						);
					})}
				</Activities.List.Root>
			</Activities.Root>
		);
	},
};
