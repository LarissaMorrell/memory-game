import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, orange, red } from '@material-ui/core/colors';
import './index.css';
import App from './App';
import cardDesign from './assets/card_design.jpg';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  status: {
    danger: red,
  }
});

ReactDOM.render(
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
    <img className="preload" src={cardDesign} alt="" />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
