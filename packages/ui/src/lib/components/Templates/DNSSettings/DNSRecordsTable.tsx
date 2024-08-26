import React, { useCallback, useMemo, useState } from 'react';
import { Checkbox } from '../../Core/Checkbox';
import { IconCircleButton } from '../../Core/Buttons/IconCircleButton';
import { cn } from '../../../utils/cn';
import { AddIcon } from '../../Core/icons/Add';
import { DownloadIcon } from '../../Core/icons/Download';
import { DeleteIcon } from '../../Core/icons/Delete';
import { css } from '@emotion/css';

const DNSRecordTableRowsGroup = css`
	display: grid;
	grid-template-columns:
		36px
		minmax(60px, 1fr)
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
			<div className="mb-1.5 min-h-[30px] overflow-hidden truncate break-words p-2 leading-4">
				<Checkbox
					className="opacity-30 transition hover:opacity-100"
					// value={checked}
					// onChange={handleCheckChange}
				/>
			</div>
			<div className="mb-1.5 min-h-[30px] overflow-hidden truncate break-words p-2 leading-4">
				{record.type}
			</div>
			<div className="mb-1.5 min-h-[30px] overflow-hidden truncate break-words p-2 leading-4">
				{record.name}
			</div>
			<div className="mb-1.5 min-h-[30px] overflow-hidden truncate break-words p-2 leading-4">
				{record.content}
			</div>
			<div className="mb-1.5 min-h-[30px] overflow-hidden truncate break-words p-2 leading-4">
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
		<div className="flex justify-end gap-x-2 py-4 pr-[30px]">
			<IconCircleButton icon={<AddIcon />} onClick={handleClickAdd} />
			<IconCircleButton
				icon={<DownloadIcon />}
				onClick={handleClickDownload}
				disabled={!hasRowsSelected}
			/>
			<IconCircleButton
				icon={<DeleteIcon />}
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
				'flex w-full flex-1 flex-col overflow-hidden rounded-[10px] bg-black-900 pl-2 pt-2 font-primary',
				className,
			)}>
			<div
				className={cn(
					DNSRecordTableRowsGroup,
					'bg-black-900 pr-[14px] text-xs text-black-400',
				)}>
				<div className="mb-1.5 min-h-[30px] p-2 text-left leading-4"></div>
				<div className="mb-1.5 min-h-[30px] p-2 text-left leading-4">Type</div>
				<div className="mb-1.5 min-h-[30px] p-2 text-left leading-4">Host</div>
				<div className="mb-1.5 min-h-[30px] p-2 text-left leading-4">Points to</div>
				<div className="mb-1.5 min-h-[30px] p-2 text-left leading-4">TTL(s)</div>
			</div>
			<div
				className={cn(
					DNSRecordTableRowsGroup,
					'contents flex-1 overflow-y-scroll text-sm text-black-500',
				)}>
				{records.map((record) => (
					<DNSRecordsTableRow
						key={record.id}
						record={record}
						selectedRows={selectedRows}
						onSelectedRowsChange={setSelectedRows}
					/>
				))}
			</div>
			<DNSRecordsTableFooter
				selectedRows={selectedRows}
				onClickAdd={handleClickAdd}
				onClickDownload={handleClickDownload}
				onClickDelete={handleClickDelete}
			/>
		</div>
	);
};
