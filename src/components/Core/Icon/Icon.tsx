import { SVGProps } from 'react';
import IcoMoon, { iconList } from 'react-icomoon';
import { css } from '@emotion/css';
import { cn } from '../../../utils/cn';
import iconSet from './selection.json';
import { type IconNames } from './names';

export const ICON_NAMES = iconList(iconSet) as IconNames[];

export interface IconProps extends SVGProps<SVGElement> {
	icon: IconNames;
	className?: string;
}

const style = css`
	display: inline-block;
	width: 1em;
	height: auto;
`;

export const Icon = ({ className, ...props }: IconProps) => (
	<IcoMoon iconSet={iconSet} className={cn(style, className)} {...props} />
);
