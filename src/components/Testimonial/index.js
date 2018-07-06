import React from 'react';

import {
	Container,
	Text,
	Avatar,
	LeftChevron,
	RightChevron
} from './Styles';

const Testimonial = () => {
	return (
		<Container>
			<LeftChevron src='image/left.svg' />
			<Avatar src='image/user-icon.jpg' />
			<RightChevron src='image/right.svg' />
			
			<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex iusto expedita recusandae dolor perferendis blanditiis facere earum dolore! Placeat mollitia debitis nesciunt enim nemo qui repellendus repudiandae numquam velit!</Text>
		</Container>
	);
};

export default Testimonial;
