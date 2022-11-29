import React from "react";
import Card from "./card-stack/card/Card";

import LogData from "../data/logs2.json";

import CardStack from "./card-stack/container/CardStack";
class IntroLogContainer extends React.Component {
  getEntries() {
    return LogData.map((e) => <Card item={e} />);
  }

  render() {
    const styles = {
      "background": "#DDD",
      "margin-top": "30px",
      "margin-bottom": "-15px",
      "border-radius": "0px",
  };

    const headerStyle = {
      "font-weight": "700",
      "color": "black"
    };

    return (
      <div>
        <div className="jumbotron" style={styles}>
          <h2 style={headerStyle}>Zápisnice pre tímový projekt </h2>
        </div>
      </div>
    );
  }
}

export default IntroLogContainer;
