import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { useTheme, ThemeProvider } from 'emotion-theming'
import { css, Global } from '@emotion/core'

const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <Global styles={css`
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
      }
      #root {
        min-height: 100vh;
      }
    `} />
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
