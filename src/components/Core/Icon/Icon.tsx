import { SVGProps } from 'react';
import IcoMoon, { iconList } from 'react-icomoon';
import { css } from '@emotion/css';
import { cn } from '../../../utils/cn';
import iconSet from './selection.json';
import { type IconNames as IconName } from './names';

export { type IconName };

export const ICON_NAMES = iconList(iconSet) as IconName[];

export const isIconName = (icon: string): icon is IconName => ICON_NAMES.includes(icon as IconName);

export interface IconProps extends SVGProps<SVGElement> {
	icon: IconName;
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
