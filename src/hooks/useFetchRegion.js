import { useState, useEffect } from "react";
//axios
import axios from "axios";

export default function useFetchRegion(region) {
  const [regionData, setRegionData] = useState([]);

  let regionsArray = [];
  let filteredRegions = [];

  useEffect(() => {
    if (region) {
      try {
        const fetchedregion = async () => {
          const res = await axios.get(
            `https://restcountries.com/v3.1/region/${region}`
          );

          if (res) {
            regionsArray.push({ ...res.data });
          }

          regionsArray.forEach((regionArray) => {
            for (let key in regionArray) {
              let country = regionArray[key];

              let flags = country.flags.svg;
              let name = country.name?.common;
              let population = country?.population;
              let region = country?.region;
              let capital = country?.capital;

              filteredRegions.push({
                flags: flags,
                name: name,
                population: population,
                region: region,
                capital: capital,
              });
            }
          });
          setRegionData(filteredRegions);
        };
        fetchedregion();
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [region]);
  return { regionData, setRegionData };
}
