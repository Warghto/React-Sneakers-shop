import React from "react";
import styles from "./Card.module.scss";
function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(true);
  };

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={props.onFavorite}>
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{props.price} eur.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/plus.svg" : "/img/plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default Card;

