import React from "react";
import styled from "styled-components";

const EmptyKeyWord = () => {
  return (
    <Container>
      <Wrapper>
        <TopInputData>
          <Title>Keyword Data</Title>
          <SubTitle>
            Keyword Data Explorer will help you appreciate the scale of
            information that Domranker Keyword provides.
          </SubTitle>
          <InputsHold>
            <DropdownHolds>
              <FunctionsSelect>
                <label>Functions</label>
                <select>
                  <option>Summary</option>
                  <option>Function 2</option>
                  <option>Function 3</option>
                  <option>Function 4</option>
                  <option>Function 5</option>
                  <option>Function 6</option>
                </select>
              </FunctionsSelect>
              <FunctionsSelect>
                <label>Include Subdomains</label>
                <select>
                  <option>Enable</option>
                  <option>Function 2</option>
                  <option>Function 3</option>
                  <option>Function 4</option>
                  <option>Function 5</option>
                  <option>Function 6</option>
                </select>
              </FunctionsSelect>
              <FunctionsSelect>
                <label>Backlink Status Type</label>
                <select>
                  <option>Live</option>
                  <option>Function 2</option>
                  <option>Function 3</option>
                  <option>Function 4</option>
                  <option>Function 5</option>
                  <option>Function 6</option>
                </select>
              </FunctionsSelect>
              <FunctionsSelect>
                <label>Internal List Limit</label>
                <select>
                  <option>10</option>
                  <option>Function 2</option>
                  <option>Function 3</option>
                  <option>Function 4</option>
                  <option>Function 5</option>
                  <option>Function 6</option>
                </select>
              </FunctionsSelect>
            </DropdownHolds>

            <SearchHold>
              <label>Keyword</label>
              <input type="search" placeholder="Enter the Target" />
            </SearchHold>
          </InputsHold>
        </TopInputData>
        <hr />
        <BottomEmptyData>buttom</BottomEmptyData>
      </Wrapper>
    </Container>
  );
};

export default EmptyKeyWord;

const Container = styled.div``;
const Wrapper = styled.div``;
const TopInputData = styled.div``;
const BottomEmptyData = styled.div``;
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
`;
const SubTitle = styled.div`
  font-size: 12px;
`;
const InputsHold = styled.div`
  margin: 20px 0;
`;
const DropdownHolds = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;
const FunctionsSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  select {
    height: 35px;
    width: 250px;
    font-family: montserrat;
    border: 1px solid #dddddd;
    color: #3e4581;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }
  label {
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 3px;
  }

  @media (max-width: 500px) {
    select {
      height: 40px;
      width: 100px;
      font-size: 12px;
    }
  }
`;
const SearchHold = styled.div``;
