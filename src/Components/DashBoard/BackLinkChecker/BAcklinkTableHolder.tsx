import React from "react";
import styled from "styled-components";

interface Iprops{
  data : any
}

const BAcklinkTableHolder:React.FC<Iprops> = ({data}) => {
  return (
		<div>
			<TableTitle>
				<span>Top Backlinks</span>
			</TableTitle>
			<TableHolder>
				<TableTop>
					<TableHead mWid='400px'>Backlink</TableHead>
					<TableHead mWid='100px'>DFR</TableHead>
					<TableHead mWid='100px'>BSS</TableHead>
					<TableHead mWid='100px'>Anchor</TableHead>
					<TableHead mWid='100px'>Target URL</TableHead>
				</TableTop>

				<ContentHolder>
					{data?.map((props: any) => (
						<TableBottom>
							<Body wid='400px'>
								<a href={props?.url_from}>
									{" "}
									<BTitle cl='#136F48'>{props?.url_from}</BTitle>
								</a>
							</Body>
							<Body wid='100px'>
								<TextHolder>
									<Bar>
										<ColorBar bg='ee' wid={`${(25 / 50) * 50}px`} />
									</Bar>
									<Text>{props?.domain_from_rank}</Text>
								</TextHolder>
							</Body>
							<Body wid='100px'>
								<TextHolder>
									<Bar>
										<ColorBar bg='' wid={`${(40 / 50) * 50}px`} />
									</Bar>
									<Text>{props?.backlink_spam_score}</Text>
								</TextHolder>
							</Body>
							<Body wid='100px'>
								{props?.anchor ? (
									<TextHolder color='gray'>{props?.anchor}</TextHolder>
								) : (
									<TextHolder color='gray'>No Text</TextHolder>
								)}
							</Body>
							<Body wid='100px'>
								<a href={props?.url_to}>
									{" "}
									<TextHolder color='#AE67FA'>{props?.url_to}</TextHolder>
								</a>
							</Body>
						</TableBottom>
					))}
				</ContentHolder>
			</TableHolder>
		</div>
	);
};


export default BAcklinkTableHolder;

const TableTitle = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;

  border-radius: 5px;
  align-items: center;
  span {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 700;
  }
`;
const Text = styled.div`
  margin-left: 8px;
`;

const ColorBar = styled.div<{
  bg?: string;
  wid?: string;
}>`
  width: ${({ wid }) => wid};
  height: 5px;
  background-color: ${({ bg }) => (bg ? "#2D355D" : "#ae67fa")};
  border-radius: 30px;
`;

const Bar = styled.div`
  width: 50px;
  height: 5px;
  background-color: #c4c7d6;
  border-radius: 30px;
  overflow: hidden;
`;

const TextHolder = styled.div<{
  color?: string;
}>`
  display: flex;
  width: 90%;
  font-size: 13px;
  color: ${({ color }) => color};
  align-items: center;
  padding-right: 20px;
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BTitle = styled.div<{ cl: string }>`
  width: 90%;
  font-size: 14px;
  color: ${(props) => props.cl};
`;

const TableBottom = styled.div`
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

const Body = styled.div<{ wid: string }>`
  margin-left: 20px;
  align-items: center;
  min-width: ${({ wid }) => wid};
  font-weight: 600;
`;

const TableHead = styled.div<{ mWid: string }>`
  margin-left: 20px;
  align-items: center;
  font-weight: 800;

  min-width: ${({ mWid }) => mWid};
`;

const TableTop = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  border-bottom: 1px solid #f1f1f1;
  height: 70px;
  background-color: white;
  font-size: 13px;
`;
