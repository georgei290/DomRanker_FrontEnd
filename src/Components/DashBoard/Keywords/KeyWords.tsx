import React from "react";
import styled from "styled-components";
import EmptyKeyWord from "./EmptyKeyWord";

const KeyWords = () => {
  return (
    <Container>
      <Wrapper>
        <EmptyKeyWord />
      </Wrapper>
    </Container>
  );
};

export default KeyWords;

const Title = styled.div`
  color: #3e4581;
  font-size: 25px;
  font-weight: 800;
`;

const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  width: 97%;
  /* background-color: aqua; */
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
