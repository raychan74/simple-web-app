import styled from 'styled-components';

export const HeroContainer = styled.div`
	background: url('image/hero.jpg');
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 60vh;

	@media (min-width: 768px) {
		height: 80vh;
	}
`;
