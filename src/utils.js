import {CreateTableByGroup} from "./components/race/template/tableByGroup";
import React from "react";

const hasAge = (age) => {
  const isNumber = parseInt(age, 10);
  if (isNaN(isNumber) || isNumber === 0) {
    return 0;
  }
  return isNumber;
}

export const sortByAge = (raceData) => {
  const age19 = raceData.filter(row => row.age < 20 && row.age > 0);
  const age29 = raceData.filter(row => row.age < 30 && row.age > 19);
  const age39 = raceData.filter(row => row.age < 40 && row.age > 29);
  const age49 = raceData.filter(row => row.age < 50 && row.age > 39);
  const age59 = raceData.filter(row => row.age < 60 && row.age > 49);
  const age100 = raceData.filter(row => row.age > 59);
  const noAge = raceData.filter(row => hasAge(row.age) === 0);

  const allAgeArr = [
    {data: age19, title: 'Under 20'},
    {data: age29, title: 'Under 30'},
    {data: age39, title: 'Under 40'},
    {data: age49, title: 'Under 50'},
    {data: age59, title: 'Under 60'},
    {data: age100, title: 'Seniors'},
    {data: noAge, title: 'Unknown age'},
  ];
  const table = allAgeArr.map((age, i) => {
    if (age.data.length > 0) {
      return <CreateTableByGroup data={age.data} title={age.title} key={i} />
    }
    return [];
  })

  return (
    <>
      {table}
    </>
  )
}

export const sortByGender = (raceData) => {
  const female = raceData.filter(row => row.gender === 'Female');
  const male = raceData.filter(row => row.gender === 'Male');
  const hasData = female.length > 0 && male.length > 0;

  return (
    <>
      {hasData &&
        (<>
            <CreateTableByGroup data={female} title="Female" />
            <CreateTableByGroup data={male} title="Male" />
        </>)
      }
      {!hasData && <div>No data available</div>}
    </>
  )
}
