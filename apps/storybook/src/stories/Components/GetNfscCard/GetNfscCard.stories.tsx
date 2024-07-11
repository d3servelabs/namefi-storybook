import type { Meta, StoryObj } from '@storybook/react';
import { GetNfscCard } from '@namefi/ui';
import { fn } from '@storybook/test';

const meta = {
	title: 'Components/GetNfscCard/GetNfscCard',
	component: GetNfscCard.Root,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof GetNfscCard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;
const cardTitle = '$GetNfsc';

export const Default: Story = {
	argTypes: {
		onClickChip: { type: 'any' },
		chipValues: { type: 'number[]' },
		selectedValue: { type: 'number' },
	} as any,
	args: {
		onClickChip: fn(),
		chipValues: [20, 50, 100],
		selectedValue: 0,
	} as any,
	render: ({ onClickChip, chipValues, selectedValue }: any) => {
		return (
			<GetNfscCard.Root>
				<GetNfscCard.Header>
					<h2 className="text-white">{cardTitle}</h2>
				</GetNfscCard.Header>
				<GetNfscCard.Body>
					<GetNfscCard.Chips
						onClickChip={onClickChip}
						chipValues={chipValues}
						selectedValue={selectedValue}></GetNfscCard.Chips>
				</GetNfscCard.Body>
			</GetNfscCard.Root>
		);
	},
};
