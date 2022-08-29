import React, { useState, useEffect } from "react";
//styled-components
import styled from "styled-components";
//react-router-dom
import { useParams } from "react-router-dom";
//hooks
import useFetchSingle from "../hooks/useFetchSingle";

const StyledContainer = styled.section`
  max-width: 1200px;
  padding-right: 40px;
  padding-left: 40px;

  .back {
  }

  .details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 200px;
      width: 300x;
    }
  }

  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .overall {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  p {
    font-size: 14px;
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
  let { nameParam } = useParams();

  const { countryData } = useFetchSingle(nameParam);

  console.log(countryData.length > 0 && countryData[0].flag);

  useEffect(() => {
    if (countryData.length > 0) {
      console.log(countryData[0]?.currencies);

      // manipulate nativeName and currency
      let nativeName = [];
      let currency = [];

      for (let key in countryData[0]?.name?.nativeName)
        nativeName.push(countryData[0]?.name?.nativeName[key]?.official);

      for (let key in countryData[0]?.currencies)
        currency.push(countryData[0]?.currencies[key]?.name);
      // ------------------------

      setSingle({
        ...single,
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

  return (
    <StyledContainer>
      <button className="back">back</button>
      <div className="details">
        <img src={single.countryFlag} alt="flag" />
        <div className="info">
          <h3 className="name">{single.countryName}</h3>
          <div className="overall">
            <p className="native">{single.nativeName}</p>
            <p className="pop">{single.population}</p>
            <p className="region">{single.region}</p>
            <p className="subreg">{single.subRegion}</p>
            <p className="capital">{single.capital}</p>
            <p className="tld">{single.topLevelDomain}</p>
            <p className="currencies">{single.currencies}</p>
            <p className="languages">{single.languages}</p>
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
