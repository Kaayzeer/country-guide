import React from "react";

//styled-components
import styled from "styled-components";
//components
import Filter from "./Filter";
import SearchInput from "./SearchInput";

const StyledSection = styled.section`
  max-width: 1200px;
  padding-right: 40px;
  padding-left: 40px;
  margin: 3rem auto;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 550px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default function Search({
  handleClick,
  input,
  handleCountryChange,
  /*   showAll, */
  filterByRegion,
  regionValue,
}) {
  return (
    <StyledSection>
      <StyledForm onSubmit={handleClick}>
        <SearchInput
          input={input}
          handleCountryChange={handleCountryChange}
          /* showAll={showAll} */
        />
        <Filter filterByRegion={filterByRegion} regionValue={regionValue} />
      </StyledForm>
    </StyledSection>
  );
}
