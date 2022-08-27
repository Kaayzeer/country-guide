import React from "react";
//styled-components
import styled from "styled-components";
//components
import Filter from "./Filter";
import SearchInput from "./SearchInput";

const StyledSection = styled.section`
  max-width: 1200px;
  padding: 0 40px;
  margin: 3rem auto;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Search({ handleClick, input, handleCountryChange }) {
  return (
    <StyledSection>
      <StyledForm onSubmit={handleClick}>
        <SearchInput input={input} handleCountryChange={handleCountryChange} />
        <Filter />
      </StyledForm>
    </StyledSection>
  );
}
