import React from 'react';
import '../App.css';

import NavigationBar from '../components/NavigationBar'
import IntroContainer from '../components/IntroContainer';
import AssignmentContainer from '../components/AssignmentContainer';
import PeopleContainer from '../components/PeopleContainer';
import FooterContainer from '../components/FooterContainer';
import AboutTeam from '../components/AboutTeam';

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <IntroContainer />
        <AssignmentContainer />
        <AboutTeam />
        <PeopleContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default HomePage;