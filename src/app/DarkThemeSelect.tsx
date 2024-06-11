'use client';

import { memo } from 'react';
import styles from './page.module.scss';

interface DarkThemeSelectProps {
  darkTheme: boolean;
  callback: () => void;
}

// const DarkThemeSelect = memo(({ darkTheme, callback }: DarkThemeSelectProps) => {
const DarkThemeSelect = ({ darkTheme, callback }: DarkThemeSelectProps) => {
  console.log('Theme checkbox re-rendered');
  return (
    <div className={styles['c-theme__enable']}>
      <input
        type='checkbox'
        id='theme'
        checked={darkTheme}
        onChange={callback}
      />
      <label htmlFor='theme'>enable dark theme</label>
    </div>
  );
};
// });

DarkThemeSelect.displayName = 'DarkThemeSelect';

export default DarkThemeSelect;
