import React from "react";
import styled from "styled-components";
import InputComp from "../../../utils/ReusedComp/InputComp";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pix from "./undraw_analytics_re_dkf8.svg"

const OnPageData = () => {
	const [showData, setShowDaat] = React.useState<boolean>(true)
	return (
		<Container>
			<Wrapper>
				<Title>OnPage Data</Title>
				<SubTitle>
				With On-Page API you can obtain a variety of on-page SEO data, which you can use to eliminate hidden website errors and, consequently,
					boost rankings
				</SubTitle>
				<>
			<InputHold>
				
				<Main>
					<InputText>Fucntion</InputText>
					<Input placeholder='Summary' />
				</Main>
				<Main>
					<InputText>Include Subdomain</InputText>
					<Input placeholder='Enable' />
				</Main>
				<Main>
					<InputText>Backlink Status Types</InputText>
					<Input placeholder='Live' />
				</Main>
				<Main>
					<InputText>Internal Link List</InputText>
					<Input placeholder='10' />
				</Main>
			</InputHold>
			<Main>
				<InputText>Search Engine Types</InputText>
				<Input2>
					<Input3 placeholder='Enter search' />
					<Button>Analyze</Button>
				</Input2>
			</Main>
		</>

		{
					showData ? 
					(<EmpytyHold>
						<EmptyData avatar={pix}/>
					</EmpytyHold>) :
					 (
						<>
						<div>

						</div>
							
						</>
					 )
				}


			</Wrapper>
		</Container>
	);
};

export default OnPageData;

const EmpytyHold  = styled.div`
margin-top:50px;
`

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
`;
const Input2 = styled.div`
	height: 50px;
	width: 98%;
	background-color: white;
	border: 1px solid #f1f1f1;
	border-radius: 5px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
const Button = styled.button`
	margin-right: 10px;
	height: 40px;
	width: 150px;
	color: white;
	border: none;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
	background-color: #ae67fa;
	font-weight: bold;
`;

const Select = styled.select`
	width: 100%;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #f1f1f1;
	outline: none;
	padding-left: 10px;
	margin-right: 10px;
	::placeholder {
		color: gray;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const InputHold = styled.div`
	margin-top: 15px;
	width: 100%;
	display: flex;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
const Main = styled.div`
	width: 100%;
	margin-top: 15px;
	margin-right: 40px;
`;
const Input = styled.input`
	/* min-width: 320px; */
	height: 35px;
	border-radius: 5px;
	border: 1px solid #f1f1f1;
	outline: none;
	padding-left: 10px;
	width: 100%;

	::placeholder {
		color: gray;
	}

	@media screen and (max-width: 768px) {
		width: 96%;
	}
`;
const InputText = styled.div`
	font-size: 13px;
	margin-bottom: 6px;
	/* font-weight: 600; */
`;

const SubTitle = styled.div`
color:black;
margin-top:6px;
font-weight:500;
font-size:16px;
`

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
