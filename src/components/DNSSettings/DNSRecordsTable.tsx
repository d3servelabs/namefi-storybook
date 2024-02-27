import React, { useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { Checkbox } from '@components/Checkbox';
import { IconCircleButton } from '@components/Buttons/IconCircleButton';
import { cn } from '@utils/cn';
import PlusIconSource from '/assets/Plus.svg';
import DownloadIconSource from '/assets/Download.svg';
import DeleteIconSource from '/assets/Trash.svg';

const DNSRecordTableRowsGroup = styled.div`
	display: grid;
	grid-template-columns:
		48px
		minmax(80px, 1fr)
		minmax(140px, 2fr)
		minmax(140px, 2fr)
		minmax(80px, 1fr);
`;

export interface DNSRecordData {
	id: string;
	type: string;
	name: string;
	content: string;
	ttl: number;
}

const DNSRecordsTableRow = ({
	record,
	selectedRows,
	onSelectedRowsChange,
}: {
	record: DNSRecordData;
	selectedRows: DNSRecordData[];
	onSelectedRowsChange: (rows: DNSRecordData[]) => void;
}) => {
	const checked = useMemo(
		() => !!selectedRows.find((row) => row.id === record.id),
		[record, selectedRows],
	);
	const handleCheckChange = useCallback(
		(value: boolean) => {
			onSelectedRowsChange(
				value
					? [...selectedRows, record]
					: selectedRows.filter((row) => row.id !== record.id),
			);
		},
		[record, selectedRows, onSelectedRowsChange],
	);
	return (
		<div className="contents">
			<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">
				<Checkbox className="transition opacity-30 hover:opacity-100" value={checked} onChange={handleCheckChange} />
			</div>
			<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">
				{record.type}
			</div>
			<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">
				{record.name}
			</div>
			<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">
				{record.content}
			</div>
			<div className="min-h-[30px] p-2 mb-1.5 leading-4 break-words overflow-hidden truncate">
				{record.ttl}
			</div>
		</div>
	);
};

const DNSRecordsTableFooter = ({
	selectedRows,
	onClickAdd,
	onClickDownload,
	onClickDelete,
}: {
	selectedRows: DNSRecordData[];
	onClickAdd?: () => void;
	onClickDownload?: () => void;
	onClickDelete?: () => void;
}) => {
	const hasRowsSelected = useMemo(() => selectedRows.length > 0, [selectedRows]);
	const handleClickAdd = useCallback(() => {
		onClickAdd?.();
	}, [onClickAdd]);
	const handleClickDownload = useCallback(() => {
		onClickDownload?.();
	}, [onClickDownload]);
	const handleClickDelete = useCallback(() => {
		onClickDelete?.();
	}, [onClickDelete]);
	return (
		<div className="flex justify-end pr-[30px] py-4 gap-x-2">
			<IconCircleButton iconSource={PlusIconSource} onClick={handleClickAdd} />
			<IconCircleButton
				iconSource={DownloadIconSource}
				onClick={handleClickDownload}
				disabled={!hasRowsSelected}
			/>
			<IconCircleButton
				iconSource={DeleteIconSource}
				onClick={handleClickDelete}
				disabled={!hasRowsSelected}
			/>
		</div>
	);
};

export interface DNSRecordsTableProps {
	records: DNSRecordData[];
	onAdd?: () => void;
	onDownload?: (selectedRecords: DNSRecordData[]) => void;
	onDelete?: (selectedRecords: DNSRecordData[]) => void;
	className?: string;
}
export const DNSRecordsTable = ({
	records,
	onAdd,
	onDownload,
	onDelete,
	className,
}: DNSRecordsTableProps) => {
	const [selectedRows, setSelectedRows] = useState<DNSRecordData[]>([]);
	const handleClickAdd = useCallback(() => {
		onAdd?.();
	}, [onAdd]);
	const handleClickDownload = useCallback(() => {
		onDownload?.(selectedRows);
	}, [onDownload, selectedRows]);
	const handleClickDelete = useCallback(() => {
		onDelete?.(selectedRows);
	}, [onDelete, selectedRows]);
	return (
		<div
			className={cn(
				'flex flex-col overflow-hidden bg-black-900 rounded-[10px] font-primary pl-2 pt-2',
				className,
			)}>
			<DNSRecordTableRowsGroup className="text-xs text-black-400 bg-black-900 pr-[14px]">
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left"></div>
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left">Type</div>
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left">Host</div>
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left">Points to</div>
				<div className="min-h-[30px] p-2 mb-1.5 leading-4 text-left">TTL(s)</div>
			</DNSRecordTableRowsGroup>
			<DNSRecordTableRowsGroup className="flex-1 contents text-sm overflow-y-scroll text-black-500">
				{records.map((record) => (
					<DNSRecordsTableRow
						key={record.id}
						record={record}
						selectedRows={selectedRows}
						onSelectedRowsChange={setSelectedRows}
					/>
				))}
			</DNSRecordTableRowsGroup>
			<DNSRecordsTableFooter
				selectedRows={selectedRows}
				onClickAdd={handleClickAdd}
				onClickDownload={handleClickDownload}
				onClickDelete={handleClickDelete}
			/>
		</div>
	);
};
