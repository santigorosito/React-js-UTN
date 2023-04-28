import styles from "./itemlistcontainer.module.scss";
import ItemList from "../ItemList";

const ItemListContainer = ({items}) => {
    return (
    <div className={styles.cuerpo}>
        {items.map((item) => (
            <ItemList item={item} key={item.id} {...item} />
        ))}
    </div>
    );
};

export default ItemListContainer;
