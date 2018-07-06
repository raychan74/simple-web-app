import styled from 'styled-components';

export const Container = styled.nav`
	display: grid;
	grid-template-columns: 2fr 3fr;
	background: #f6f6f6;
	padding: 15px 0;
`;

export const Logo = styled.img`
	height: 70px;
	margin-left: 20px;

	@media (min-width: 576px) {
		margin-left: 70px;
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
`;
