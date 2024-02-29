import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader } from '@components/Card';
import { ComingSoon } from '@components/ComingSoon';
import {
	DNSSettingsTabs,
	type DNSSettingsTabKey,
	DNSRecordsTable,
	type DNSRecordData,
} from '@components/DNSSettings';

interface DNSSettingsCardProps {
	records: DNSRecordData[];
	onAddRecord: () => void;
	onDownloadRecords: () => void;
	onDeleteRecords: () => void;
	onBack: () => void;
	onSave: () => void;
	className?: string;
	tableClassName?: string;
}
const DNSSettingsCard = ({
	records,
	onAddRecord,
	onDownloadRecords,
	onDeleteRecords,
	onBack,
	onSave,
	className,
	tableClassName,
}: DNSSettingsCardProps) => {
	const [tab, setTab] = useState<DNSSettingsTabKey>('records');
	return (
		<Card className={className}>
			<CardHeader onBack={onBack}>DNS Settings</CardHeader>
			<DNSSettingsTabs value={tab} onChange={setTab} onSave={onSave} />
			{tab === 'records' ? (
				<DNSRecordsTable
					className={tableClassName}
					records={records}
					onAdd={onAddRecord}
					onDownload={onDownloadRecords}
					onDelete={onDeleteRecords}
				/>
			) : (
				<ComingSoon />
			)}
		</Card>
	);
};

const meta = {
	title: 'Components/DNSSettings/DNSSettingsCard',
	component: DNSSettingsCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DNSSettingsCard>;

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
		onAddRecord: { action: 'onAddRecord' },
		onDownloadRecords: { action: 'onDownloadRecords' },
		onDeleteRecords: { action: 'onDeleteRecords' },
		onBack: { action: 'onBack' },
		onSave: { action: 'onSave' },
		className: { control: 'text' },
		tableClassName: { control: 'text' },
	},
	args: {
		records: DNS_RECORD_DATAS,
		className: 'w-[613px] min-h-[472px]',
		tableClassName: 'max-h-[280px]',
	},
};
