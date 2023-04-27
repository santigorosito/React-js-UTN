import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import styles from './itemcart.module.scss'

const ItemCart = ({ item }) => {
    const [cart, setCart] = useContext(CartContext);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

return (
    <div className={styles.card}>
        <div>
            <img className={styles.imagen} src={item.image} alt="" />
        </div>
        <div className={styles.conteiner}>
            <p className={styles.category}>{item.category}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio ${item.price}</p>
            <p>Subtotal: ${item.quantity * item.price}</p>
            <button className={styles.button2} onClick={() => removeFromCart(item.id)}>Eliminar producto</button>
        </div>
    </div>
)
}

export default ItemCart;
