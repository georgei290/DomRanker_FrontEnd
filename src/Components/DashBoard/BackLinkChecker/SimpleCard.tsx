import React from "react";
import styled from "styled-components";

const SimpleCard = () => {
  return (
    <Main>
      <Title>Backlinks</Title>
      <MainTitle>6,842</MainTitle>
    </Main>
  );
};

export default SimpleCard;

const Title = styled.div`
  font-weight: 600;
`;

const MainTitle = styled.div`
  font-weight: 800;
  font-size: 35px;
  margin-top: 8px;
`;

const Main = styled.div`
  width: 250px;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
