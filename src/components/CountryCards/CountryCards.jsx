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

export default function CountryCards({ countryData }) {
  const navigate = useNavigate();
  const { flags, name, population, region, capital } = countryData;

  return (
    <StyledSection>
      <StyledGrid className="grid">
        <StyledCard
          className="card"
          onClick={() => navigate(`/${name.common.toLowerCase()}`)}
        >
          <StyledImg src={flags?.svg} alt="country-image" />
          <StyledInfo className="infoContainer">
            <h4 className="countryName">{name !== undefined && name.common}</h4>
            <p className="population">
              Population: <span>{population}</span>
            </p>
            <p className="region">
              Region: <span>{region}</span>
            </p>
            <p className="capital">
              Capital: <span>{capital !== undefined && capital[0]}</span>
            </p>
          </StyledInfo>
        </StyledCard>
      </StyledGrid>
    </StyledSection>
  );
}
