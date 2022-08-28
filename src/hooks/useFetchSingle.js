import { useState, useEffect } from "react";
//axios
import axios from "axios";

export default function useFetchSingle(country) {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    if (country) {
      try {
        const fetchedCountry = async () => {
          const res = await axios.get(
            `https://restcountries.com/v3.1/name/${country}`
          );

          setCountryData(res.data);
        };
        fetchedCountry();
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [country]);
  return { countryData, setCountryData };
}
