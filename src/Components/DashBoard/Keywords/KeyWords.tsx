import React from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import InputComp from "../../../utils/ReusedComp/InputComp";
import pic from "../images/keypoint.svg";

const Keyword = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Keywords</Title>
				<Span>
					Keyword Data Explorer will help you appreciate the scale of
					information that Domranker Keyword provides.
				</Span>

				<InputComp />
				<hr />
				<EmptyData avatar={pic} />
			</Wrapper>
		</Container>
	);
};

export default Keyword;

const BottomEmptyData = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;
const ImageDiv = styled.div`
	margin: 15px 0;
	img {
		width: 250px;
	}
`;
const Desc = styled.div`
	width: 700px;
	text-align: center;
	font-size: 13px;

	@media (max-width: 700px) {
		width: 80%;
	}
`;

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
	margin-left: 20px;
	margin-top: 20px;
	width: 95%;
	/* background-color: aqua; */
`;

const Container = styled.div`
	width: calc(100vw - 240px);
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
