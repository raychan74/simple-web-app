import styled from 'styled-components';

export const ProductCard = styled.div`
	display: grid;
	background: #eeeff2;
	align-items: center;

	@media (min-width: 768px) {
		grid-template-columns: auto auto;
	}
`;

export const ProductImage = styled.img`
	width: 100%;
	margin: 0 auto;


	@media (min-width: 400px) {
		width: 300px;
	}
`;

export const TextContainer = styled.div`
	display: grid;
	grid-template-columns: 36px auto;
	margin: 30px;
`;

export const TextHeading = styled.h3`
	font-size: 2em;
	align-self: center;
	margin: 15px 0 15px 0;
	grid-column: 1 / 3;
`;

export const Icon = styled.img`
	width: 100%;
	align-self: center;
`;

export const Text = styled.p`
	margin: 20px 0 20px 25px;
	font-size: 1em;
`;
