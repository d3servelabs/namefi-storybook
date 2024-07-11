import type { Meta, StoryObj } from '@storybook/react';
import { OwnedDomains } from '@namefi/ui';
import { useSet } from '@uidotdev/usehooks';
import { useCallback } from 'react';
import { DomainCard } from '@namefi/ui';
import { centerTruncateString } from '@namefi/ui';

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
			<div className={'flex w-full items-center justify-center'}>
				<div className={'w-full max-w-[1272px]'}>
					<OwnedDomains.Root>
						<OwnedDomains.Filter title={'You Also Own'}>
							<p>DNS</p>
							{['.com', '.net', '.org'].map((value, i) => (
								<OwnedDomains.Filter.Chip
									key={i}
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
												status={DomainCard.StatusEnum.AVAILABLE}
											/>
										</DomainCard.Header>
										<DomainCard.Body>
											{centerTruncateString(domain, 24, '*')}
										</DomainCard.Body>
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
