import type { Meta, StoryObj } from '@storybook/react';
import OwnedDomains from '@components/OwnedDomains';
import { useSet } from '@uidotdev/usehooks';
import { useCallback } from 'react';

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
		]
	} as any,
	render(props:any) {
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
							{['.com', '.net','.org'].map((value) => (
								<OwnedDomains.Filter.Chip onClick={()=>handleTldClicked(value)} selected={set.has(value)}>
									{value}
								</OwnedDomains.Filter.Chip>
							))}
						</OwnedDomains.Filter>
						<OwnedDomains.Grid.Root>
							{props.domains.filter((domain)=>{
								if(!set.size) return  true;
								for(const tld of set.values()){
									if(domain.endsWith(tld)){
										return true
									}
								}
								return false
							}).map((domain, index) => (
									<OwnedDomains.Grid.Tile
										domainName={domain}
										status={'AVAILABLE'}
										expirationDate={new Date()}></OwnedDomains.Grid.Tile>
								))}
						</OwnedDomains.Grid.Root>
					</OwnedDomains.Root>
				</div>
			</div>
		);
	},
};
