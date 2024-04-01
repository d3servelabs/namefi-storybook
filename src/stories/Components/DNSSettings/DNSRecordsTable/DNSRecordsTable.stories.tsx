import type { Meta, StoryObj } from '@storybook/react';
import {
	DNSRecordsTable,
	type DNSRecordData,
} from '../../../../components/Templates/DNSSettings';

const meta = {
	title: 'Components/DNSSettings/DNSRecordsTable',
	component: DNSRecordsTable,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DNSRecordsTable>;

export default meta;

const DNS_RECORD_DATAS: DNSRecordData[] = [
	{
		id: '1',
		type: 'A',
		name: 'namefinamefinamefinamefinamefinamefi.com',
		content: '24.199.74.33',
		ttl: 3600,
	},
	{
		id: '2',
		type: 'AAAA',
		name: 'namefi.com',
		content: '24.199.74.33',
		ttl: 3600,
	},
	{
		id: '3',
		type: 'NS',
		name: 'namefi.com',
		content: '24.199.74.33',
		ttl: 3600,
	},
	{
		id: '4',
		type: 'SOA',
		name: 'namefi.com',
		content: '24.199.74.33',
		ttl: 3600,
	},
	{
		id: '5',
		type: 'SOA',
		name: 'namefi.com',
		content: '24.199.74.33',
		ttl: 3600,
	},
];

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {
		records: { control: 'object' },
		onAdd: { action: 'onAdd' },
		onDownload: { action: 'onDownload' },
		onDelete: { action: 'onDelete' },
		className: { control: 'text' },
	},
	args: {
		records: DNS_RECORD_DATAS,
	},
};
