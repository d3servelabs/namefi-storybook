import { cn } from '../../../utils/cn';

function GetNfscCardRoot({ children, className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'flex flex-col justify-start items-center rounded-3.75 gap-3 py-9 px-11.5 bg-black-1000 max-w-[613px] min-h-[581px]',
				className,
			)}
			{...props}>
			{children}
		</div>
	);
}

export default GetNfscCardRoot;
