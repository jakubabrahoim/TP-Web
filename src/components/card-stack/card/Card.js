import React from "react";

import styles from "./card-style.module.css";

class Card extends React.Component {
  render() {
    return (
      <a href={this.props.item.doc} className={styles.wrapper}>
        <div>
          <p className={styles.card_date}>{this.props.item.date}</p>
          <h4 className={styles.card_title}>{this.props.item.title}</h4>
          <p className={styles.card_author}>Autor: {this.props.item.author}</p>
        </div>
        <div className={styles.card_downloadbtn}>Stiahnuť</div>
      </a>
    );
  }
}

export default Card;
