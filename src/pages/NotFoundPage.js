import React from "react";
import "../App.css";

import NavigationBar from "../components/NavigationBar";
import FooterContainer from "../components/FooterContainer";
import NotFoundTopComponent from "../components/NotFoundTopComponent";
import NotFoundBottomComponent from "../components/NotFoundBottomComponent";

function NotFoundPage() {
  const wrapper = {
    "display": "flex",
    "flex-direction": "column",
    "flex-wrap": "nowrap",
    "justify-content": "space-between",
  };

  return (
    <div className="App" style={wrapper}>
      <div>
        <NavigationBar />
        <NotFoundTopComponent />
        <NotFoundBottomComponent />
      </div>
      <FooterContainer />
    </div>
  );
}

export default NotFoundPage;
