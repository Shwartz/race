import styles from "../race.module.scss";
import React from "react";

const head = (
  <div className={`${styles.grid9} ${styles.head}`}>
    <div>Position all</div>
    <div>Position in group</div>
    <div>Time</div>
    <div>Race Nr</div>
    <div>First Name</div>
    <div>Last Name</div>
    <div>Club</div>
    <div>Gender</div>
    <div>Age</div>
  </div>
)

export const createTableByGroup = (raceData, title = null) => {
  const raceTitle = title ? <h3>{title}</h3> : null;
  const table = raceData.map((row, i) => {
    return (
      <div className={`${styles.grid9}`} key={i.toString()}>
        <div>{row.position}</div>
        <div>{i + 1}</div>
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
