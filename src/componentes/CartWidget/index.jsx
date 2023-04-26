import styles from "./cartWidget.module.scss";

const CartWidget = () => {
    return (
    <>
        <img src="https://cdn-icons-png.flaticon.com/512/5381/5381441.png" alt="" width="50px" height="50px" className={styles.carrito}/>
    </> 
    );
};

export default CartWidget;