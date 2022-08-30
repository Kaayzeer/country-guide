import React from "react";

import {
  StyledSection,
  StyledGrid,
  StyledCard,
  StyledImg,
  StyledInfo,
} from "./styles";

export default function FilteredCards({ regionData, goToDetail }) {
  console.log(regionData);

  return (
    <StyledSection>
      <StyledGrid className="grid">
        {regionData.map((country, idx) => (
          <StyledCard
            key={idx}
            className="card"
            onClick={() => goToDetail(regionData.name)}
          >
            <StyledImg src={country.flags} alt="country-image" />
            <StyledInfo className="infoContainer">
              <h4 className="countryName">{country.name}</h4>
              <p className="population">
                Population: <span>{country.population}</span>
              </p>
              <p className="region">
                Region: <span>{country.region}</span>
              </p>
              <p className="capital">
                Capital: <span>{country.capital}</span>
              </p>
            </StyledInfo>
          </StyledCard>
        ))}
      </StyledGrid>
    </StyledSection>
  );
}
