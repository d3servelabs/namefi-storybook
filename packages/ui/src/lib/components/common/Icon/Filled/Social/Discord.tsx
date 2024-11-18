import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgDiscord = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M18.922 5.247A16.4 16.4 0 0 0 14.857 4a.09.09 0 0 0-.067.028c-.171.31-.371.712-.505 1.022a15.6 15.6 0 0 0-4.571 0 9 9 0 0 0-.515-1.022C9.188 4.01 9.16 4 9.132 4a16.5 16.5 0 0 0-4.067 1.247c-.01 0-.02.009-.029.018-2.59 3.815-3.304 7.526-2.952 11.2q0 .032.029.047a16.7 16.7 0 0 0 4.99 2.484c.029.01.057 0 .067-.019.38-.515.724-1.059 1.019-1.63a.057.057 0 0 0-.038-.085 12 12 0 0 1-1.562-.73c-.038-.02-.038-.076-.01-.104.105-.075.21-.16.315-.234a.06.06 0 0 1 .066-.01c3.277 1.472 6.81 1.472 10.048 0a.06.06 0 0 1 .067.01c.105.084.21.16.314.243.038.028.038.085-.01.104-.495.29-1.018.524-1.561.73-.038.01-.048.057-.038.085.304.572.647 1.115 1.019 1.63.028.01.057.02.085.01a16.6 16.6 0 0 0 5-2.484.05.05 0 0 0 .03-.047c.418-4.245-.696-7.929-2.953-11.2-.01-.009-.02-.018-.038-.018ZM8.684 14.226c-.98 0-1.8-.89-1.8-1.988 0-1.096.8-1.986 1.8-1.986 1.01 0 1.81.9 1.8 1.986 0 1.097-.8 1.988-1.8 1.988m6.638 0c-.98 0-1.8-.89-1.8-1.988 0-1.096.8-1.986 1.8-1.986 1.01 0 1.81.9 1.8 1.986 0 1.097-.79 1.988-1.8 1.988" />
	</svg>
);
const ForwardRef = forwardRef(SvgDiscord);
const Memo = memo(ForwardRef);
export default Memo;