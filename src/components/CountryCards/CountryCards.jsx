import React from "react";
//styled components
import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 1200px;
  padding: 0 40px;
  margin: 2rem auto;

  .grid {
    width: 25%;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    .gridArea {
      grid-area: 1 / 1 / 4 / 5;

      .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: 600;

        img {
          width: 100%;
          min-height: 50%;
        }

        .infoContainer {
          height: 100%;
          padding-left: 1.2rem;
          margin-top: 10px;
          line-height: 10px;
          .countryName {
            font-weight: 800;
          }
          .population {
          }

          .region {
          }
          .capital {
          }
          span {
            font-weight: lighter;
          }
        }
      }
    }
  }
`;

export default function CountryCards({ countryData }) {
  const { flags, name, population, region, capital } = countryData;

  return (
    <StyledSection>
      <div className="grid">
        <div className="gridArea">
          <div className="card">
            <img src={flags?.svg} alt="country-image" />
            <div className="infoContainer">
              <h4 className="countryName">
                {name !== undefined && name.common}
              </h4>
              <p className="population">
                Population: <span>{population}</span>
              </p>
              <p className="region">
                Region: <span>{region}</span>
              </p>
              <p className="capital">
                Capital: <span>{capital !== undefined && capital[0]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
