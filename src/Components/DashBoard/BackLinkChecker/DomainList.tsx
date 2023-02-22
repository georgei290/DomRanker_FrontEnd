import React from "react";
import styled from "styled-components";

interface iColor {
  color: string;
  numb: number;
}

const DomainList: React.FC<iColor> = ({ color, numb }) => {
  return (
    <div style={{ margin: "5px" }}>
      {" "}
      <Header1>
        <Title1>thenetnija.net</Title1>
        <Holder1>
          {" "}
          <Percentage1>{numb}%</Percentage1>
          <Space1 />
          <Domain1>78</Domain1>
        </Holder1>
      </Header1>
      <Bar>
        <ColorBar val={`${(numb / 100) * 650}px`} color={color} />
      </Bar>
    </div>
  );
};

export default DomainList;

const ColorBar = styled.div<{
  val: string;
  color: string;
}>`
  height: 100%;
  width: ${({ val }) => val};
  background-color: ${({ color }) => color};
  border-radius: 50px;
`;

const Bar = styled.div`
  width: 550px;
  background-color: #f2f2f2;
  height: 7px;
  margin-left: 20px;
  margin-top: 5px;
  border-radius: 50px;
`;

const Space1 = styled.div`
  flex: 1;
`;
const Domain1 = styled.div`
  width: 100px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
`;

const Percentage1 = styled.div`
  width: 40px;
  font-weight: 700;
  font-size: 14px;
`;

const Title1 = styled.div`
  margin-left: 20px;
  font-weight: 500;
  font-size: 14px;
`;

const Holder1 = styled.div`
  display: flex;
  margin-right: 20px;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;

const Header1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
