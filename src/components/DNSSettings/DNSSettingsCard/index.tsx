import { cn } from '@utils/cn';
import React, { useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { Checkbox } from '@components/Checkbox';

const Card = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
	return <div
		className={cn('max-w-[613px] max-h-[472px] w-full h-full rounded-5 bg-[#222B27] pt-6 pb-12 px-9 overflow-hidden flex flex-col', className)}>
		{children}
	</div>
}

const CardHeader = ({ title, onBack }: { title: React.ReactNode, onBack?: () => void }) => {
	const handleClickBack = useCallback(() => {
		if (!onBack) {
			return;
		}
		onBack();	
	}, [onBack])
	return <div>
		{onBack && <div className="flex mb-2">
			<img onClick={handleClickBack} className="block w-[22px] cursor-pointer" src="/assets/arrow-left.svg" alt="Arrow" role="img" />
		</div>}
		<div className="text-white text-lg font-bold font-['Roboto'] leading-8 tracking-wide mb-3 w-full">
			{title}
		</div>
	</div>
}

interface Tab <TKey extends string = string> {
	key: TKey
	name: string
	disabled?: boolean
}
interface TabsProps <TKey extends string = string> {
	options: Tab<TKey>[],
	value: TKey,
	onChange: (value: TKey) => void
	className?: string
}
const TabItem = <TKey extends string = string>({ tab, active, onClick }: { tab: Tab<TKey>, active?: boolean, onClick: (key: TKey) => void }) => {
	const handleClick = useCallback(() => {
		if (tab.disabled) {
			return;
		}
		onClick(tab.key);
	}, [tab, onClick]) 
	return <a key={tab.key} onClick={handleClick} className={cn('flex items-center cursor-pointer', active && 'font-semibold text-primary-500')} >
		{tab.name}
	</a>
}
const Tabs = <TKey extends string = string> ({ options, value, onChange }: TabsProps<TKey>) => {
	const handleClickTabItem = useCallback((key: TKey) => {
		onChange(key)
	}, [])
	return <div className="flex gap-x-6 mr-6 text-sm font-medium text-black-400">
		{options.map((option: Tab<TKey>) => {
			return <TabItem key={option.key} tab={option} active={option.key === value} onClick={handleClickTabItem} />
		})}
	</div>
}

type DNSSettingsTabKey = 'records' | 'forward' | 'ns'
const DNS_SETTINGS_TABS_OPTOINS: Tab<DNSSettingsTabKey>[] = [{ key: 'records', name: 'DNS Records' }, { key: 'forward', name: 'URL Forwarding' }, { key: 'ns', name: 'Nameservers' }]
const DNSSettingsTabs = ({ value, onChange, onSave }: { value: DNSSettingsTabKey, onChange: (value: DNSSettingsTabKey) => void, onSave?: () => void}) => {
	const handleClickSave = useCallback(() => {
		if (!onSave) {
			return;
		}
		onSave();	
	}, [onSave])
	return <div className="flex justify-between mb-3.5">
		<Tabs options={DNS_SETTINGS_TABS_OPTOINS} value={value} onChange={onChange} />
		<div className="flex text-brand-300">
			<div className="flex cursor-pointer" onClick={handleClickSave}>
				<span className="mr-1.5">Save</span>
				<img className="block w-[22px] cursor-pointer" src="/assets/arrow-right1.svg" alt="Arrow" role="img" />	
				</div>
			</div>
	</div>
}

const DNSRecordsTableFooter = ({ onClickAdd, onClickDownload, onClickDelete }: { onClickAdd?: () => void, onClickDownload?: () => void, onClickDelete?: () => void }) => {
	const handleClickAdd = useCallback(() => {
		if (!onClickAdd) {
			return;
		}
		onClickAdd();	
	}, [onClickAdd])
	const handleClickDownload = useCallback(() => {
		if (!onClickDownload) {
			return;
		}
		onClickDownload();	
	}, [onClickDownload])
	const handleClickDelete = useCallback(() => {
		if (!onClickDelete) {
			return;
		}
		onClickDelete();	
	}, [onClickDelete]);
	return <div className="flex justify-end pr-[30px] py-4 gap-x-2">
		<button className="flex justify-center items-center w-7 h-7 rounded-full bg-[#48E59B33] cursor-pointer" onClick={handleClickAdd}>
			<img className="block w-[16px] cursor-pointer" src="/assets/Plus.svg" alt="Add" role="img" />	
		</button>
		<button className="flex justify-center items-center w-7 h-7 rounded-full bg-[#48E59B33] cursor-pointer opacity-30" onClick={handleClickDownload}>
			<img className="block w-[16px] cursor-pointer" src="/assets/Download.svg" alt="Download" role="img" />	
		</button>
		<button className="flex justify-center items-center w-7 h-7 rounded-full bg-[#48E59B33] cursor-pointer opacity-30" onClick={handleClickDelete}>
			<img className="block w-[16px] cursor-pointer" src="/assets/Trash.svg" alt="Delete" role="img" />	
		</button>
	</div>
}

const DNSRecordTableRowsGroup = styled.div`
	display: grid;	
	grid-template-columns:
		48px
		minmax(80px, 1fr)
		minmax(140px, 2fr)
		minmax(140px, 2fr)
		minmax(80px, 1fr);
`

interface DNSRecordData {
	id: string
	type: string
	name: string
	content: string
	ttl: number
}

const DNSRecordsTableRow = ({ record, selectedRows, onSelectedRowsChange }: { record: DNSRecordData, selectedRows: DNSRecordData[], onSelectedRowsChange: (rows: DNSRecordData[]) => void }) => {
	const checked = useMemo(() => !!selectedRows.find((row) => row.id === record.id), [record, selectedRows])
	const handleCheckChange = useCallback((value: boolean) => {
		onSelectedRowsChange(value ? [...selectedRows, record] : selectedRows.filter((row) => row.id !== record.id))
	}, [record, selectedRows, onSelectedRowsChange])
	return <div className="contents">
		<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">
			<Checkbox className="opacity-30" value={checked} onChange={handleCheckChange} />
		</div>
		<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">{record.type}</div>
		<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">{record.name}</div>
		<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">{record.content}</div>
		<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">{record.ttl}</div>
	</div>
}

const DNSRecordsTable = ({ records, onAdd, onDownload, onDelete }: { records: DNSRecordData[], onAdd?: () => void, onDownload?: (selectedRecords: DNSRecordData[]) => void, onDelete?: (selectedRecords: DNSRecordData[]) => void }) => {
	const [selectedRows, setSelectedRows] = useState<DNSRecordData[]>([])
	const handleClickAdd = useCallback(() => {
		if (!onAdd) {
			return;
		}
		onAdd();
	}, [onAdd])
	const handleClickDownload = useCallback(() => {
		console.log(selectedRows)
		if (!onDownload) {
			return;
		}
		onDownload(selectedRows);
	}, [onDownload, selectedRows])
	const handleClickDelete = useCallback(() => {
		if (!onDelete) {
			return;
		}
		onDelete(selectedRows);
	}, [onDelete, selectedRows])
	return <div className="flex flex-col overflow-hidden bg-black-900 rounded-[10px] font-primary pl-2 pt-2">
		<DNSRecordTableRowsGroup className="text-xs text-black-400 bg-black-900 pr-[14px]">
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left"></div>
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left">Type</div>
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left">Host</div>
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left">Points to</div>
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left">TTL(s)</div>
		</DNSRecordTableRowsGroup>
		<DNSRecordTableRowsGroup className="flex-1 contents text-sm overflow-y-scroll text-black-500">
			{records.map((record) => <DNSRecordsTableRow key={record.id} record={record} selectedRows={selectedRows} onSelectedRowsChange={setSelectedRows} />)}
		</DNSRecordTableRowsGroup>
		<DNSRecordsTableFooter onClickAdd={handleClickAdd} onClickDownload={handleClickDownload} onClickDelete={handleClickDelete} />
	</div>
}

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
]

export const DNSSettingsCard = ({
	children,
	className,
	onBack,
	onSave,
}: { children?: React.ReactNode, className?: string, onBack?: () => void, onSave?: () => void }) => {
	const [tab, setTab] = useState<DNSSettingsTabKey>('records')
	const handleTabsChange = useCallback((key: DNSSettingsTabKey) => {
		setTab(key)
	}, [setTab])
	return (
		<Card className={className}>
			<CardHeader title="DNS Settings" onBack={onBack} />
			<DNSSettingsTabs value={tab} onChange={handleTabsChange} onSave={onSave} />
			{ tab === 'records' && <DNSRecordsTable records={DNS_RECORD_DATAS} /> }
		</Card>
	);
};
