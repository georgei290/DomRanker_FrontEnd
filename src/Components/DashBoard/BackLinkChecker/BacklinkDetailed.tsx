import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";

const BacklinkDetailed = () => {
  return (
    <div>
      <CardHolder>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </CardHolder>
    </div>
  );
};

export default BacklinkDetailed;

const CardHolder = styled.div`
  /* background-color: red; */
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;