import { DiscordIcon } from '../../components/Core/icons/DiscordIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { Xicon } from './icons/Xicon';
import React from 'react';
import linkedInSvg from "../../../public/assets/linkedin.svg";
import github1Svg from "../../../public/assets/github1.svg";

export type SocialLinksProps = {
	x?: string;
	discord?: string;
	telegram?: string;
	instagram?: string;
	github?: string;
	linkedIn?: string;
};
export const SocialLinks = ({ x, discord, telegram,instagram,linkedIn,github }:SocialLinksProps) => {
	return (
		<div className="h-10 relative flex items-center justify-center gap-1">
			{!!x && (
				<a className={'w-11 h-11 p-1'} href={x}>
					<Xicon className={'max-w-9 max-h-9'}  />
				</a>
			)}
			{!!discord && (
				<a className={'w-11 h-11 p-1'} href={discord}>
					<DiscordIcon className={'max-w-9 max-h-9'}  />
				</a>
			)}
			{!!telegram && (
				<a className={'w-11 h-11 p-1'} href={telegram}>
					<TelegramIcon className={'max-w-9 max-h-9'}  />
				</a>
			)}
			{ !!linkedIn && <a className={'w-11 h-11 p-1'} href={linkedIn}>
				<img src={linkedInSvg} alt="" className={'max-w-9 max-h-9'} />
			</a>
			}
			{ !!github &&
				<a className={'w-11 h-11 p-1'} href={github}>
				<img src={github1Svg} className={'max-w-9 max-h-9'} />
			</a>
			}
		</div>
	);
};
