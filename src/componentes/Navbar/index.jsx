import Carrito from "../Carrito";
import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
    <div className={styles.container}>
    <p>Inicio</p>
    <p>Galeria</p>
    <p>Nosotros</p>
    <p>Contacto</p>
    <Carrito icono="https://cdn-icons-png.flaticon.com/512/5465/5465858.png"/><p>4</p>
    </div>
);
};

export default Navbar;
