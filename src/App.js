import React from 'react';
import GlobalStyle from './styles/globalStyles'
import Header from './Components/Header';
import Routes from './routes'
import { Router } from 'react-router-dom';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>

  );
}

export default App;
