/*importaciones*/
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import CartWidget from "../CartWidget";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

/*usecontext para acceder al contexto del carrito y asi sumando los elementos dentro del carrito*/
const Navbar = () => {
    const  [cart] = useContext(CartContext)
    const quantity = cart.reduce((acc, curr) =>{
    return acc + curr.quantity
    }, 0);

/*navbar con las distintas categorias de elementos*/
    return (
    <nav className={styles.container}>
        <div>
            <NavLink to="/">
                <img src="https://cdn-icons-png.flaticon.com/512/869/869053.png" alt="" width="70px" height="70px" />
            </NavLink>
        </div>
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
        <NavLink to="/cart" className={styles.quantity}>
            <CartWidget />{quantity}    
        </NavLink>
    </nav>
    );
};

export default Navbar;
