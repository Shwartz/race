import React, {useState} from 'react';
import {ResultsTable} from "./ResultsTable";
import styles from './race.module.scss';

import {createTableByGroup} from "./template/tableByGroup";

export const Race = () => {
  const [sortBy, setSortBy] = useState('all');
  const [currentYear, setCurrentYear] = useState('2022');

  const isCurrent = (current, param) => (current === param) ? styles.current : '';

  return (
    <>
      <div className={styles.navigation}>
        <button className={isCurrent('2022', currentYear)} onClick={() => setCurrentYear('2022')} type="button">2022</button>
        <button className={isCurrent('2021', currentYear)} onClick={() => setCurrentYear('2021')} type="button">2021</button>
      </div>
      <div className={styles.navigation}>
        <button className={isCurrent('all', sortBy)} onClick={() => setSortBy('all')} type="button">Show all results</button>
        <button className={isCurrent('byAge', sortBy)} onClick={() => setSortBy('byAge')} type="button">Show by age</button>
        <button className={isCurrent('byGender', sortBy)} onClick={() => setSortBy('byGender')} type="button">Show by gender</button>
      </div>
      <div className={styles.race}>
        <div>
          <ResultsTable
            currentYear={currentYear}
            sortBy={sortBy}
          />
        </div>
      </div>
    </>
  )
}
