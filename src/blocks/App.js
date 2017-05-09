import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './header/Header.js';
import { Footer } from './footer/Footer.js';
import { Main } from './main/Main.js';

function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

render((
  <App />
), document.getElementById('root'));