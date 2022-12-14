import React from "react";

import OldLogData from "../data/logs.json";
import Card from "./card-stack/card/Card";

import CardStack from "./card-stack/container/CardStack";

class LogOldContainer extends React.Component {
  getEntries() {
    return OldLogData.map((e) => <Card item={e} />);
  }

  render() {

    const styles2 = {
      "background-color": "#e6e6e6",
      "margin-top": "0px",
      "margin-bottom": "0px",
      "border-radius": "0px",
      "padding-top": "10px",
      "padding-bottom": "10px",
    };

    const headerStyle = {
      "font-weight": "900",
      color: "whitesmoke",
      padding: "10px"
    };

    return (
      <div>
        <div className="jumbotron" style={styles2}>
          
        </div>
      </div>
    );
  }
}

export default LogOldContainer;
