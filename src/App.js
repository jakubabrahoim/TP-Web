import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/NavigationBar'
import IntroContainer from './components/IntroContainer';
import AssignmentContainer from './components/AssignmentContainer';
import PeopleContainer from './components/PeopleContainer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroContainer />
      <AssignmentContainer />
      <PeopleContainer />
    </div>
  );
}

export default App;
