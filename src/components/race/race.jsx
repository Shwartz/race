import React from 'react';
import {data} from '../data/data';

import styles from './race.module.scss';

export const Race = () => {
  const head = (
    <>
      <div>Position</div>
      <div>Time</div>
      <div>Race Nr</div>
      <div>First Name</div>
      <div>Last Name</div>
      <div>Club</div>
      <div>Gender</div>
      <div>Age</div>
    </>
  )

  const table = data.map((row, i) => {
    return (
      <React.Fragment key={i}>
        <div>{row.position}</div>
        <div>{row.time}</div>
        <div>{row.raceNumber}</div>
        <div>{row.firstName}</div>
        <div>{row.lastName}</div>
        <div>{row.club}</div>
        <div>{row.gender}</div>
        <div>{row.age}</div>
      </React.Fragment>
    );
  });

  return (
    <div className={styles.race}>
      <button type="button">Show all results</button>
      <button type="button">Show by age</button>
      <button type="button">Show by gender</button>

      <div className={styles.grid}>
        {head}
        {table}
      </div>
    </div>
  )
}
