import React from 'react'
import {Also} from "./DataContent"
import styled from 'styled-components'
import { any } from 'prop-types';

interface iData {
    iProps: {};
}

const WorkTable: React.FC<iData> = ({ iProps }) => {
//   console.log("viewing: ", iProps);
  console.log("viewing: ", iProps?.monday);
  return (
    <>
      <HoldTable>
        <Table>
          <Headrow>
            <TheadCT>Work Days</TheadCT>
            <TheadCT>Open Hours</TheadCT>
            <Thead>Close Hour</Thead>
            <Thead>Rating Value</Thead>
            <TheadL>Rating Vote Count</TheadL>
          </Headrow>

          <ContentRow>
            <ContentData>
              <MainData1>
                              <div>{ iProps? }</div>
              </MainData1>
            </ContentData>
            <ContentData>
              <MainData1>props</MainData1>
            </ContentData>
            <ContentDataTV>
              <MainData>Max5</MainData>
            </ContentDataTV>
            <ContentDataTV>
              <MainData>4.5</MainData>
            </ContentDataTV>
            <ContentData>
              <MainData>props</MainData>
            </ContentData>
          </ContentRow>
        </Table>
      </HoldTable>
    </>
  );
};

export default WorkTable


const MainData1 = styled.div`
width:100%;
height:45px;

display: flex;
align-items: center;
`

const MainData = styled.div`
width:100%;

height:40px;
display: flex;
justify-content:center;
align-items:center;
`

const TheadCT = styled.th`
width:auto;
height:50%;
padding-left:10px;
padding-right:220px;
border-right:2px solid #E2E2E2;
`
const TheadL = styled.th`
padding-left:10px;
padding-right:30px;
border-right:2px solid #E2E2E2;
`
const Thead = styled.th`
padding-left:10px;
padding-right:20px;
border-right:2px solid #E2E2E2;
`

const ContentDataTV  = styled.td`
width:150px;
height:45px;




`
const ContentData  = styled.td`
width:220px;
height:45px;

padding-left:10px;
`
const ContentRow  = styled.tr`

:nth-child(even) {
    background-color: #FAFAFC;
  }
`

const Headrow = styled.tr`
height:40px;

`

const Table = styled.table`
width:100%;
`
const HoldTable = styled.div`
overflow-x: auto;

@media screen and (max-width:768px){
    width:100%;
}
`