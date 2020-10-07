import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/NavigationBar'
import IntroContainer from './components/IntroContainer';
import AssignmentContainer from './components/AssignmentContainer';
import PeopleContainer from './components/PeopleContainer';
import FooterContainer from './components/FooterContainer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroContainer />
      <AssignmentContainer />
      <PeopleContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
