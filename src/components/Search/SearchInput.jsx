import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${(props) => props.input};
  border: none;
`;

export default function SearchInput() {
  return (
    <>
      <StyledInput
        placeholder="Search for a country..."
        autoComplete="text"
        type="text"
        name="country"
      />
      <button type="submit">search</button>
    </>
  );
}
