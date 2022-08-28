import React from "react";
//styled-components
import styled from "styled-components";
//react-icons
import { AiOutlineSearch } from "react-icons/ai";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 550px) {
    flex-direction: row;
  }

  input {
    background-color: ${(props) => props.input};
    border: none;
    width: 100%;
    max-width: 350px;
    padding: 1rem 2.7rem;
    border-radius: 8px;

    @media screen and (min-width: 550px) {
    }
  }

  button {
    position: absolute;
    top: 0;
    left: 5px;
    height: 24px;
    width: 30px;
    transform: translateY(50%);
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      opacity: 0.4;
      transition: all 0.3s ease-in-out;
    }

    .icon {
      border: none;
    }
  }
`;

export default function SearchInput({
  input,
  handleCountryChange /* , showAll  */,
}) {
  return (
    <StyledContainer>
      <input
        placeholder="Search for a country..."
        autoComplete="text"
        type="text"
        name="country"
        value={input}
        onChange={handleCountryChange}
      />
      <button type="submit">
        <AiOutlineSearch className="icon" />
      </button>
      {/*  <button type="text" onClick={showAll}>
        show all
      </button> */}
    </StyledContainer>
  );
}
