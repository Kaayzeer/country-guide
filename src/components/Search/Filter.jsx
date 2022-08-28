import React, { useState } from "react";
//styled-components
import styled from "styled-components";
//react-icons
import { IoIosArrowDown } from "react-icons/io";

import { IoMdArrowDropdown } from "react-icons/io";
const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

const StyledContainer = styled.div`
  position: relative;
  width: 50%;

  .selectIcon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 10;
  }
`;

const StyledOption = styled.option`
  position: absolute;
  top: 5px;
  left: 0px;
  transform: translateX(50%);
  padding-right: 1rem;
  border: none;
`;

export default function Filter({ regionValue, filterByRegion }) {
  /*   const handleChange = (e) => {};
  console.log(e.target.value); */

  return (
    <>
      <StyledContainer>
        <IoMdArrowDropdown className="selectIcon" />
        <select value={regionValue} onChange={filterByRegion}>
          <StyledOption disabled={true} value="">
            Filter by region
          </StyledOption>

          {continents.map((continents, idx) => (
            <StyledOption key={idx} value={continents}>
              {continents}
            </StyledOption>
          ))}
        </select>
      </StyledContainer>
    </>
  );
}
