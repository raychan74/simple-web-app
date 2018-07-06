// @flow
import React, { Component } from 'react';

import {
	Container,
	Logo,
	List,
	Link,
	MenuIcon
} from './Styles';
import Dropdown from './Dropdown';

type Props = {};

type State = {
	width: number,
	showSidebar: boolean
};

const navItems: Array<string> = ['Home', 'Products', 'About', 'News', 'Contact'];

class Nav extends Component<Props, State> {
	state = {
		width: 0,
		showSidebar: false
	};

	componentDidMount() {
		window.addEventListener('resize', this.updateWidth);
		this.setState({ width: window.innerWidth });
	}

	componentWillUnmount() {
		window.removeEventListener('resize');
	}

	updateWidth = () => {
		this.setState({ width: window.innerWidth, showSidebar: false });
		document.body.removeEventListener('click', this.turnOffSidebar);
	}

	turnOffSidebar = () => {
		this.setState({ showSidebar: false });
	}

	onClickMenu = () => {
		this.setState(({ showSidebar }) => ({ showSidebar: !showSidebar }));
		document.body.removeEventListener('click', this.turnOffSidebar);
	}

	renderNavigationList() {
		if (this.state.width >= 768) {
			return (
				<List length={navItems.length}>
					{navItems.map(item => <Link key={item} href={`#${item.toLowerCase()}`}>{item}</Link>)}
				</List>
			);
		}

		if (this.state.showSidebar) {
			document.body.classList.add('no-scroll');
			document.body.addEventListener('click', this.turnOffSidebar);

			return (
				<React.Fragment>
					<MenuIcon
						src='image/clear.svg'
						onClick={this.onClickMenu}
					/>
					<Dropdown navItems={navItems} />
				</React.Fragment>
			);
		}

		document.body.classList.remove('no-scroll');

		return (
			<MenuIcon
				src='image/menu.svg'
				onClick={this.onClickMenu}
			/>
		);
	}

	render() {
		return (
			<Container>
				<a href='#'>
					<Logo src='image/FakeIcon.jpg' alt='Company Logo' />
				</a>

				{this.renderNavigationList()}
			</Container>
		);
	}
}

export default Nav;
