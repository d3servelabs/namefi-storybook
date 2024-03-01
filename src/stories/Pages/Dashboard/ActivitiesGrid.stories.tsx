import type { Meta, StoryObj } from '@storybook/react';
import Activities from '../../../components/Templates/DashBoard/Activities';

const meta = {
	title: 'Pages/Dashboard/ActivitiesGrid',
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
				status: 'Register',
				domainName: 'Namefi.io',
				isLoading: true,
				waitingForRegistrar: false,
			},
			{
				status: 'Release',
				domainName: 'Namefi.io',
				isLoading: true,
				waitingForRegistrar: false,
			},
			{ status: 'Burn', domainName: 'Namefi.io', isLoading: false, waitingForRegistrar: true },
			{
				status: 'Mint',
				domainName: 'abrac...fa.com',
				isLoading: false,
				waitingForRegistrar: true,
			},
			{
				status: 'Transfer',
				domainName: 'abrac...fa.com',
				isLoading: false,
				waitingForRegistrar: true,
			},
			{
				status: 'List',
				domainName: 'abrac...fa.com',
				isLoading: true,
				waitingForRegistrar: false,
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
					<div className={'pb-4.5'}>
						<Activities.List.Item className={'*:!text-3.5lg'}>
							<Activities.List.Item.Columns.One>
								Type
							</Activities.List.Item.Columns.One>
							<Activities.List.Item.Columns.Two>
								Domain Name
							</Activities.List.Item.Columns.Two>
							<Activities.List.Item.Columns.Three>
								Status
							</Activities.List.Item.Columns.Three>
						</Activities.List.Item>
					</div>

					{activities.map(({ status, domainName, isLoading, waitingForRegistrar }) => {
						return (
							<Activities.List.Item>
								<Activities.List.Item.Columns.One>
									{status}
								</Activities.List.Item.Columns.One>
								<Activities.List.Item.Columns.Two>
									{domainName}
								</Activities.List.Item.Columns.Two>
								<Activities.List.Item.Columns.Three
									loading={isLoading}
									waitingForRegistrar={
										waitingForRegistrar
									}></Activities.List.Item.Columns.Three>
							</Activities.List.Item>
						);
					})}
				</Activities.List.Root>
			</Activities.Root>
		);
	},
};
