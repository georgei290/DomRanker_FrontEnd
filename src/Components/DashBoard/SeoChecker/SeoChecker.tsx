import React, { useState } from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import InputComp from "../../../utils/ReusedComp/InputComp";

import pic from "../images/5.svg";
import KeyWordIdeaTable from "./KeyWordIdeaTable";
import PopularAds from "./PopularAds";

const SeoChecker = () => {
	const [data, setData] = useState([]);

	return (
		<Container>
			<Wrapper>
				<Title>Seo Checker</Title>
				<Span>Find the most profitable keywords to rank for</Span>

				<InputComp />
				<hr />
				{data.length !== 0 ? (
					<EmptyData avatar={pic} />
				) : (
					<DownData>
						<CardHold>
							<Card>
								<TitleCard>Difficulty</TitleCard>
								<Count>52</Count>
							</Card>
							<Card>
								<TitleCard>Search Volume</TitleCard>
								<Count>165K</Count>
							</Card>
							<Card>
								<TitleCard>CPC</TitleCard>
								<Count>$2.02</Count>
							</Card>
							<Card>
								<TitleCard>Global Volume</TitleCard>
								<Count>186.8K</Count>
							</Card>
						</CardHold>

						<TableHold>
							<TableTitle>
								<span>Organic Keywords</span>
							</TableTitle>

							<TableHolder>
								<TableHead>
									<Head Hwd='40px'>RG</Head>
									<Head Hwd='400px'>URL</Head>
									<Head Hwd='100px'>Keyword Total</Head>
									<Head Hwd='100px'>Total Trafic</Head>
									<Head Hwd='70px'>Sources</Head>
									<Head Hwd='20px'>Total traffic cost</Head>
									<Head style={{ marginLeft: "50px" }} Hwd='150px'>
										Domain
									</Head>
								</TableHead>

								<Content>
									<TableBody>
										<Body Bwd='40px'>1</Body>
										<Body Bwd='400px'>
											<BTitle cl='#1976D2'>
												30 Most Popular Movies Right Now: What to Watch In...
											</BTitle>
											<BTitle cl='#136F48'>
												https://editorial.rottentomatoes.com/guide/popular-movies/{" "}
											</BTitle>
										</Body>
										<Body Bwd='100px'>
											<TT>1.5k</TT>
										</Body>
										<Body Bwd='100px'>
											<TT>260.0K</TT>
										</Body>
										<Body Bwd='70px'>
											<TT>facebook</TT>
										</Body>
										<Body Bwd='20px'>
											<TT>$376.9K</TT>
										</Body>
										<Body style={{ marginLeft: "50px" }} Bwd='150px'>
											<TT>www.wired.co</TT>
										</Body>
									</TableBody>

									<TableBody>
										<Body Bwd='40px'>2</Body>
										<Body Bwd='400px'>
											<BTitle cl='#1976D2'>
												30 Most Popular Movies Right Now: What to Watch In...
											</BTitle>
											<BTitle cl='#136F48'>
												https://editorial.rottentomatoes.com/guide/popular-movies/{" "}
											</BTitle>
										</Body>
										<Body Bwd='100px'>
											<TT>1.5k</TT>
										</Body>
										<Body Bwd='100px'>
											<TT>260.0K</TT>
										</Body>
										<Body Bwd='70px'>
											<TT>facebook</TT>
										</Body>
										<Body Bwd='20px'>
											<TT>$376.9K</TT>
										</Body>
										<Body style={{ marginLeft: "50px" }} Bwd='150px'>
											<TT>www.wired.co.uk</TT>
										</Body>
									</TableBody>
								</Content>
							</TableHolder>
						</TableHold>
						<KeyWordIdeaTable />
						<PopularAds />
					</DownData>
				)}
			</Wrapper>
		</Container>
	);
};

export default SeoChecker;

const TT = styled.div`
	width: 90%;
	font-size: 13px;
	/* background-color: red; */
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const BTitle = styled.div<{ cl: string }>`
	width: 90%;
	font-size: 14px;
	color: ${(props) => props.cl};
	/* background-color: black; */
`;

const TableBody = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	margin-top: 10px;
	border-bottom: 1px solid #f1f1f1;
	padding-bottom: 10px;
`;

const TableHolder = styled.div`
	background-color: white;
	margin-top: 10px;
	width: 100%;
	overflow-x: scroll;
`;

const Body = styled.div<{ Bwd: string }>`
	margin-left: 20px;
	/* background-color: red; */
	align-items: center;
	min-width: ${(props) => props.Bwd};
	font-weight: 600;
	/* border-right: 1px solid #f1f1f1; */
`;

const Head = styled.div<{ Hwd: string }>`
	margin-left: 20px;
	/* background-color: red; */
	align-items: center;
	font-weight: 800;

	min-width: ${(props) => props.Hwd};
`;

const TableHead = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;

	border-bottom: 1px solid #f1f1f1;
	height: 70px;
	background-color: white;
	font-size: 13px;
`;

const TableHold = styled.div``;
const TableTitle = styled.div`
	width: 100%;
	height: 60px;
	background-color: white;
	display: flex;

	border-radius: 5px;
	align-items: center;
	span {
		margin-left: 20px;
		font-size: 20px;
		font-weight: 500;
		color: #ae67fa;
	}
`;

const Count = styled.div`
	font-size: 35px;
	font-weight: 800;
`;

const Card = styled.div`
	height: 150px;
	width: 250px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	flex-direction: column;
	margin-bottom: 20px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

	@media screen and (max-width: 600px) {
		margin-right: 0;
		width: 90%;
	}
`;

const CardHold = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	@media screen and (max-width: 768px) {
		/* justify-content: center; */
		/* align-items: center; */
	}
	/* background-color: red; */
`;

const TitleCard = styled.div`
	color: black;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 20px;
`;

const DownData = styled.div``;

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

	@media screen and (max-width: 768px) {
		margin-left: 20px;
	}
	/* background-color: ; */
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
