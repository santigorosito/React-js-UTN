import Card from "../Card";
import styles from "./itemlistcontainer.module.scss";

const ItemListContainer = ({ productos }) => {
    return (
    <div className={styles.cuerpo}>
        {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
        ))}
    </div>
    );
};

export default ItemListContainer;
