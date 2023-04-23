import React from "react";
import styles from "./Card.module.scss";
function Card({ id, onFavorite,  title, imageUrl, price, onPlus, favorited = false, added = false}) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({id, title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({id,title, imageUrl, price});
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{price} eur.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
                    alt="Plus"
                />
            </div>
        </div>
    );
}
export default Card;

