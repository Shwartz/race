import React, {useEffect, useState} from "react";
import {TableAll} from "./template/tableAll";
import {sortByAge, sortByGender} from "../../utils";

const path = {
  '2021': '/race/data/data-202109.json',
  '2022': '/race/data/data-202209.json'
}

export const ResultsTable = ({currentYear, sortBy}) => {
  const [years, setYears] = useState({});

  // data get by year
  useEffect(() => {
    if (years?.[currentYear]?.length) return;

    try {
      async function fetchData() {
        const response = await fetch(path[currentYear]);
        // set loader etc
        const {data} = await response.json();
        setYears({...years, [currentYear]: data});
      }
      fetchData();
    } catch (err) {
      // setIsError(err);
      console.log('Error: ', err);
    }
  }, [currentYear, sortBy]);

  let table;
  switch (sortBy) {
    case 'all':
      table = <TableAll raceData={years[currentYear]} title={`All results - ${currentYear}`} />
      break;
    case 'byAge':
      table = sortByAge(years[currentYear] || []);
      break;
    case 'byGender':
      table = sortByGender(years[currentYear] || []);
      break;
    default:
      table = <TableAll raceData={years[currentYear]} title="All results" />
  }

  return (
    <>
      {years?.[currentYear] && table}
    </>
  )
}
