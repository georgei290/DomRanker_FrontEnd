import React, { useState } from "react";
import styled from "styled-components";

const BacklinkLevel = () => {
  const [colorLength, setColorLength] = useState(0);
  return (
    <div>
      <Main>
        <TopMain>
          <Holder1>
            {" "}
            <MainTop>
              <Title>Domain Trust</Title>
              <Build>
                <MainTitle>46</MainTitle>
                <Bar>
                  <ColorBar color="#0da1e3" val={`${(46 / 120) * 100}px`} />
                </Bar>
              </Build>
            </MainTop>
            <MainTop>
              <Title>Page Trust</Title>
              <Build>
                <MainTitle>16</MainTitle>
                <Bar>
                  <ColorBar color="#BF63D2" val={`${(16 / 120) * 100}px`} />
                </Bar>
              </Build>
            </MainTop>
            <MainTop>
              <Title>Anchor Text</Title>
              <Build>
                <MainTitle>64</MainTitle>
                <Bar>
                  <ColorBar color="#F6E121" val={`${(64 / 120) * 100}px`} />
                </Bar>
              </Build>
            </MainTop>
          </Holder1>
          <Holder2>
            <Section>
              <Text>Referring Domains</Text>
              <Number>64</Number>
              <Space />
              <Detail>
                <InnerDetail>
                  <SmallText>To Only Homepages</SmallText>
                  <Numb>28</Numb>
                  <SmallBar />
                </InnerDetail>
                <InnerDetail>
                  <SmallText>To Only Inside Pages</SmallText>
                  <Numb>17</Numb>
                  <SmallBar />
                </InnerDetail>
                <InnerDetail>
                  <SmallText>Others</SmallText>
                  <Numb>22</Numb>
                  <SmallBar />
                </InnerDetail>
              </Detail>
            </Section>
            <Section>
              <Text>Referring Domains</Text>
              <Number>64</Number>
              <Space />
              <Detail>
                <InnerDetail>
                  <SmallText>To Only Homepages</SmallText>
                  <Numb>28</Numb>
                  <SmallBar />
                </InnerDetail>
                <InnerDetail>
                  <SmallText>To Only Inside Pages</SmallText>
                  <Numb>17</Numb>
                  <SmallBar />
                </InnerDetail>
                <InnerDetail>
                  <SmallText>Others</SmallText>
                  <Numb>22</Numb>
                  <SmallBar />
                </InnerDetail>
              </Detail>
            </Section>
          </Holder2>
        </TopMain>
        <SideMain>
          <Holder3>
            <HolderText>DOFOLLOW | NOFOLLOW</HolderText>
            <Space />
            <BarColor>
              <BarColorOther />
            </BarColor>
            <TextNumb>
              <Numbed>34.4%</Numbed>
              <Numbed>64.4%</Numbed>
            </TextNumb>
          </Holder3>
          <Holder4>
            <Hoz>
              <Card>
                <Edu>Edu</Edu>
                <Space />
                <EduNumb>22</EduNumb>
              </Card>
              <Card>
                <Edu>Gov</Edu>
                <Space />
                <EduNumb>38</EduNumb>
              </Card>
            </Hoz>
            <Hoz>
              <Card>
                <Edu>IPS</Edu>
                <Space />
                <EduNumb>54</EduNumb>
              </Card>
              <Card>
                <Edu>SUBNETS</Edu>
                <Space />
                <EduNumb>84</EduNumb>
              </Card>
            </Hoz>
          </Holder4>
        </SideMain>
      </Main>
    </div>
  );
};
// #5BD9B5
export default BacklinkLevel;

const Holder4 = styled.div`
  margin-top: 10px;
`;

const EduNumb = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

const Edu = styled.div`
  font-weight: 500;
  font-size: 15;
`;

const Card = styled.div`
  background-color: white;
  width: 45%;
  height: 60px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Hoz = styled.div`
  display: flex;
  margin: 10px 0 0 0;
`;

const Numbed = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 6px;
`;

const TextNumb = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const BarColorOther = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 30px;
  background-color: #5bd9b5;
`;

const BarColor = styled.div`
  width: 90%;
  height: 10px;
  border-radius: 30px;
  background-color: #ff8e00;
`;

const HolderText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Holder3 = styled.div`
  height: 150px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallBar = styled.div`
  width: 35px;
  background-color: #0da1e3;
  height: 3px;
  margin-top: -6px;
  margin-bottom: 10px;
  border-radius: 30px;
`;

const Numb = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const SmallText = styled.div`
  font-size: 12px;
  margin-bottom: 0px;
  min-width: 60px;
  font-weight: 600;
  height: 30px;
`;

const InnerDetail = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Detail = styled.div`
  display: flex;
  margin: 0 10px;
`;
const Space = styled.div`
  flex: 1;
`;

const Number = styled.div`
  font-weight: 800;
  font-size: 35px;
  margin-bottom: 50px;
`;

const Text = styled.div`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Section = styled.div`
  width: 380px;
  height: 242px;
  background-color: white;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-right: 10px;
`;

const Holder2 = styled.div`
  display: flex;
  margin: 10px;
`;

const Holder1 = styled.div`
  display: flex;
`;

const ColorBar = styled.div<{ color: string; val: string }>`
  background-color: ${({ color }) => color};
  width: ${({ val }) => val};
  height: 100%;
  border-radius: 10px;
`;

const Bar = styled.div`
  background-color: #d6d8e3;
  width: 120px;
  height: 7px;
  border-radius: 10px;
  margin-left: 10px;
  overflow: hidden;
  margin-top: 6px;
`;

const Build = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

const MainTitle = styled.div`
  font-weight: 800;
  font-size: 25px;
  margin-top: 8px;
  min-width: 30px;
`;

const MainTop = styled.div`
  width: 250px;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding-left: 10px;
`;

const SideMain = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TopMain = styled.div`
  width: 900px;
`;

const Main = styled.div`
  display: flex;
  width: 99%;
`;
