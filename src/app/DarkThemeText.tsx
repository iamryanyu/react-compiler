'use client';

import { memo } from 'react';
import styles from './page.module.scss';

interface DarkThemeTextProps {
  status: boolean;
}
// const DarkThemeText = memo(({ status }: DarkThemeTextProps) => {
const DarkThemeText = ({ status }: DarkThemeTextProps) => {
  console.log('Theme status re-rendered');
  return (
    <>
      Currently{' '}
      <span className={styles['c-theme__status']}>
        {status ? 'Dark' : 'Light'}
      </span>{' '}
      theme
    </>
  );
};
// });

DarkThemeText.displayName = 'DarkThemeText';

export default DarkThemeText;
