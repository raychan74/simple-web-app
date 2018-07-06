import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	padding-top: 50px;
	background: #f6f6f6;

	@media (min-width: 768px) {
		grid-template-columns: 35% auto auto auto;
		grid-gap: 20px;
		padding: 70px 20px 20px 20px;
	}
`;

export const CardContainer = styled.div`
	text-align: center;
`;

export const CardHeading = styled.h3`
	font-size: 24px;
	background: #b1bbd8;
	margin: 0;
	padding: 16px 0;

	@media (min-width: 768px) {
		background: #eee;
		margin: 0 auto;
	}
`;

export const Link = styled.a`
	display: block;
	text-decoration: none;
	padding: 10px;
	margin: 0 auto;
	font-size: 18px;
	background: #dadada;
	color: black;

	&:visited {
		color: black;
	}

	&:nth-child(odd) {
		background: #ddd;
	}

	@media (min-width: 768px) {
		background: none;

		&:nth-child(odd) {
			background: none;
		}
	}
`;

export const Logo = styled.img`
	margin: 0 auto 30px auto;
	height: 100px;

	@media (min-width: 768px) {
		margin: 0 auto;
	}
`;
