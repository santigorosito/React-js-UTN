import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const ItemList = ({ item }) => {
return (
    <div className={styles.container}>
            <Link to={`${item.id}`}>
                <h3 key={item.id}>{item.title}</h3>
                <img src={item.image} alt={item.title} width="140" height="140"/>
                <p>$ {item.price}</p>
                <button>CLICK ACA!</button>
            </Link>
    </div>
    );
};

export default ItemList;
