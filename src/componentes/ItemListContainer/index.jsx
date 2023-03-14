import styles from "./item.module.scss";

const ItemListContainer = ({ greeting }) => {
    return (
    <div className={styles.item}>
        <p>{greeting}</p>
    </div>
    );
};

export default ItemListContainer;  