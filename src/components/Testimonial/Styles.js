import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 76px auto 76px;
`;

export const Avatar = styled.img`
	border-radius: 50%;
	margin: 0 auto;
`;

export const Text = styled.p`
	margin: 0;
	grid-column: 1 / 4;
`;

export const Button = styled.button`
	border: 1px solid #ddd;
	box-shadow: 0 0 1px 1px #ccc;
	box-sizing: border-box;
	background: none;
	height: 36px;
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	align-self: center;
	margin: 0 20px;
`;
