import React, { useState } from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import InputComp from "../../../utils/ReusedComp/InputComp";
import DashboardLoader from "../../../utils/ReusedComp/Skeleton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import pic from "../images/5.svg";

import _ from "lodash";
import { useAppSelector } from "../../../utils/stateManagement/store";
import { KeyWordSearch } from "../../../utils/APICalls";

const KewWordTable = () => {
	const user = useAppSelector((state) => state.currentUser);

	const [readData, setReadData] = useState([] as any);

	const SearchKeyword = useMutation({
		mutationFn: (target: any) => KeyWordSearch(target, user?._id),
		onSuccess: (data) => {
			console.log("keyword", data);
			// dispatch(storeBaiduId(data?.data[0].id));
			// setGoogleKeyWords("");
		},
	});
	return (
		<Container>
			<Wrapper>
				<Title>Keyword Data</Title>
				<Span>Find the most profitable keywords to rank for</Span>

				<hr />

				{/* {!readGoogleData?.data && SearchGoogle?.isLoading === false ? ( */}
				<EmptyData avatar={pic} />
				{/* ) : ( */}
				<>
					{SearchKeyword?.isLoading ? (
						<DashboardLoader />
					) : (
						<DownData>
							<TableHold>
								<TableTitle>
									<span>Organic Keywords ({readData?.data?.se})</span>
								</TableTitle>
								<TableHolder>
									<TableHead>
										<Head Hwd='40px'>RG</Head>
										<Head Hwd='400px'>URL</Head>
										<Head Hwd='100px'>Total Links</Head>
										<Head Hwd='100px'>Rank.A</Head>
										<Head Hwd='70px'>Sources</Head>
										<Head Hwd='20px'>Position</Head>
										<Head style={{ marginLeft: "50px" }} Hwd='150px'>
											Domain
										</Head>
									</TableHead>
									<Content>
										{readData?.map((props: any) => (
											<TableBody>
												<Body Bwd='40px'>{props?.rank_group}</Body>
												<Body Bwd='400px'>
													<BTitle cl=' #136F48 '>{props?.title}</BTitle>
													<a href={props?.url}>
														<BTitle cl='#1976D2'>{props?.url}</BTitle>
													</a>
												</Body>
												<Body Bwd='100px'>
													{props.links ? (
														<TT>{props?.links?.length}</TT>
													) : (
														<TT>-</TT>
													)}
												</Body>
												<Body Bwd='100px'>
													{props?.rank_absolute?.source !== null ? (
														<TT>{props?.rank_absolute}</TT>
													) : (
														<TT>-</TT>
													)}
												</Body>
												<Body Bwd='70px'>
													{props?.about_this_result ? (
														<>
															{props?.about_this_result?.source !== null ? (
																<TT>{props?.about_this_result?.source}</TT>
															) : (
																<TT>-</TT>
															)}
														</>
													) : (
														<TT>-</TT>
													)}
												</Body>
												<Body Bwd='20px'>
													{props?.position ? (
														<>
															{props?.position !== null ? (
																<TT>{props?.position}</TT>
															) : (
																<TT>-</TT>
															)}
														</>
													) : (
														<TT>-</TT>
													)}
												</Body>
												<Body style={{ marginLeft: "50px" }} Bwd='150px'>
													{props?.domain?.source !== null ? (
														<TT>{props?.domain}</TT>
													) : (
														<TT>-</TT>
													)}
												</Body>
											</TableBody>
										))}
									</Content>
								</TableHolder>
							</TableHold>

							{/* <PopularAds /> */}
						</DownData>
					)}
				</>
			</Wrapper>
		</Container>
	);
};

export default KewWordTable;

const LoadComp = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

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
	width: 400px;
	font-size: 14px;
	color: ${(props) => props.cl};
	/* background-color: red; */
	overflow: hidden;
	text-overflow: ellipsis;

	/* white-space: ; */
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
	font-size: 25px;
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
