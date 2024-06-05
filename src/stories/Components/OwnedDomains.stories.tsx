import type { Meta, StoryObj } from '@storybook/react';
import OwnedDomains from '../../components/Templates/OwnedDomains';
import { useSet } from '@uidotdev/usehooks';
import { useCallback } from 'react';
import { DomainCard } from '../../components';
import { DomainStatusEnum } from '../../components/Templates/DomainCard/DomainStatus';
import centerTruncateString from "../../utils/centerTruncateString";

const meta = {
	title: 'Components/OwnedDomains',
	component: OwnedDomains.Root,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof OwnedDomains.Root>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		domains: [
			'example.com',
			'example.org',
			'example.net',
			'example-01.com',
			'example-01.org',
			'example-01.net',
			'example-02.com',
			'example-02.org',
			'example-02.net',
		],
	} as any,
	render(props: any) {
		const set = useSet<string>();
		const handleTldClicked = useCallback(
			(tld) => {
				if (!set.delete(tld)) set.add(tld);
			},
			[set],
		);

		return (
			<div className={'w-full  flex items-center justify-center'}>
				<div className={'max-w-[1272px] w-full'}>
					<OwnedDomains.Root>
						<OwnedDomains.Filter title={'You Also Own'}>
							<p>DNS</p>
							{['.com', '.net', '.org'].map((value) => (
								<OwnedDomains.Filter.Chip
									onClick={() => handleTldClicked(value)}
									selected={set.has(value)}>
									{value}
								</OwnedDomains.Filter.Chip>
							))}
						</OwnedDomains.Filter>
						<OwnedDomains.Grid.Root>
							{props.domains
								.filter((domain) => {
									if (!set.size) return true;
									for (const tld of set.values()) {
										if (domain.endsWith(tld)) {
											return true;
										}
									}
									return false;
								})
								.map((domain, index) => (
									<DomainCard.Root small>
										<DomainCard.Header>
											<DomainCard.Status
												status={DomainStatusEnum.AVAILABLE}
											/>
										</DomainCard.Header>
										<DomainCard.Body>{centerTruncateString(domain,24,'*')}</DomainCard.Body>
										<DomainCard.Footer>
											<DomainCard.ExpirationAndLock
												expirationDate={new Date()}
											/>
										</DomainCard.Footer>
									</DomainCard.Root>
								))}
						</OwnedDomains.Grid.Root>
					</OwnedDomains.Root>
				</div>
			</div>
		);
	},
};
