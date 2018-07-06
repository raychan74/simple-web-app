import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 48px auto 48px;
	padding: 20px 5px 20px 5px;
	background: #b1c8c9;
	grid-template-areas:
		'left avatar right'
		'left text right';

	@media (min-width: 572px) {
		padding: 20px 30px 20px 30px;
	}

	@media (min-width: 768px) {
		grid-template-columns: 76px 128px auto 76px;
		grid-template-areas:
			'left avatar text right';
	}
`;

export const Avatar = styled.img`
	border-radius: 50%;
	margin: 30px auto;
	grid-area: avatar;
`;

export const Text = styled.p`
	margin: 0;
	grid-column: 1 / 4;
	grid-area: text;
	font-size: 18px;

	@media (min-width: 768px) {
		margin-left: 30px;
		align-self: center;
	}
`;

export const LeftChevron = styled.img`
	height: 48px;
	align-self: center;
	margin: 0 auto;
	cursor: pointer;
	grid-area: left;

	@media (max-width: 576px) {
		height: 24px;
	}
`;

export const RightChevron = styled.img`
	height: 48px;
	align-self: center;
	margin: 0 auto;
	cursor: pointer;
	grid-area: right;

	@media (max-width: 576px) {
		height: 24px;
	}
`;
