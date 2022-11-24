import React from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import DocumentationPage from './pages/DocumentationPage';
import LogPage from './pages/LogPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/documentation" component={DocumentationPage} />
        <Route exact path="/log" component={LogPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
