import React from "react";
import styled from "styled-components";

const KeyWordChart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Key Chart</Title>
      </Wrapper>
    </Container>
  );
};

export default KeyWordChart;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 400px;
  width: 95%;
  background-color: #fff;
  margin: 20px 0;
`;

const Title = styled.div`
  color: #3e4581;
  font-size: 25px;
  font-weight: 800;
`;
