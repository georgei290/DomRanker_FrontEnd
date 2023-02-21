import React from "react";
import styled from "styled-components";
import pix1 from "../images/share.svg";

const BackLinkChecker = () => {
  return (
    <Container>
      <Wrapper>
        <Title>BackLink Checker</Title>
        <SubTitle>
          Get the full list of backlinks of any domain along with additional
          data on each backlink
        </SubTitle>
        <MainHolder>
          <ShaerImage src={pix1} alt="image for default backlink checker" />
          <Br />
          <SubTitle>
            Monitor backlink performance for yourself and competitors.
          </SubTitle>
        </MainHolder>
      </Wrapper>
    </Container>
  );
};

export default BackLinkChecker;

const Br = styled.div`
  margin-top: 10px;
`;
const MainHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 90vh;
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
`;

const Container = styled.div`
	min-width: calc(100vw - 240px);
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
