import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgGenerate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M18.93 2.633a1 1 0 0 0-1.86 0l-.69 1.748-1.747.689a1 1 0 0 0 0 1.86l1.748.69.689 1.747a1 1 0 0 0 1.86 0l.69-1.748 1.747-.689a1 1 0 0 0 0-1.86l-1.748-.69zM17.68 6a1 1 0 0 0 .32-.32 1 1 0 0 0 .32.32 1 1 0 0 0-.32.32 1 1 0 0 0-.32-.32m-6.25-.367a1 1 0 0 0-1.86 0L8.404 8.588a5 5 0 0 1-2.816 2.817L2.633 12.57a1 1 0 0 0 0 1.86l2.955 1.165a5 5 0 0 1 2.816 2.817l1.166 2.955a1 1 0 0 0 1.86 0l1.165-2.955a5 5 0 0 1 2.817-2.816l2.955-1.166a1 1 0 0 0 0-1.86l-2.955-1.165a5 5 0 0 1-2.817-2.817zm-1.165 3.688.235-.595.235.595a7 7 0 0 0 3.944 3.944l.595.235-.595.235a7 7 0 0 0-3.944 3.944l-.235.595-.235-.595a7 7 0 0 0-3.944-3.944l-.595-.235.595-.235a7 7 0 0 0 3.944-3.944" />
	</svg>
);
const ForwardRef = forwardRef(SvgGenerate);
const Memo = memo(ForwardRef);
export default Memo;
