import  { cn }  from "@namefi/utils"

function GetNfscCardBody({ children, className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div className={cn('flex flex-col justify-start items-start gap-3', className)} {...props}>
			{children}
		</div>
	);
}

export default GetNfscCardBody;
