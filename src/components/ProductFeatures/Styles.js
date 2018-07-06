import styled from 'styled-components';

export const ProductFeaturesContainer = styled.div`
	display: grid;
	padding: 0 0 40px 0;

	@media (min-width: 600px) {
		grid-template-columns: auto auto;
	}

	@media (min-width: 1000px) {
		grid-template-columns: auto auto auto;
	}
`;

export const FeatureCard = styled.div`
	display: grid;
	grid-template-rows: 48px auto
	margin: 45px 30px 0 30px;
`;

export const Icon = styled.img`
	height: 48px;
	margin: 0 auto;
`;

export const Text = styled.p`
	margin-top: 20px;
	font-size: 16px;
	font-family: cursive;
`;
