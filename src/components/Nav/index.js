// @flow
import React from 'react';

import {
	Container,
	Logo,
	List,
	Link
} from './Styles';

const navItems: Array<string> = ['Home', 'Products', 'About', 'News', 'Contact'];

const Nav = () => {
	return (
		<Container>
			<Logo src='#' alt='Company Logo' />
			<List length={navItems.length}>
				{navItems.map(item => <Link key={item} href={`#${item.toLowerCase()}`}>{item}</Link>)}
			</List>
		</Container>
	);
};

export default Nav;
