import React from "react";
import styled from "styled-components";

interface IData {
	peopleSearch: any;
}
const KeyWordIdeaTable: React.FC<IData> = ({ peopleSearch }) => {
	return (
		<Hol>
			<TableHold>
				<TableTitle>
					<span>People_Also_Ask</span>
				</TableTitle>
				<TableHolder>
					<TableHead>
						<Head Hwd='300px'>Keywords</Head>
						<Head Hwd='150px'>Exp.Title</Head>
						<Head Hwd='150px'>Exp.Domain</Head>
						<Head Hwd='300px'>Description</Head>
					</TableHead>
					<Content>
						{peopleSearch && peopleSearch[0] ? (
							<>
								{peopleSearch[0]?.items?.map((props: any) => (
									<TableBody>
										<Body Bwd='300px'>
											<BTitle cl='#1976D2'>{props?.title}</BTitle>
										</Body>
										<Body Bwd='150px'>
											<TT>{props?.expanded_element[0]?.title}</TT>
										</Body>
										<Body style={{ color: "#1976D2" }} Bwd='150px'>
											<a href={props?.expanded_element[0]?.domain}>
												{" "}
												<TT>{props?.expanded_element[0]?.domain}</TT>
											</a>
										</Body>
										<Body style={{ color: "#000" }} Bwd='300px'>
											{props?.expanded_element[0]?.description ? (
												<TT>{props?.expanded_element[0]?.description}</TT>
											) : (
												<TT>-</TT>
											)}
										</Body>
									</TableBody>
								))}
							</>
						) : null}
					</Content>
				</TableHolder>
			</TableHold>
		</Hol>
	);
};

export default KeyWordIdeaTable;

const Hol = styled.div`
	margin-top: 40px;
`;

const TT = styled.div`
	width: 90%;
	font-size: 13px;
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
