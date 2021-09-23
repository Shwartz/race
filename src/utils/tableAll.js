import styles from "../components/race/race.module.scss";
import React from "react";

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

export const createTableAll = (raceData, title = null) => {
  const raceTitle = title ? <h3>{title}</h3> : null;
  const table = raceData.map((row, i) => {
    return (
      <div className={styles.grid} key={i.toString()}>
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

  return (
    <>
      {raceTitle}
      {head}
      {table}
    </>
  )
};
