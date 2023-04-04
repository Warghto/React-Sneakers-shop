import styles from  './Card.module.scss'
function Index(props) {
    console.log(props)
    return (
        <div className={styles.card}>
            <div className="favorite">
                <img src="/img/unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{props.price} eur.</b>
                </div>
                <button className="button" onClick={props.onClick}>
                    <img width={11} height={11} src="/img/plus.svg"/>
                </button>
            </div>
        </div>
    );
}
export default Index;