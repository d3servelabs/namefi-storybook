import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import React, { useState, useCallback } from 'react'
import { SolidButton } from '../../../components/Buttons/SolidButton';
import { NamePotential } from '../../../pages/ParkingMode/NamePotential';

const meta = {
	title: 'Pages/ParkingMode/NamePotential',
	component: NamePotential,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof NamePotential>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		name: { control: 'text' },
		description: { control: 'text' },
		preview: { control: 'text' },	
		children: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		name: 'example.com',
		description: 'The name **"Namefi"** signifies the _act of naming something_, with the idea that it becomes just as _essential, connecting people_ and contributing to a better _future_ for the internet.',
		preview: '',
		children: '',
		className: 'w-full',
	},
	tags: ['autodocs'],
};

export const Generate: Story = {
	argTypes: {
		name: { control: 'text' },
		description: { control: 'text' },
	} as any,
	args: {
		name: 'example.com',
		description: 'The name **"Namefi"** signifies the _act of naming something_, with the idea that it becomes just as _essential, connecting people_ and contributing to a better _future_ for the internet.',
	} as any,
	tags: ['autodocs'],
	render: ({ name, description }: any) => {
		const [previewURL, setPreviewURL] = useState<string>('')	
		const handleGenerate = useCallback(() => {
			setPreviewURL('https://namefi.io');
		}, [setPreviewURL]) 
		return (
			<NamePotential
				name={name}
				description={description}
				preview={previewURL && <iframe className="w-full h-full" src={previewURL} />}
				className="max-w-[1280px]">
					<SolidButton className="font-primary" onClick={handleGenerate}>Generate <img src="/assets/arrow-right2.svg" alt="arrow" /></SolidButton>
			</NamePotential>
		);
	},
};