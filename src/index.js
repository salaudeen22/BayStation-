// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Assuming you have an App component
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <App/>
      <Main />
      <Menu/>
      <Footer/>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
