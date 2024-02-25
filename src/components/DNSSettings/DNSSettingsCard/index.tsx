import { cn } from '@utils/cn';
import React, { useCallback } from 'react';
import styled from '@emotion/styled';

const CardHeaderStyle = styled.div`
`

const CardHeader = ({ title, onBack }: { title: React.ReactNode, onBack?: () => void }) => {
	const handleClickBack = useCallback(() => {
		if (!onBack) {
			return;
		}
		onBack();	
	}, [onBack])
	return <CardHeaderStyle>
		<div className="flex mb-2">
			<img onClick={handleClickBack} className="block w-[22px] cursor-pointer" src="/assets/arrow-left.svg" alt="Arrow" role="img" />
		</div>
		<div className="text-white text-lg font-bold font-['Roboto'] leading-8 tracking-wide mb-3 w-full">
			{title}
		</div>
	</CardHeaderStyle>
}

const DNSSettingsTabs = ({ onSave }: { onSave?: () => void}) => {
	const handleClickSave = useCallback(() => {
		if (!onSave) {
			return;
		}
		onSave();	
	}, [onSave])
	return <div className="flex justify-between mb-3.5">
		<div className="flex-1 flex gap-x-6 text-sm font-medium text-black-400">	
			<div className="cursor-pointer font-semibold text-primary-500">
				DNS Records
			</div>
			<div className="cursor-pointer">
				URL Forwarding
			</div>
			<div className="cursor-pointer">
				Nameservers
			</div>
		</div>
		<div className="flex text-brand-300">
			<div className="flex cursor-pointer" onClick={handleClickSave}>
				<span className="mr-1.5">Save</span>
				<img className="block w-[22px] cursor-pointer" src="/assets/arrow-right1.svg" alt="Arrow" role="img" />	
				</div>
			</div>
	</div>
}

const DNSRecordsFooter = ({ onSave }: { onSave?: () => void}) => {
	const handleClickSave = useCallback(() => {
		if (!onSave) {
			return;
		}
		onSave();	
	}, [onSave])
	return <div className="flex justify-end pr-[30px] py-4 gap-x-2">
		<button className="flex justify-center items-center w-7 h-7 rounded-full bg-[#48E59B33] cursor-pointer">
			<img className="block w-[16px] cursor-pointer" src="/assets/Update.svg" alt="Update" role="img" />	
		</button>
		<button className="flex justify-center items-center w-7 h-7 rounded-full bg-[#48E59B33] cursor-pointer opacity-30">
			<img className="block w-[16px] cursor-pointer" src="/assets/Update.svg" alt="Update" role="img" />	
		</button>
		<button className="flex justify-center items-center w-7 h-7 rounded-full bg-[#48E59B33] cursor-pointer opacity-30">
			<img className="block w-[16px] cursor-pointer" src="/assets/Update.svg" alt="Update" role="img" />	
		</button>
	</div>
}

const DNSRecordRows = styled.div`
	display: grid;	
	grid-template-columns:
		minmax(80px, 1fr)
		minmax(140px, 2fr)
		minmax(140px, 2fr)
		minmax(80px, 1fr);
`

const DNSRecordsTable = () => {
	return <div className="flex flex-col overflow-hidden bg-black-900 rounded-[10px] font-primary">
		<DNSRecordRows className="text-xs text-black-400 bg-black-900 pr-[14px]">
				<div className="p-4 text-left">Type</div>
				<div className="p-4 text-left">Host</div>
				<div className="p-4 text-left">Points to</div>
				<div className="p-4 text-left">TTL(s)</div>
		</DNSRecordRows>
		<DNSRecordRows className="flex-1 contents text-sm overflow-y-scroll text-black-500">
			<div className="contents">
				<div className="p-4 break-words overflow-hidden truncate">A</div>
				<div className="p-4 break-words overflow-hidden truncate">namefinamefinamefinamefinamefinamefi.com</div>
				<div className="p-4 break-words overflow-hidden truncate">24.199.74.33</div>
				<div className="p-4 break-words overflow-hidden truncate">3600</div>
			</div>
			<div className="contents">
				<div className="p-4 break-words overflow-hidden truncate">AAAAA</div>
				<div className="p-4 break-words overflow-hidden truncate">namefi.com</div>
				<div className="p-4 break-words overflow-hidden truncate">24.199.74.33</div>
				<div className="p-4 break-words overflow-hidden truncate">3600</div>
			</div>
			<div className="contents">
				<div className="p-4 break-words overflow-hidden truncate">NS</div>
				<div className="p-4 break-words overflow-hidden truncate">namefi.com</div>
				<div className="p-4 break-words overflow-hidden truncate">24.199.74.33</div>
				<div className="p-4 break-words overflow-hidden truncate">3600</div>
			</div>
			<div className="contents">
				<div className="p-4 break-words overflow-hidden truncate">SOA</div>
				<div className="p-4 break-words overflow-hidden truncate">namefi.com</div>
				<div className="p-4 break-words overflow-hidden truncate">24.199.74.33</div>
				<div className="p-4 break-words overflow-hidden truncate">3600</div>
			</div>
			<div className="contents">
				<div className="p-4 break-words overflow-hidden truncate">SOA</div>
				<div className="p-4 break-words overflow-hidden truncate">namefi.com</div>
				<div className="p-4 break-words overflow-hidden truncate">24.199.74.33</div>
				<div className="p-4 break-words overflow-hidden truncate">3600</div>
			</div>
		</DNSRecordRows>
		<DNSRecordsFooter />
		</div>
		{/* <div className="overflow-hidden bg-black-900 rounded-[10px]">
		<table className="block min-w-[544px] w-full h-full font-primary text-sm border-spacing-0">
		<thead className="block text-xs text-black-400 bg-black-900">
			<tr>
				<th className="p-4 w-1/6 text-left">Type</th>
				<th className="p-4 w-1/3 text-left">Host</th>
				<th className="p-4 w-1/3 text-left">Points to</th>
				<th className="p-4 w-1/6 text-left">TTL(s)</th>
			</tr>
		</thead>
		<tbody className="block max-h-48 overflow-y-auto text-black-500">
			<tr>
				<td className="p-4 break-words text-ellipsis">A</td>
				<td className="p-4 break-words text-ellipsis">namefi.com</td>
				<td className="p-4 break-words text-ellipsis">24.199.74.33</td>
				<td className="p-4 break-words text-ellipsis">3600</td>
			</tr>
			<tr>
				<td className="p-4 break-words text-ellipsis">AAAAA</td>
				<td className="p-4 break-words text-ellipsis">namefi.com</td>
				<td className="p-4 break-words text-ellipsis">24.199.74.33</td>
				<td className="p-4 break-words text-ellipsis">3600</td>
			</tr>
			<tr>
				<td className="p-4 break-words text-ellipsis">NS</td>
				<td className="p-4 break-words text-ellipsis">namefi.com</td>
				<td className="p-4 break-words text-ellipsis">24.199.74.33</td>
				<td className="p-4 break-words text-ellipsis">3600</td>
			</tr>
			<tr>
				<td className="p-4 break-words text-ellipsis">SOA</td>
				<td className="p-4 break-words text-ellipsis">namefi.com</td>
				<td className="p-4 break-words text-ellipsis">24.199.74.33</td>
				<td className="p-4 break-words text-ellipsis">3600</td>
			</tr>
			<tr>
				<td className="p-4 break-words text-ellipsis">SOA</td>
				<td className="p-4 break-words text-ellipsis">namefi.com</td>
				<td className="p-4 break-words text-ellipsis">24.199.74.33</td>
				<td className="p-4 break-words text-ellipsis">3600</td>
			</tr>
		</tbody>
		</table>
	</div> */}
}


export const DNSSettingsCard = ({
	children,
	className,
	onBack,
	onSave,
	...props
}: React.ComponentProps<'div'> & { children?: React.ReactNode, onBack?: () => void, onSave?: () => void }) => {
	return (
		<div
			{...props}
			className={cn('max-w-[613px] max-h-[472px] w-full h-full rounded-5 bg-[#222B27] pt-6 pb-12 px-9 overflow-hidden flex flex-col', className)}>
			<CardHeader title="DNS Settings" onBack={onBack} />
			<DNSSettingsTabs onSave={onSave} />
			<DNSRecordsTable />
		</div>
	);
};
