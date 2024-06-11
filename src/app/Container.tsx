'use client';

// import { useCallback, useMemo } from 'react';
import { ChangeEvent, useRef, useState } from 'react';
import styles from './page.module.scss';
import DarkThemeText from './DarkThemeText';
import DarkThemeSelect from './DarkThemeSelect';

function fib(n: number): number {
  console.log(`fib(${n}) function triggered`);
  if (n === 2) return 1;
  if (n === 1) return 0;

  return fib(n - 1) + fib(n - 2);
}

const Container = () => {
  const [fibIndex, setFibIndex] = useState(1);
  const [fibInputVal, setFibInputVal] = useState<number | string>(1);
  const [darkTheme, setDarkTheme] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  // const fibValue = useMemo(() => fib(fibIndex), [fibIndex]);

  // const handleDarkThemeSelect = useCallback(() => {
  //   if (pageRef.current) {
  //     pageRef.current.style.setProperty(
  //       '--body-background-color',
  //       darkTheme ? '#fff' : '#000'
  //     );
  //     pageRef.current.style.setProperty(
  //       '--body-font-color',
  //       darkTheme ? '#000' : '#fff'
  //     );
  //   }
  //   setDarkTheme(!darkTheme);
  // }, [darkTheme]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);

    if (!isNaN(value) && value !== 0) {
      setFibIndex(value);
      setFibInputVal(value);
    } else {
      setFibInputVal('');
    }
  }

  return (
    <div className={styles['l-page']} ref={pageRef}>
      <main className={`${styles['l-main']} ${styles['u-text-center']}`}>
        <h1>Fibonacci Sequence Calculator</h1>
        <p>Find Fibonacchi number of a given index in the sequence.</p>
        <div>
          <label htmlFor='fibIndex'>Fib index: </label>
          <input
            className={styles['c-input']}
            min='1'
            type='number'
            value={fibInputVal}
            onChange={handleChange}
          />
        </div>
        <div className={styles['c-result']}>
          <span>Fib number: </span>
          <span className={styles['result__num']}>{fib(fibIndex)}</span>
          {/* <span className={styles['result__num']}>{fibValue}</span> */}
        </div>

        <div className={styles['c-theme']}>
          <DarkThemeText status={darkTheme} />
          <DarkThemeSelect
            darkTheme={darkTheme}
            callback={() => {
              if (pageRef.current) {
                pageRef.current.style.setProperty(
                  '--body-background-color',
                  darkTheme ? '#fff' : '#000'
                );
                pageRef.current.style.setProperty(
                  '--body-font-color',
                  darkTheme ? '#000' : '#fff'
                );
              }
              setDarkTheme(!darkTheme);
            }}
            // callback={handleDarkThemeSelect}
          />
        </div>
      </main>
    </div>
  );
};

export default Container;
