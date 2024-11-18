import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgTelegram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M19.532 4.116a1.36 1.36 0 0 1 1.428.203c.199.164.352.382.444.63.092.247.118.515.077.777l-2.144 13.621c-.208 1.314-1.584 2.067-2.735 1.413-.962-.548-2.391-1.391-3.677-2.271-.643-.441-2.612-1.852-2.37-2.856.208-.858 3.517-4.084 5.407-6.002.742-.753.404-1.188-.472-.495-2.177 1.72-5.67 4.338-6.826 5.074-1.019.65-1.55.76-2.185.65-1.16-.202-2.234-.515-3.111-.896-1.186-.515-1.128-2.222-.001-2.719z" />
	</svg>
);
const ForwardRef = forwardRef(SvgTelegram);
const Memo = memo(ForwardRef);
export default Memo;
