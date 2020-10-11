import React from 'react';
import '../App.css';

import NavigationBar from '../components/NavigationBar';
import FooterContainer from '../components/FooterContainer';
import NotFoundTopComponent from '../components/NotFoundTopComponent';
import NotFoundBottomComponent from '../components/NotFoundBottomComponent';
import BlankJumbotron from '../components/BlankJumbotron';

function NotFoundPage() {
  return (
    <div className="App">
      <NavigationBar />
      <NotFoundTopComponent />
      <NotFoundBottomComponent />
      <BlankJumbotron />
      <FooterContainer />
    </div>
  );
}

export default NotFoundPage;
