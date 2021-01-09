import React from "react";
import styled from "styled-components";

export default function Welcome() {
	return (
		<form>
			<WelcomeDiv>
				<Title>Welcome!</Title>
				<ShopButton className="shop">Shop</ShopButton>
			</WelcomeDiv>
		</form>
	);
}

const Title = styled.h1`
	color: ${(props) => props.theme.tertiaryColor};
`;

const WelcomeDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
`;

const ShopButton = styled.button`
	margin: 30%;
	width: 50%;
	padding: 5%;
	background-color: ${(props) => props.theme.secondaryColor};
	border-color: ${(props) => props.theme.tertiaryColor};
	border-radius: 0.5rem;
	font-size: 1rem;
	color: ${(props) => props.theme.tertiaryColor};
`;
