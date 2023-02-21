import React from "react";
import styled from "styled-components";
import DomainList from "./DomainList";

interface iTitle {
  title: string;
  color: string;
}

const BackLinkTable: React.FC<iTitle> = ({ title, color }) => {
  return (
    <div>
      <Main>
        <Top>
          <Div>{title}</Div>
        </Top>

        <Header>
          <Title>Anchor Text</Title>
          <Holder>
            {" "}
            <Percentage>%</Percentage>
            <Space />
            <Domain>Referring Domains</Domain>
          </Holder>
        </Header>

        <DomainList color={color} />

        <DomainList color={color} />
        <DomainList color={color} />
      </Main>
    </div>
  );
};

export default BackLinkTable;

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
  width: 650px;
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
  font-weight: 700;
  font-size: 16px;
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

const Space = styled.div`
  flex: 1;
`;
const Domain = styled.div`
  width: 90px;
  /* font-size: 20px; */
  font-weight: 700;
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
  width: 700px;
  min-height: 300px;
  background-color: white;
  margin-bottom: 20px;
  margin: 10px;
`;
