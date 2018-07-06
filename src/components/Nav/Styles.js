import styled from 'styled-components';

export const Container = styled.nav`
	display: grid;
	grid-template-columns: auto auto;
`;

export const Logo = styled.img`
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
	padding: 10px 0;

	&:visited {
		color: steelblue;
	}
`;
