import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SeoSearchEngine = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Analyze base on which Search Engine (SE) </Title>

				<CardHold>
					<MyLink to='/seochecker/search'>
						<Card>
							<Logo />
							<Text>Google</Text>
						</Card>
					</MyLink>
				</CardHold>
			</Wrapper>
		</Container>
	);
};

export default SeoSearchEngine;

const MyLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const Text = styled.div`
	font-weight: 500;
	font-size: 20px;
`;

const Logo = styled.div`
	height: 50px;
	width: 50px;
	background-color: red;
	margin-bottom: 10px;
`;

const Card = styled.div`
	height: 170px;
	width: 250px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const CardHold = styled.div`
	margin-top: 20px;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
`;

const Container = styled.div`
	min-width: calc(100vw - 240px);
	min-height: calc(100vh - 60px);
	display: flex;
	overflow: hidden;

	/* justify-content: space-between; */
	/* align-items: center; */
	flex-direction: column;
	background-color: #f8f8ff;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
	/* flex-direction: column; */
`;
