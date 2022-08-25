import React, { useState } from "react";
//styled-components
import styled from "styled-components";
//axios
import axios from "axios";

//components
import Filter from "./Filter";
import SearchInput from "./SearchInput";

const StyledSection = styled.section`
  max-width: 1200px;
  padding: 0 40px;
  margin: 2rem auto;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Search() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState([]);

  const fetchedCountry = async (anyCountry) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${anyCountry}`
    );
    console.log(res.data);
    setCountryData(res.data);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setCountry(e.target[0].value);
    fetchedCountry(country);
  };

  console.log(countryData[0].flag);

  return (
    <StyledSection>
      <StyledForm onSubmit={handleClick}>
        <SearchInput />
        <Filter />
      </StyledForm>
    </StyledSection>
  );
}
