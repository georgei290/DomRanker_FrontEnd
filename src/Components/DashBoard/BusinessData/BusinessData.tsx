import React from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import Mysimple from "./Mysimple";
import pix from "./undraw_business_decisions_re_84ag (1).svg"
import TableData from "./TableData";
import WorkTable from "./WorkTable";

const BusinessData = () => {
	const [showData, setShowDaat] = React.useState<boolean>(false)
	return (
		<Container>
			<Wrapper>
				<Title>Business Data</Title>
				<SubTitle>Expand Your Business Data</SubTitle>
				<HolderForm>
					<>
						<InputHold>
							<Main>
							   <InputText>Location</InputText>
								<Input placeholder='E.g United State' />
							</Main>
							<Main>
								<InputText>Language</InputText>
								<Input placeholder='English' />
							</Main>
							<Main2>
							<InputText>Search Engine Types</InputText>
								<Input2>
									<Input3 placeholder='Enter search' />
									<Button>Analyze</Button>
								</Input2>
							</Main2>
						</InputHold>
					</>
				</HolderForm>
				{
					showData ? 
					(<EmpytyHold>
						<EmptyData avatar={pix}/>
					</EmpytyHold>) :
					 (
						<>
						<CardHolder>
								<Mysimple title="Tite" subtitle = "Pizzicato"/>	
								<Mysimple title="Category" subtitle = "Pizza restaurant"/>	
								<Mysimple title="Phone" subtitle = "+1 (234) 455 9764"/>	
						</CardHolder>
							
						</>
					 )
				}

				<TableHolder>
					<TableTitle>
						People Also Search
					</TableTitle>

					<TableData/>
					
				</TableHolder>
				<br/>
				<TableHolder>
					<TableTitle>
						Work Time
					</TableTitle>

					<WorkTable/>
					
				</TableHolder>

				
				
			
			</Wrapper>
		</Container>
	);
};

export default BusinessData;




const  TableTitle = styled.div`
heigt:100px;
width:100%;
padding-top:5px;
padding-buttom:5px;
font-weight:700;
font-size:15px;
padding-left:10px;
`

const TableHolder  = styled.div`
    margin-top: 15px;
	width: 100%;
	display: flex;
	height:auto;
	background-color:white;
	display: flex;
	flex-direction: column;


	@media screen and (max-width: 768px) {
		
		width: 90%;
		
	}
`




const CardHolder = styled.div`
 
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top:13px;
  border-top: 1px solid #E2E2E2;

  @media screen and (max-width: 768px) {
	width:90%; 
 }
`;

const EmpytyHold  = styled.div`
margin-top:50px;
`


const Button = styled.button`
	margin-right: 1px;
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

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
`;
const Input2 = styled.div`
	height: 35px;
	width: 100%;
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

const InputText = styled.div`
	font-size: 13px;
	margin-bottom: 6px;
	/* font-weight: 600; */
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

const Main2 = styled.div`
	width: 95%;
	margin-top: 10px;
	margin-right: 20px;
	
`;
const Main = styled.div`
	width: 60%;
	margin-top: 10px;
	margin-right: 10px;

	@media screen and (max-width: 768px) {
		width:80%;
	}
	
`;
const Input = styled.input`
	/* min-width: 320px; */
	height: 35px;
	border-radius: 5px;
	border: 1px solid #f1f1f1;
	outline: none;
	padding-left: 10px;
	width: 95%;

	::placeholder {
		color: gray;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const HolderForm = styled.div`


`

const SubTitle = styled.div`
color:black;
margin-top:6px;
font-weight:700;
`

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
	width: 95%;
	display: flex;
	flex-direction: column;
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
