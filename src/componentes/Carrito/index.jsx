import styles from "./carrito.module.scss";

const Carrito = ({icono}) => {
return (
    <div>
        <img src={icono} alt="" width="40" height="40" className={styles.carri} />
    </div>
);
};

export default Carrito;

