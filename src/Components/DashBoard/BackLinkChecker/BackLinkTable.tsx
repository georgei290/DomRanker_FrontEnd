import React from "react";
import styled from "styled-components";
import DomainList from "./DomainList";

interface iTitle {
	title: string;
	color: string;
	numb?: number;
	referring: any;
	anchor: any;
}

const BackLinkTable: React.FC<iTitle> = ({
	title,
	color,
	referring,
	anchor,
}) => {
	console.log("Top referring domain anchor");
	return (
		<DDiv>
			<Main>
				<Top>
					<Div>{title}</Div>
				</Top>

				{title === "Top referring domain anchor" ? (
					<Header>
						<Title>Reffered Domains</Title>
						<Holder>
							{" "}
							<Percentage>%</Percentage>
							<Space />
							<Domain>Referring Ips</Domain>
						</Holder>
					</Header>
				) : null}

				{title === "Top backlink anchor" ? (
					<Header>
						<Title>Anchor Text</Title>
						<Holder>
							{" "}
							<Percentage>Subnet</Percentage>
							<Space />
							<Domain>Referring Ips</Domain>
						</Holder>
					</Header>
				) : null}

				{title === "Top referring domain anchor" ? (
					<>
						{referring?.map((propRef: any) => (
							<DomainList
								propRef={propRef}
								refTitle={title}
								color={color}
								numb={propRef?.referring_domains}
							/>
						))}
					</>
				) : null}

				{title === "Top backlink anchor" ? (
					<>
						{anchor?.map((propAnch: any) => (
							<DomainList
								propRef={propAnch}
								refTitle={title}
								color='green'
								numb={100}
							/>
						))}
					</>
				) : null}
			</Main>
		</DDiv>
	);
};

export default BackLinkTable;

const DDiv = styled.div`
	width: 600px;
	overflow-x: scroll;
`;

const Space = styled.div`
	flex: 1;
`;
const Domain = styled.div`
	width: 90px;
	/* font-size: 20px; */
	font-weight: 700;
  text-align: center;
`;

const Percentage = styled.div`
	width: 40px;
	font-weight: 600;
`;

const Title = styled.div`
	margin-left: 20px;
	font-weight: 600;
	font-size: 22px;
`;

const Holder = styled.div`
	display: flex;
	margin-right: 20px;
	width: 200px;
	justify-content: space-between;
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`;

const Div = styled.div`
	padding-left: 20px;
`;
const Top = styled.div`
	width: 100%;
	height: 80px;
	background-color: #e7e7e7;
	display: flex;
	align-items: center;
	font-weight: 700;
`;
const Main = styled.div`
	width: 600px;
	min-height: 300px;
	background-color: white;
	margin-bottom: 20px;
	margin: 10px;
	padding-bottom: 20px;
`;
