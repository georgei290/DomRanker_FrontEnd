import React from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import InputComp from "../../../utils/ReusedComp/InputComp";

import pic from "../images/keypoint.svg";

const SeoChecker = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Seo Checker</Title>
				<Span>Find the most profitable keywords to rank for</Span>

				<InputComp />
				<hr />
				<EmptyData avatar={pic} />
			</Wrapper>
		</Container>
	);
};

export default SeoChecker;

const Span = styled.div`
	margin-top: 10px;
	font-weight: 600;
	width: 90%;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
	width: 95%;

	hr {
		border: none;
		height: 1px;
		background-color: #e2e2e2;
	}
	/* background-color: ; */
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
