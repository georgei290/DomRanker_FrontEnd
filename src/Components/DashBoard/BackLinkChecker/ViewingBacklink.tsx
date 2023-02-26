import React from "react";
import styled from "styled-components";
import InputComp from "../../../utils/ReusedComp/InputComp";
import BacklinkDetailed from "./BacklinkDetailed";
import BacklinkLevel from "./BacklinkLevel";
import BackLinkTable from "./BackLinkTable";
import BAcklinkTableHolder from "./BAcklinkTableHolder";

const ViewingBacklink = () => {
  return (
    <div>
      <div>
        <InputComp />
        <hr />
        {/* {newFunction()} */}

        <br />
        <BacklinkDetailed />
        <br />
        <BacklinkLevel />
        <br />

        <Table>
          <BackLinkTable title="Top referring domain anchor" color="#ae67fa" />
          <BackLinkTable title="Top backlink anchors " color="#5BD982" />
        </Table>
        <br />
        <BAcklinkTableHolder />
      </div>
    </div>
  );
};

export default ViewingBacklink;

const Table = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
