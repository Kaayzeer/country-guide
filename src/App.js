import { useEffect, useState } from "react";
// styled components
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
//components
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import CountryCards from "./components/CountryCards/CountryCards";
import AllCountryCards from "./components/CountryCards/AllCountryCards";
//hooks
import useFetchAll from "./hooks/useFetchAll";
import useFetchSingle from "./hooks/useFetchSingle";

function App() {
  //themestate
  const [theme, setTheme] = useState("light");
  //countryStates
  const [country, setCountry] = useState("");
  /*  const [countryData, setCountryData] = useState([]); */
  /*   const [allCountriesData, setAllCountriesData] = useState([]); */
  const [input, setInput] = useState("");

  const { allCountriesData } = useFetchAll();
  const { countryData } = useFetchSingle(country);
  //theme variable
  const isDarkTheme = theme === "dark";
  //theme Toggler
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  //handle input click
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setCountry(e.target[0].value);
  };

  // input changes
  const handleCountryChange = (e) => {
    setInput(e.target.value);
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
        />
        {countryData.length > 0 && (
          <CountryCards countryData={countryData[0]} />
        )}
        {countryData.length <= 0 && (
          <AllCountryCards allCountriesData={allCountriesData} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
