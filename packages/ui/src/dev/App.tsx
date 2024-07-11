import React from 'react';
import { Button, SolidButton } from '../lib/components';
import iPhoneMaskSVG from '../lib/assets/iPhoneMask.svg?raw';
import { default as Done, ReactComponent as DoneIcon } from '../lib/assets/Done.svg';
import image from '../lib/assets/purple-cat.png';

import './index.css';

function App() {
	return (
		<h1>
			Vite is amazing!{' '}
			<Button
				onClick={() => {
					console.log({
						iPhoneMaskSVG,
						Done,
						DoneIcon,
						image,
					});
				}}>
				TestingApp <img src={Done} />
			</Button>
		</h1>
	);
}

export default App;
