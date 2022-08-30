import React, { useState, useEffect } from "react";
//react icons
import { HiArrowNarrowLeft } from "react-icons/hi";
//styled-components
import styled from "styled-components";
//react-router-dom
import { useParams, useNavigate } from "react-router-dom";
//hooks
import useFetchSingle from "../hooks/useFetchSingle";

const StyledContainer = styled.section`
  max-width: 1200px;
  padding-right: 40px;
  padding-left: 40px;
  margin: 0 auto;
  height: 100vh;

  .buttonWrapper {
    margin: 4rem 0;
    display: flex;
    position: relative;

    .back {
      border: none;
      outline: none;
      padding: 0.5rem;
      padding-left: 2.4rem;
      padding-right: 1rem;
      text-transform: capitalize;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: ${({ theme }) => theme.boxShadow};
      background-color: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      &:hover {
        opacity: 0.7;
        transition: all 0.3s ease;
      }
    }

    .arrow {
      position: absolute;
      top: 50%;
      left: 8px;
      transform: translateY(-50%);
    }
  }

  .details {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.7px;

    @media screen and (min-width: 1015px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    img {
      height: 200px;
      width: 300x;

      @media screen and (min-width: 500px) {
        height: 250px;
        width: 400x;
      }

      @media screen and (min-width: 800px) {
        height: 300px;
        width: 400x;
      }
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;

    @media screen and (min-width: 400px) {
      padding-left: 1rem;
    }

    @media screen and (min-width: 500px) {
      width: 80%;
    }

    @media screen and (min-width: 700px) {
      width: 60%;
    }

    @media screen and (min-width: 1015px) {
      justify-content: center;
      width: 50%;
    }

    .name {
      font-size: 24px;
      font-weight: 800;
    }
  }

  .overall {
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    @media screen and (min-width: 800px) {
      height: 250px;
    }

    p {
      font-size: 14px;
      font-weight: 600;

      span {
        font-weight: 200;
      }
    }
  }

  .borderCountries {
    display: flex;
    gap: 5px;
  }
`;

export default function Detail() {
  const [single, setSingle] = useState([
    {
      countryFlag: "",
      countryName: "",
      nativeName: "",
      population: "",
      region: "",
      subRegion: "",
      capital: "",
      topLevelDomain: "",
      currencies: "",
      languages: "",
    },
  ]);

  const navigate = useNavigate();
  const { nameParam } = useParams();

  const { countryData } = useFetchSingle(nameParam);

  console.log(countryData.length > 0 && countryData[0].flag);

  useEffect(() => {
    if (countryData.length > 0) {
      // manipulate nativeName and currency
      let nativeName = [];
      let currency = [];

      for (let key in countryData[0]?.name?.nativeName)
        nativeName.push(countryData[0]?.name?.nativeName[key]?.official);

      for (let key in countryData[0]?.currencies)
        currency.push(countryData[0]?.currencies[key]?.name);
      // ------------------------

      setSingle({
        countryFlag: countryData[0]?.flags.svg,
        countryName: countryData[0]?.name?.common,
        nativeName: nativeName[0],
        population: countryData[0]?.population,
        region: countryData[0]?.region,
        subRegion: countryData[0]?.subregion,
        capital: countryData[0]?.capital[0],
        topLevelDomain: countryData[0]?.tld[0],
        currencies: currency,
        languages: countryData[0]?.languages?.spa,
      });
    }
  }, [countryData]);

  const goBack = () => {
    navigate("/");
  };

  return (
    <StyledContainer>
      <div className="buttonWrapper">
        <button className="back" onClick={goBack}>
          back
        </button>
        <HiArrowNarrowLeft className="arrow" />
      </div>

      <div className="details">
        <div className="imgWrapper">
          <img src={single.countryFlag} alt="flag" />
        </div>

        <div className="info">
          <h3 className="name">{single.countryName}</h3>
          <div className="overall">
            <p className="native">
              Native Name: <span>{single.nativeName}</span>
            </p>
            <p className="pop">
              Population: <span>{single.population}</span>
            </p>
            <p className="region">
              Region: <span>{single.region}</span>
            </p>
            <p className="subreg">
              Sub Region: <span>{single.subRegion}</span>
            </p>
            <p className="capital">
              Capital:<span> {single.capital}</span>
            </p>
            <p className="tld">
              Top Level Domain: <span>{single.topLevelDomain}</span>
            </p>
            <p className="currencies">
              Currencies: <span>{single.currencies}</span>
            </p>
            <p className="languages">
              Languages: <span>{single.languages}</span>
            </p>
            <div className="borderCountries">
              <p className="btnPara"></p>
              <span className="countries"></span>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}
