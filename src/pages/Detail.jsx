import React, { useState, useMemo } from "react";
//react icons
import { HiArrowNarrowLeft } from "react-icons/hi";
//react-router-dom
import { useParams, useNavigate } from "react-router-dom";
//hooks
import useFetchSingle from "../hooks/useFetchSingle";
//styles
import { StyledContainer } from "../styles/detail";

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

  console.log(countryData.length > 0 && countryData[0]?.languages);

  //memoeize the data for minimize rerendering of state data and faster applicability
  useMemo(() => {
    if (countryData.length > 0) {
      // manipulate nativeName and currency
      let nativeName = [];
      let currency = [];
      let languages = [];

      for (let key in countryData[0]?.name?.nativeName)
        nativeName.push(countryData[0]?.name?.nativeName[key]?.official);

      for (let key in countryData[0]?.currencies)
        currency.push(countryData[0]?.currencies[key]?.name);

      for (let key in countryData[0]?.languages)
        languages.push(countryData[0]?.languages[key]);
      // ------------------------

      // comma separated object values === languages
      const language = Object.values(languages).join(", ");
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
        languages: language,
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
            <p>
              Languages:
              <span className="languages">{single.languages}</span>
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
