import { cn } from '../../../utils/cn';

function GetNfscCardHeader({ children, className, ...props }: React.ComponentProps<'h2'>) {
	return (
		<div className={cn('flex w-full h-fit justify-start items-center', className)} {...props}>
			{children}
		</div>
	);
}

export default GetNfscCardHeader;
