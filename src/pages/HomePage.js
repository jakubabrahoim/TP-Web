import React from 'react';
import '../App.css';

import NavigationBar from '../components/NavigationBar'
import IntroContainer from '../components/IntroContainer';
import AssignmentContainer from '../components/AssignmentContainer';
import PeopleContainer from '../components/PeopleContainer';
import FooterContainer from '../components/FooterContainer';

function HomePage() {
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

export default HomePage;
