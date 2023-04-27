import { Link } from "react-router-dom";
import styles from "./itemlistcontainer.module.scss";
import ItemList from "../ItemList";

const ItemListContainer = ({items}) => {
    return (
    <div className={styles.cuerpo}>
        {items.map((item) => (
            <ItemList key={item.id} item={item} />
        ))}
    </div>
    );
};

export default ItemListContainer;
