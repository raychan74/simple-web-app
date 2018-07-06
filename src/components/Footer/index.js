// @flow
import React from 'react';

import { Container, CardContainer } from './Styles';
import FooterCard from './FooterCard';

type FooterInfo = Array<{
	heading: string,
	items: Array<string>
}>;

const footerInfo: FooterInfo = [
	{
		heading: 'About Us',
		items: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur']
	},
	{
		heading: 'Product',
		items: ['sit', 'amet', 'consectetur']
	},
	{
		heading: 'Contact',
		items: ['Lorem', 'ipsum', 'dolor', 'consectetur']
	},
];

const Footer = () => {
	return (
		<Container>
			{footerInfo.map(cardInfo => {
				return (
					<CardContainer key={cardInfo.heading}>
						<FooterCard cardInfo={cardInfo} />
					</CardContainer>
				);
			})}
		</Container>
	);
};

export default Footer;
