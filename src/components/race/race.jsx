import React, {useState} from 'react';
import {data} from '../data/data';

import styles from './race.module.scss';

export const Race = () => {
  const [showBy, setShowBy] = useState('all')

  const head = (
    <div className={`${styles.grid} ${styles.head}`}>
      <div>Position all</div>
      <div>Time</div>
      <div>Race Nr</div>
      <div>First Name</div>
      <div>Last Name</div>
      <div>Club</div>
      <div>Gender</div>
      <div>Age</div>
    </div>
  )

  const createTable = (raceData, title = null) => {
    const raceTitle = title ? <h3>{title}</h3> : null;
    const table = raceData.map((row, i) => {
      return (
        <div className={styles.grid} key={i}>
          <div>{row.position}</div>
          <div>{row.time}</div>
          <div>{row.raceNumber}</div>
          <div>{row.firstName}</div>
          <div>{row.lastName}</div>
          <div title={row.club}>{row.club}</div>
          <div>{row.gender}</div>
          <div>{row.age}</div>
        </div>
      );
    });

    return [raceTitle, head, table];
  };

  const showByAge = (raceData) => {
    const age19 = raceData.filter(row => row.age < 20);
    const age29 = raceData.filter(row => row.age < 30 && row.age > 19);
    const age39 = raceData.filter(row => row.age < 40 && row.age > 29);
    const age49 = raceData.filter(row => row.age < 50 && row.age > 39);
    const age59 = raceData.filter(row => row.age < 60 && row.age > 49);
    const age100 = raceData.filter(row => row.age > 59);
    return [
      createTable(age19, 'Under 20'),
      createTable(age29, 'Under 30'),
      createTable(age39, 'Under 40'),
      createTable(age49, 'Under 50'),
      createTable(age59, 'Under 60'),
      createTable(age100, 'Seniors'),
    ];
  }

  let table;
  switch (showBy) {
    case 'all':
      table = createTable(data);
      break;
    case 'byAge':
      table = showByAge(data);
      break;
    case 'byGender':
      table = <div>gender</div>;
      break;
    default:
      table = createTable(data);
  }

  const showAllHandler = (filter) => () => setShowBy(filter);

  return (
    <div className={styles.race}>
      <button onClick={showAllHandler('all')} type="button">Show all results</button>
      <button onClick={showAllHandler('byAge')} type="button">Show by age</button>
      <button onClick={showAllHandler('byGender')} type="button">Show by gender</button>
      {table}
    </div>
  )
}
