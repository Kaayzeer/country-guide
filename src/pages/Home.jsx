import React, { useState } from "react";

//components
import Search from "../components/Search/Search";
import CountryCards from "../components/CountryCards/CountryCards";
import AllCountryCards from "../components/CountryCards/AllCountryCards";
import FilteredCards from "../components/CountryCards/FilteredCards";
//hooks
import useFetchAll from "../hooks/useFetchAll";
import useFetchSingle from "../hooks/useFetchSingle";
import useFetchRegion from "../hooks/useFetchRegion";

export default function Home() {
  //countryStates
  const [country, setCountry] = useState("");
  const [input, setInput] = useState("");
  const [regionValue, setRegionValue] = useState("");

  //hook declarations
  const { allCountriesData } = useFetchAll();
  const { countryData, setCountryData } = useFetchSingle(country);
  const { regionData, setRegionData } = useFetchRegion(regionValue);

  console.log(allCountriesData);

  //resets
  const showAll = () => {
    setInput("");
    setCountryData([]);
  };
  const hideRegion = () => {
    setRegionData([]);
    setRegionValue("");
  };
  const hideSingleCountry = () => {
    setCountry("");
    setCountryData([]);
  };

  // event handlers
  const handleClick = (e) => {
    e.preventDefault();
    setCountry(e.target[0].value);
    hideRegion();
    console.log(e.target[0].value);
  };

  const filterByRegion = (e) => {
    setInput("");
    hideSingleCountry();
    setRegionValue(e.target.value);
  };

  const handleCountryChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      showAll();
    }
  };
  return (
    <>
      <Search
        handleClick={handleClick}
        input={input}
        handleCountryChange={handleCountryChange}
        /*  showAll={showAll} */
        regionValue={regionValue}
        filterByRegion={filterByRegion}
      />
      {countryData.length > 0 && regionData.length <= 0 && (
        <CountryCards countryData={countryData[0]} />
      )}
      {countryData.length <= 0 && regionData.length <= 0 && (
        <AllCountryCards
          allCountriesData={allCountriesData}
          regionData={regionData}
        />
      )}
      {regionData.length > 0 && countryData.length <= 0 && (
        <FilteredCards regionData={regionData} />
      )}
    </>
  );
}
