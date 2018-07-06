// @flow
import React from 'react';

import { Container, CardContainer, Logo } from './Styles';
import FooterCard from './FooterCard';

type FooterInfo = Array<{
	heading: string,
	items: Array<string>
}>;

const footerInfo: FooterInfo = [
	{
		heading: 'Product',
		items: ['consectetur', 'sit', 'amet']
	},
	{
		heading: 'Contact',
		items: ['Lorem', 'ipsum', 'dolor', 'consectetur']
	},
	{
		heading: 'About Us',
		items: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur']
	}
];

const Footer = () => {
	return (
		<Container>
			<Logo src='image/FakeIcon.jpg' alt='Company Logo' />
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
