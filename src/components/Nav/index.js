// @flow
import React, { Component } from 'react';

import {
	Container,
	Logo,
	List,
	Link
} from './Styles';

type Props = {};

type State = { width: number };

const navItems: Array<string> = ['Home', 'Products', 'About', 'News', 'Contact'];

class Nav extends Component<Props, State> {
	state = { width: 0 };

	componentDidMount() {
		window.addEventListener('resize', this.updateWidth);
		this.setState({ width: window.innerWidth });
	}

	componentWillUnmount() {
		window.removeEventListener('resize');
	}

	updateWidth = () => {
		this.setState({ width: window.innerWidth });
	}

	render() {
		console.log(this.state.width);

		return (
			<Container>
				<Logo src='image/FakeIcon.jpg' alt='Company Logo' />
				{this.state.width >= 768 ? (
					<List length={navItems.length}>
						{navItems.map(item => <Link key={item} href={`#${item.toLowerCase()}`}>{item}</Link>)}
					</List>
				) : (
					<div style={{ height: 70 }}>Hamburger</div>
				)}
			</Container>
		);
	}
}

export default Nav;
