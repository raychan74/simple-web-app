import React from 'react';

import {
	Container,
	Text,
	Avatar,
	Button
} from './Styles';

const Testimonial = () => {
	return (
		<Container>
			<Button>{'<'}</Button>
			<Avatar src='image/user-icon.jpg' />
			<Button>{'>'}</Button>
			
			<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex iusto expedita recusandae dolor perferendis blanditiis facere earum dolore! Placeat mollitia debitis nesciunt enim nemo qui repellendus repudiandae numquam velit!</Text>
		</Container>
	);
};

export default Testimonial;
