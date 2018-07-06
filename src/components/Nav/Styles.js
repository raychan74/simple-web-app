import styled from 'styled-components';

export const Container = styled.nav`
	display: grid;
	grid-template-columns: 7fr 13fr;
	background: #f6f6f6;
	padding: 15px;
	box-sizing: border-box;
`;

export const Logo = styled.img`
	height: 70px;
	margin-left: 10px;

	@media (min-width: 576px) {
		margin-left: 50px;
	}
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(${props => props.length}, auto);
	text-align: center;
	list-style-type: none;
	padding-left: 0;
`;

export const Link = styled.a`
	cursor: pointer;
	text-decoration: none;
	padding: 10px 5px;
	margin: 0 10px
	font-size: 18px
	border-radius: 5px;
	color: #3d79aa;

	&:hover {
		background: #e6e6e6;
	}

	&:visited {
		color: #3d79aa;
	}

	@media (min-width: 992px) {
		font-size: 20px;
	}
`;

export const MenuIcon = styled.img`
	cursor: pointer;
	height: 48px;
	align-self: center;
	justify-self: end;
	margin-right: 10px;

	@media (min-width: 576px) {
		margin-right: 20px;
	}
`;

export const DropdownList = styled.ul`
	display: grid;
	background: rgba(230,230,230,0.9);
	position: absolute;
	top: 104px;
	margin: 0;
	padding: 0;
	width: 100%;
	height: calc(100% - 88px);
	align-items: center;
	zIndex: 1;
	overflow: auto;
`;

export const DropdownItem = styled.a`
	text-decoration: none;
	color: #1086e8;
	font-size: 24px;
	font-family: cursive;
	padding: 20px 30px;

	@media (min-width: 576px) {
		padding-left: 70px;
	}
`;
