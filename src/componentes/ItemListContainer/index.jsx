import { Link } from "react-router-dom";
import Card from "../ItemList";
import styles from "./itemlistcontainer.module.scss";

const ItemListContainer = ({ item }) => {
    return (
    <div className={styles.cuerpo}>
        {item.map((item) => (
        <Link to={"${item.id}"}>
            <Card key={item.id} item={item} />
        </Link>
        ))}
    </div>
    );
};

export default ItemListContainer;
