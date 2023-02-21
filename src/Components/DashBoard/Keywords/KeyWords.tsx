import React from "react";
import styled from "styled-components";

const KeyWords = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Keywords</Title>
			</Wrapper>
		</Container>
	);
};

export default KeyWords;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
	width: 90%;
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
