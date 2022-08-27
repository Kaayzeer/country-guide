import { useState, useEffect } from "react";
//axios
import axios from "axios";

export default function useFetchAll() {
  const [allCountriesData, setAllCountriesData] = useState([]);

  let countriesArray = [];
  let filteredCountries = [];

  const fetchedCountries = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");

    if (res) {
      countriesArray.push({ ...res.data });
    }

    countriesArray.forEach((countryArray) => {
      for (let key in countryArray) {
        let country = countryArray[key];

        let flags = country.flags.svg;
        let name = country.name?.common;
        let population = country?.population;
        let region = country?.region;
        let capital = country?.capital;

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

  //fetch all countries on page load
  useEffect(() => {
    fetchedCountries();
  }, []);

  /*     useEffect(() => {
      if (input.trim().length <= 1) {
        console.log(input);
        fetchedCountries();
      }
    }, [input]); */

  return { allCountriesData };
}
