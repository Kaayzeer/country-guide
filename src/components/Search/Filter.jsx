import React, { useState } from "react";
//styled-components
import styled from "styled-components";
//react-icons
import { IoIosArrowDown } from "react-icons/io";

const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

const StyledSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 0.8rem 2rem;
  border: none;
  overflow: hidden;
  /* appearance: none; */
  outline: 0;
  cursor: pointer;
  border-radius: 3px;
`;

const StyledOption = styled.option`
  padding-right: 1rem;
  border: none;
`;

export default function Filter({ regionValue, filterByRegion }) {
  /*   const handleChange = (e) => {};
  console.log(e.target.value); */

  return (
    <StyledSelect value={regionValue} onChange={filterByRegion}>
      <StyledOption disabled={true} value="">
        Filter by region
      </StyledOption>

      {continents.map((continents, idx) => (
        <StyledOption key={idx} value={continents}>
          {continents}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}
