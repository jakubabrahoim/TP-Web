import React from "react";
import "../App.css";
import styles from './page-style.module.css';

import NavigationBar from "../components/NavigationBar";
import IntroLogContainer from "../components/IntroLogContainer";
import FooterContainer from "../components/FooterContainer";
import LogOldContainter from "../components/LogOldContainer";

class LogPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <NavigationBar />
          <IntroLogContainer />
          <LogOldContainter />
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default LogPage;
