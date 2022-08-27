import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${(props) => props.input};
  border: none;
  padding: 1rem 1.6rem;
  width: 100%;
  max-width: 24rem;
  border-radius: 8px;
`;

export default function SearchInput({ input, handleCountryChange }) {
  return (
    <>
      <StyledInput
        placeholder="Search for a country..."
        autoComplete="text"
        type="text"
        name="country"
        value={input}
        onChange={handleCountryChange}
      />
      <button type="submit">search</button>
    </>
  );
}
