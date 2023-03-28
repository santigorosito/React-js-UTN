import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ producto }) => {
return (
    <Link to={`${producto.id}`}>
        <div className={styles.container}>
        <h3>{producto.title}</h3>
        <img
            src={producto.image}
            alt={producto.title}
            width="200"
            height="200"
        />
        <p>$ {producto.price}</p>
        </div>
    </Link>
    );
};

export default Card;
