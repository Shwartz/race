import React, {useEffect, useState} from "react";
import {TableAll} from "./template/tableAll";
import {sortByAge} from "../../utils";

const path = {
  '2021': '/race/data/data-202109.json',
  '2022': '/race/data/data-202209.json'
}

export const ResultsTable = ({currentYear, sortBy}) => {
  const [years, setYears] = useState({});
  console.log({currentYear, sortBy});

  // data get by year
  useEffect(() => {
    console.log('request', years?.[currentYear]?.length);
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
  console.log('-- 1 years: ', years);
  console.log('-- 2 years: ', years[currentYear]);

  let table;
  switch (sortBy) {
    case 'all':
      // table = createTableAll(data202109, 'All results');
      table = <TableAll raceData={years[currentYear]} title="All results" />
      break;
    case 'byAge':
      table = sortByAge(years[currentYear]);
      break;
    case 'byGender':
      // table = sortByGender(data202109);
      break;
    default:
      table = <TableAll raceData={years[currentYear]} title="All results" />
  }

  return (
    <div>
      <p>boom</p>
      {years?.[currentYear] && table}
    </div>
  )
}
