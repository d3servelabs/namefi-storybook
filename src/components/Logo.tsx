import React from 'react';
import myImage from '../assets/namefi-white-bgTransparent.svg'; // Importing the image

export class Logo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<img src={myImage} alt={'logo'} className={'h-9'} />
		);
	}
}
