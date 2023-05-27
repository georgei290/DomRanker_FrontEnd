import { useState } from "react";
import styled from "styled-components";
import InputComp from "../../../utils/ReusedComp/InputComp";
import pix1 from "../images/share.svg";
import ViewingBacklink from "./ViewingBacklink";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../utils/stateManagement/store";

const BackLinkChecker = (props: any) => {
  
	const [backlinkData, setBacklinkData] = useState([] as any);
	const getBacklinks: any = useAppSelector((state) => state?.backlink);
	console.log("am getting backlin", getBacklinks);
	return (
		<Container>
			<Wrapper>
				<Title>BackLink Checker</Title>
				{/* <SubTitle>
          Get the full list of backlinks of any domain along with additional
          data on each backlink
        </SubTitle> */}
				{/* <InputComp {...props} /> */}
				<hr />
				{/* {newFunction()} */}

				<ViewingBacklink />
			</Wrapper>
		</Container>
	);
};

export default BackLinkChecker;

const Br = styled.div`
	margin-top: 10px;
`;
const MainHolder = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	height: 64vh;
	align-items: center;
	flex-direction: column;
`;

const ShaerImage = styled.img`
	/* width: 300px; */
	height: 30%;
	object-fit: contain;
`;
const SubTitle = styled.div`
	font-size: 15px;
	font-weight: 700;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 600;
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

	@media screen and (max-width: 768px) {
		margin-left: 20px;
	}
`;

const Container = styled.div`
	width: calc(100vw - 235px);
	min-height: calc(100vh - 60px);
	display: flex;
	overflow: hidden;

	flex-direction: column;
	background-color: #f8f8ff;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
