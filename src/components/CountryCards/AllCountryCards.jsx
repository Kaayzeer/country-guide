import React from "react";
//react-router-dom
import { useNavigate } from "react-router-dom";
import {
  StyledSection,
  StyledGrid,
  StyledCard,
  StyledImg,
  StyledInfo,
} from "./styles";

export default function CountryCards({ allCountriesData, goToDetail }) {
  const navigate = useNavigate();

  return (
    <>
      <StyledSection>
        <StyledGrid>
          {allCountriesData.map((countriesData, idx) => (
            <StyledCard
              key={idx}
              onClick={() => goToDetail(countriesData.name)}
            >
              <StyledImg src={countriesData.flags} alt="country-image" />
              <StyledInfo>
                <h4 className="countryName">{countriesData.name}</h4>
                <p className="population">
                  Population: <span>{countriesData.population}</span>
                </p>
                <p className="region">
                  Region: <span>{countriesData.region}</span>
                </p>
                <p className="capital">
                  Capital: <span>{countriesData.capital}</span>
                </p>
              </StyledInfo>
            </StyledCard>
          ))}
        </StyledGrid>
      </StyledSection>
    </>
  );
}
