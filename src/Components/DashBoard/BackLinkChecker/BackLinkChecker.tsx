import React from "react";
import styled from "styled-components";

const BackLinkChecker = () => {
  return (
    <Container>
      <Wrapper>
        <Title>BackLink Checker</Title>
        <SubTitle>
          Get the full list of backlinks of any domain along with additional
          data on each backlink
        </SubTitle>
      </Wrapper>
    </Container>
  );
};

export default BackLinkChecker;

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
