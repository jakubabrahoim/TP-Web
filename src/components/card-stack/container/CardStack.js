import React from "react";

import styles from "./cardstack-style.module.css";

class CardStack extends React.Component {

  render() {
    const entries = this.props.items;

    return <div className={styles.wrapper}>{entries}</div>;
  }
}

export default CardStack;
