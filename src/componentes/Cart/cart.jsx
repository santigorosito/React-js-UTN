import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from './cart.module.scss'
import ItemCart from "../ItemCart";
import { addDoc, collection } from "firebase/firestore";
import db from '../../../db/firebase-confing.js';
import Swal from 'sweetalert2'

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const checkout = () => {
    const order = {
      cart: cart,
      date: new Date(),
      totalPrice: totalPrice
    };
  
    console.log('cart:', cart);
    console.log('totalPrice:', totalPrice);
    console.log('date:', new Date());

    addDoc(collection(db, 'orders'), order)
      .then(() => {
        setCart([]);
        Swal.fire({
          position: 'center',  
          icon: 'success',
          title: 'Compra realizada',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  if (cart.length === 0) {
    return (
        <h1 className={styles.title}>No hay productos en el carrito!!</h1>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      {cart.map(item => (
        <ItemCart key={item.id} item={item}/>
      ))}
        <div className={styles.container2}>
          <p>Cantidad de productos: {quantity}</p>
          <div>Total: ${totalPrice}</div>
          <button className={styles.btn} onClick={checkout}>Realizar Compra</button>
        </div>
      </div>
    </div>
  );
};


export default Cart;