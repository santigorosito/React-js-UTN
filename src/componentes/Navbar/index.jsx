import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
    <nav className={styles.container}>
        <NavLink to="/">
            <img src="https://cdn-icons-png.flaticon.com/512/869/869053.png" alt="" width="70px" height="70px" />
        </NavLink>
        <NavLink to="/category/men">
            <p>Men's</p>
        </NavLink>
        <NavLink to="/category/jewelery">
            <p>Jewelery</p>
        </NavLink>
        <NavLink to="/category/electronics">
            <p>Electronics</p>
        </NavLink>
        <NavLink to="/category/women">
            <p>Women's</p>
        </NavLink>
        <NavLink to="/cart">
            <img src="https://cdn-icons-png.flaticon.com/512/5381/5381441.png" alt="" width="50px" height="50px" className={styles.carrito}/>
        </NavLink>
    </nav>
    );
};

export default Navbar;
