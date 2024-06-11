# React Compiler Optimization Demo

The React Compiler optimizes applications by automatically memoizing your code.

Unlike manual memoization with APIs like `useMemo`, `useCallback`, and `React.memo`, the compiler handles it for you, reducing the risk of inefficient updates. It identifies and memoizes values or groups of values within components and hooks, skipping over any that break the Rules of React.

With this demonstration, we’ll explore `useMemo`, `useCallback`, and `React.memo`, and then demonstrate how the React Compiler works seamlessly without them.

Read the full article for a detailed explanation: [React Compiler - What, How & Why](https://frontendly.io/blog/react-compiler)
