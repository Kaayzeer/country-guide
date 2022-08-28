import { useEffect, useState } from "react";
// styled components
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
//components
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import CountryCards from "./components/CountryCards/CountryCards";
import AllCountryCards from "./components/CountryCards/AllCountryCards";
import FilteredCards from "./components/CountryCards/FilteredCards";
//hooks
import useFetchAll from "./hooks/useFetchAll";
import useFetchSingle from "./hooks/useFetchSingle";
import useFetchRegion from "./hooks/useFetchRegion";

function App() {
  //themestate
  const [theme, setTheme] = useState("light");
  //countryStates
  const [country, setCountry] = useState("");
  const [input, setInput] = useState("");
  const [regionValue, setRegionValue] = useState("");

  //hook declarations
  const { allCountriesData } = useFetchAll();
  const { countryData, setCountryData } = useFetchSingle(country);
  const { regionData, setRegionData } = useFetchRegion(regionValue);
  //theme variable
  const isDarkTheme = theme === "dark";
  //theme Toggler
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

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

  console.log(regionData);

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

  // input changes
  const handleCountryChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      showAll();
    }
  };

  return (
    <div style={{ width: "100vw" }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
