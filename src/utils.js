import {createTableByGroup} from "./components/race/template/tableByGroup";
import React from "react";

export const sortByAge = (raceData) => {
  const age19 = raceData.filter(row => row.age < 20);
  const age29 = raceData.filter(row => row.age < 30 && row.age > 19);
  const age39 = raceData.filter(row => row.age < 40 && row.age > 29);
  const age49 = raceData.filter(row => row.age < 50 && row.age > 39);
  const age59 = raceData.filter(row => row.age < 60 && row.age > 49);
  const age100 = raceData.filter(row => row.age > 59);
  return (
    <>
      {createTableByGroup(age19, 'Under 20')}
      {createTableByGroup(age29, 'Under 30')}
      {createTableByGroup(age39, 'Under 40')}
      {createTableByGroup(age49, 'Under 50')}
      {createTableByGroup(age59, 'Under 60')}
      {createTableByGroup(age100, 'Seniors')}
    </>
  )
}

const sortByGender = (raceData) => {
  const female = raceData.filter(row => row.gender === 'Female');
  const male = raceData.filter(row => row.gender === 'Male');

  return (
    <>
      {createTableByGroup(female, 'Female')}
      {createTableByGroup(male, 'Male')}
    </>
  )
}
