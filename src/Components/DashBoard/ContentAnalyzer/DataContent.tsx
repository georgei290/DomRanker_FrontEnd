import React from "react";
import styled from "styled-components";
import InputComp from "../../../utils/ReusedComp/InputComp";
import PageCategoryChart from "./PageCategoryChart";
import TextCategoryChart from "./TextCategoryChart";

const DataContent = () => {
  return (
    <Container>
      <Wrapper>
        <TopInputData>
          <Title>Keyword Data</Title>
          <SubTitle>
            Keyword Data Explorer will help you appreciate the scale of
            information that Domranker Keyword provides.
          </SubTitle>
          <InputComp />
        </TopInputData>
        <hr />
        <ButtomData>
          <BoxesDiv>
            <MainBox>
              <TopBox>
                <Toptitle>Analysis Data</Toptitle>
                <TopSub>261</TopSub>
              </TopBox>
              <ButtomBoxHold>
                <TomBox>
                  <ButtomTitle>Link to Home Page</ButtomTitle>
                  <TomSub>34</TomSub>
                </TomBox>
                <TomBox>
                  <ButtomTitle>Links to OtherPages</ButtomTitle>
                  <TomSub>56</TomSub>
                </TomBox>
                <TomBox>
                  <ButtomTitle>Links to OtherPages</ButtomTitle>
                  <TomSub>34</TomSub>
                </TomBox>
              </ButtomBoxHold>
            </MainBox>
            <MiddleBox>
              <InnerMidBox>
                <InnerTitle>Total Metrics</InnerTitle>
                <InnerSub>169</InnerSub>
              </InnerMidBox>
              <InnerMidBox>
                <InnerTitle>Page Type</InnerTitle>
                <InnerSub>E-Comerence</InnerSub>
              </InnerMidBox>
            </MiddleBox>
            <MainBox>
              <MainTop>
                <Toptitle>Domain Rank</Toptitle>
                <TopSub>74</TopSub>
              </MainTop>

              <MainButtom>
                <RateBox>
                  <RateBar>
                    <RateBar2 />
                  </RateBar>
                </RateBox>
                <RateData>
                  <DataRate>
                    <RateTitle>URL Rank</RateTitle>
                    <RateSub>78</RateSub>
                  </DataRate>
                  <DataRate>
                    <RateTitle>Spam Score</RateTitle>
                    <RateSub>22</RateSub>
                  </DataRate>
                </RateData>
              </MainButtom>
            </MainBox>
          </BoxesDiv>
          <ContentCahrtDiv>
            <PageCategoryChart />
          </ContentCahrtDiv>
          <ContentCahrtDiv>
            <TextCategoryChart />
          </ContentCahrtDiv>
        </ButtomData>
      </Wrapper>
    </Container>
  );
};

export default DataContent;

const Container = styled.div``;
const Wrapper = styled.div`
  hr {
    border: none;
    height: 1px;
    background-color: #e2e2e2;
  }
`;
const TopInputData = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
`;
const SubTitle = styled.div`
  font-size: 12px;
`;

const ButtomData = styled.div``;
const BoxesDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const MainBox = styled.div`
  height: 200px;
  width: 350px;
  background-color: #fff;
  margin: 10px 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TopBox = styled.div``;

const Toptitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const TopSub = styled.div`
  font-size: 25px;
  font-weight: 800;
`;
const ButtomBoxHold = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TomBox = styled.div``;
const ButtomTitle = styled.div`
  font-size: 9px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const TomSub = styled.div`
  font-size: 18px;
  font-weight: 800;
`;
const MiddleBox = styled.div``;
const InnerMidBox = styled.div`
  height: 90px;
  width: 250px;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
`;

const InnerTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const InnerSub = styled.div`
  font-size: 25px;
  font-weight: 800;
`;

const ContentCahrtDiv = styled.div``;

const MainTop = styled.div``;
const MainButtom = styled.div``;
const RateBox = styled.div``;
const RateData = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DataRate = styled.div``;
const RateTitle = styled.div`
  font-size: 9px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const RateSub = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const RateBar = styled.div`
  height: 6px;
  width: 100%;
  background-color: #f49867;
  margin-bottom: 15px;
  border-radius: 10px;
`;
const RateBar2 = styled.div`
  width: 70%;
  height: 6px;
  border-radius: 10px;
  background-color: #ae67fa;
`;
