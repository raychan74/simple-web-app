import React from 'react';

import {
	ProductCard,
	TextContainer,
	Icon,
	Text,
	TextHeading,
	ProductImage
} from './Styles';

const Product = () => {
	return (
		<ProductCard>
			<ProductImage src='image/product-min.jpg' alt='product image' />
			<TextContainer>
				<TextHeading>Awesome Cutting Edge Product</TextHeading>

				<Icon src='image/1device.svg' />
				<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>					

				<Icon src='image/1sort.svg' />
				<Text>Temporibus, totam minus soluta sed reiciendis Harum, blanditiis, repellendus</Text>					

				<Icon src='image/1usb.svg' />
				<Text>Nesciunt recusandae fugit enim magnam eum quaerat molestiae!</Text>					

				<Icon src='image/1data.svg' />
				<Text>Facilis corporis eaque obcaecati mollitia hic, neque consectetur odit molestias!</Text>
			</TextContainer>
		</ProductCard>
	);
};

export default Product;
