import { AvailableOption } from './AvailableOptionTypes';

export type Result = {
	type: string;
	name: string;
	price: string;
	taken: boolean;
	offer: string;
	onSale: boolean;
};

export type SearchResult = {
	popular: Result[];
	suggested: Result[];
};

export const resultsMock: SearchResult = {
	popular: [
		{
			type: '.com',
			name: 'domain.com',
			price: 'Starting at $9.99 USD',
			taken: true,
			offer: '',
			onSale: false,
		},
		{
			type: '.com',
			name: 'domainloans.com',
			price: 'Starting at $19.99 USD',
			taken: false,
			offer: 'Premium Pricing',
			onSale: false,
		},
		{
			type: '.xyz',
			name: 'domain.xyz',
			price: 'Starting at $19.99 USD',
			taken: false,
			offer: '',
			onSale: false,
		},
		{
			type: '.xyz',
			name: 'domainsale.xyz',
			price: 'Starting at $14.99 USD',
			taken: false,
			offer: 'Limited Offer',
			onSale: true,
		},
		{
			type: '.org',
			name: 'nonprofit.org',
			price: 'Starting at $11.99 USD',
			taken: true,
			offer: 'Special Discount Available',
			onSale: false,
		},
		{
			type: '.shop',
			name: 'domainstore.shop',
			price: 'Starting at $15.99 USD',
			taken: false,
			offer: '',
			onSale: true,
		},
	],
	suggested: [
		{
			type: '.info',
			name: 'domain.info',
			price: 'Starting at $10.99 USD',
			taken: false,
			offer: '80% off',
			onSale: false,
		},
		{
			type: '.info',
			name: 'infodomain.info',
			price: 'Starting at $9.99 USD',
			taken: false,
			offer: 'Early Bird Offer',
			onSale: true,
		},
		{
			type: '.link',
			name: 'getlinked.link',
			price: 'Starting at $7.99 USD',
			taken: false,
			offer: '',
			onSale: true,
		},
		{
			type: '.link',
			name: 'premiumlink.link',
			price: 'Starting at $12.99 USD',
			taken: false,
			offer: 'Premium Access',
			onSale: false,
		},
		{
			type: '.tech',
			name: 'domaintech.tech',
			price: 'Starting at $12.99 USD',
			taken: false,
			offer: '',
			onSale: false,
		},
		{
			type: '.biz',
			name: 'businessdomain.biz',
			price: 'Starting at $6.99 USD',
			taken: false,
			offer: '50% off',
			onSale: true,
		},
	],
};

export const suggestionsMock: SearchResult = {
	popular: [
		{
			type: '.com',
			name: '.com',
			price: 'Starting at $9.99 USD',
			taken: false,
			offer: '',
			onSale: false,
		},
		{
			type: '.xyz',
			name: '.xyz',
			price: 'Starting at $19.99 USD',
			taken: false,
			offer: '',
			onSale: false,
		},

		{
			type: '.net',
			name: '.info',
			price: 'Starting at $9.99 USD',
			taken: false,
			offer: '',
			onSale: false,
		},
	],
	suggested: [
		{
			type: '.info',
			name: '.info',
			price: 'Starting at $10.99 USD',
			taken: false,
			offer: '80% off',
			onSale: false,
		},
		{
			type: '.link',
			name: '.link',
			price: 'Starting at $7.99 USD',
			taken: false,
			offer: '',
			onSale: true,
		},
		{
			type: '.club',
			name: '.club',
			price: 'Starting at $0.00',
			taken: false,
			offer: 'Free Trail',
			onSale: false,
		},
	],
};

export const defaultOptions: AvailableOption[] = [
	{ name: '.com', active: false },
	{ name: '.net', active: false },
	{ name: '.xyz', active: false },
	{ name: '.io', active: false },
];
