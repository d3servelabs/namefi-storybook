import React from 'react';

export const SaferIcon = React.memo<{ className }>(
	({ className }) => {
		return (
			<svg
				className={className}
				width="100"
				height="101"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M87.3692 21.6443L36.7424 17.5132C35.5997 17.4253 34.3692 17.7769 33.4903 18.5679C32.6113 19.359 31.9961 20.4138 31.9082 21.6443L31.3808 28.4123H72.0757C76.9977 28.4123 81.0409 32.4555 81.0409 37.3777V64.0981L83.9414 64.3617C84.0293 64.3617 84.205 64.3617 84.2929 64.3617C85.3477 64.3617 86.4024 64.0102 87.1934 63.307C88.0724 62.5159 88.6876 61.4612 88.7755 60.2306L91.5002 26.4786C91.676 24.0175 89.8302 21.8201 87.3692 21.6443Z"
					fill="#313131"
				/>
				<path
					d="M58.01 63.2189C58.801 64.4494 60.1195 65.2405 61.6136 65.2405C63.9868 65.2405 65.9205 63.3068 65.9205 60.9336C65.9205 58.5604 63.9868 56.6267 61.6136 56.6267C60.1195 56.6267 58.801 57.4177 58.0979 58.5604C57.3068 57.3299 55.9884 56.5388 54.4942 56.5388C52.1211 56.5388 50.1874 58.4725 50.1874 60.8457C50.1874 63.2189 52.1211 65.1526 54.4942 65.1526C55.9884 65.1526 57.3069 64.3615 58.01 63.2189Z"
					fill="#313131"
				/>
				<path
					d="M72.0743 32.8947H21.2716C18.8106 32.8947 16.789 34.9163 16.789 37.3774V56.3629C17.6679 56.0993 18.6348 56.0114 19.5137 56.0114C20.129 56.0114 20.6563 56.0993 21.2716 56.1872V50.5618H72.0743V71.3053H34.192C34.8073 72.4479 35.1588 73.7663 35.1588 75.1727V75.788H72.0743C74.5353 75.788 76.5568 73.7663 76.5568 71.3053V37.3774C76.5568 34.9163 74.5353 32.8947 72.0743 32.8947ZM21.2716 42.7391V37.3774H72.0743V42.7391H21.2716Z"
					fill="#313131"
				/>
				<path
					d="M27.1608 70.6903V67.6139C27.1608 63.3949 23.7329 59.9669 19.514 59.9669C15.383 60.0548 11.9552 63.4828 11.9552 67.6139V70.6024C9.75782 70.8661 7.99995 72.7998 7.99995 75.0851V84.9294C7.99995 87.3905 10.0215 89.5 12.5704 89.5H26.6334C29.0945 89.5 31.2039 87.4784 31.2039 84.9294V75.173C31.116 72.7998 29.3582 70.954 27.1608 70.6903ZM15.8225 67.6139C15.8225 65.5044 17.4925 63.8344 19.6019 63.8344C21.7114 63.8344 23.3814 65.5044 23.3814 67.6139V70.6024H15.8225V67.6139ZM24.2603 78.9525L19.8656 83.3473C19.6019 83.611 19.1625 83.7868 18.8109 83.7868C18.4593 83.7868 18.0198 83.611 17.7562 83.3473L14.9436 80.6225C14.3283 80.0072 14.3283 79.0404 14.9436 78.4251C15.5588 77.8098 16.5257 77.8098 17.1409 78.4251L18.8109 80.0951L22.1509 76.7551C22.7661 76.1398 23.7329 76.1398 24.3482 76.7551C24.8756 77.3704 24.8756 78.3372 24.2603 78.9525Z"
					fill="#313131"
				/>
			</svg>
		);
	},
	(p, c) => p.className === c.className,
);
