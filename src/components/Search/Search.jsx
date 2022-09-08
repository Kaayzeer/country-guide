import React from "react";

//styled-components
import styled from "styled-components";
//components
import Filter from "./Filter";
import SearchInput from "./SearchInput";
//react-icons
import { AiOutlineSearch } from "react-icons/ai";

const StyledSection = styled.section`
  max-width: 1200px;
  overflow-x: hidden;
  padding: 0 40px;
  margin: 2rem auto;
`;

const StyledForm = styled.form`
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: 550px) {
    flex-direction: row;
  }

  input {
    background-color: ${({ theme }) => theme.elements};
    border: none;
    width: 100%;
    max-width: 350px;
    padding: 0.7rem 0rem;
    border-radius: 8px;

    &::placeholder {
      padding: 0px 40px;
    }
  }

  .button {
    position: absolute;
    top: 0;
    left: 5px;
    height: 20px;
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

    @media screen and (min-width: 550px) {
      flex-direction: row;
      align-items: center;
    }
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
        <input
          placeholder="Search for a country..."
          autoComplete="text"
          type="text"
          name="country"
          value={input}
          onChange={handleCountryChange}
        />
        <button type="submit" className="button">
          <AiOutlineSearch className="icon" />
        </button>
        {/*   <SearchInput
          input={input}
          handleCountryChange={handleCountryChange}
  
        /> */}
        <Filter filterByRegion={filterByRegion} regionValue={regionValue} />
      </StyledForm>
    </StyledSection>
  );
}
