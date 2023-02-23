import React from "react";
import styled from "styled-components";
import InputComp from "../../../utils/ReusedComp/InputComp";
import pix1 from "../images/share.svg";
import BacklinkDetailed from "./BacklinkDetailed";
import BacklinkLevel from "./BacklinkLevel";
import BackLinkTable from "./BackLinkTable";
import BAcklinkTableHolder from "./BAcklinkTableHolder";

const BackLinkChecker = () => {

  return (
    <Container>
      <Wrapper>
        <Title>BackLink Checker</Title>
        {/* <SubTitle>
          Get the full list of backlinks of any domain along with additional
          data on each backlink
        </SubTitle> */}
        <InputComp />
        <hr />
        {/* {newFunction()} */}

        <br />
        <BacklinkDetailed />
        <br />
        <BacklinkLevel />
        <br />

        <Table>
          <BackLinkTable title="Top referring domain anchor" color="#ae67fa" />
          <BackLinkTable title="Top backlink anchors " color="#5BD982" />
        </Table>
        <br />
        <BAcklinkTableHolder />
      </Wrapper>
    </Container>
  );


	function newFunction() {
		return (
			<MainHolder>
				<ShaerImage src={pix1} alt='image for default backlink checker' />
				<Br />
				<SubTitle>
					Monitor backlink performance for yourself and competitors.
				</SubTitle>
			</MainHolder>
		);
	}
};

export default BackLinkChecker;

const Table = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`;

const Br = styled.div`
	margin-top: 10px;
`;
const MainHolder = styled.div`

  width: 90%;
  display: flex;
  justify-content: center;
  height: 80vh;
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