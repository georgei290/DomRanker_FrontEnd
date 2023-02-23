import React from "react";
import styled from "styled-components";

const InputComp = () => {
	return (
		<>
			<InputHold>
				<Main>
					<InputText>Search Engine Types</InputText>
					<Select>
						<option>Organic</option>
					</Select>
				</Main>
				<Main>
					<InputText>Search Engine Types</InputText>
					<Input placeholder='Enter search' />
				</Main>
				<Main>
					<InputText>Search Engine Types</InputText>
					<Input placeholder='Enter search' />
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
	);
};

export default InputComp;

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
