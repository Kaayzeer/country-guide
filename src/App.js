import { useEffect, useState } from "react";
// styled components
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
//components
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import CountryCards from "./components/CountryCards/CountryCards";
import AllCountryCards from "./components/CountryCards/AllCountryCards";
//axios
import axios from "axios";

function App() {
  //themestate
  const [theme, setTheme] = useState("light");
  //countryStates
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [allCountriesData, setAllCountriesData] = useState([]);

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

  //listen to country variable changes
  useEffect(() => {
    if (country) {
      const fetchedCountry = async (anyCountry) => {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${anyCountry}`
        );

        setCountryData(res.data);
      };

      fetchedCountry(country);
    }
  }, [country]);

  //fetch all on page load
  useEffect(() => {
    let arr = [];
    let filteredCountries = [];
    const fetchedCountries = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");

      if (res) {
        arr.push({ ...res.data });
      }
      /*     console.log(arr); */
      arr.forEach((arrayItem, idx) => {
        for (let key in arrayItem) {
          let countryArrays = arrayItem[key];

          let flags = countryArrays.flags.svg;
          let name = countryArrays.name?.common;
          let population = countryArrays?.population;
          let region = countryArrays?.region;
          let capital = countryArrays?.capital;

          filteredCountries.push({
            flags: flags,
            name: name,
            population: population,
            region: region,
            capital: capital,
          });
        }
      });
      setAllCountriesData(filteredCountries);
    };

    fetchedCountries();
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Search handleClick={handleClick} />
        {countryData.length > 0 && (
          <CountryCards countryData={countryData[0]} />
        )}
        {countryData.length <= 0 && (
          <AllCountryCards allCountriesData={allCountriesData} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
