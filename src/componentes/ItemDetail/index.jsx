/*importaciones*/
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-confing";
import { CartContext } from "../../contexts/CartContext";
import styles from "./itemdetail.module.scss";
import Checkout from "../Checkout";


const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [cart, setCart] = useContext(CartContext);
  const [isLoading, setisLoading] = useState(true);

/*funcion para agregar al carrito*/
  const addToCart = () => {
      setCart((currItems) => {
          const isItemsFound = currItems.find((item) => item.id == id);
          if(isItemsFound){
              return currItems.map((item) => {
                  if (item.id === id){
                      return {...item, quantity: item.quantity + 1};
                  } else {
                      return item
                  }
              });
          } else {
            return [...currItems, { id, quantity: 1, price: item.price, title: item.title, image: item.image, category: item.category }];
          }
      });
  };

/*funcion para sacar del carrito*/
  const removeItem = () => {
      setCart((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1){
              return currItems.filter((item) => item.id !== id);
          } else {
              return currItems.map((item) => {
                  if(item.id === id) {
                      return {...item, quantity: item.quantity - 1}                    
                  } else {
                      return item;
                  }
              });
          }
      });
  };

/*funcion para saber cantidad de articulos*/
  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

/*funcion para tener detalles del articulo*/
  const getItem = async () => {
    const itemDoc = doc(db, "items", id);
    const item = await getDoc(itemDoc);
    if (item.exists()) {
      setItem(item.data());
      setisLoading(false);
    } else {
      console.log("No existe el documento!");
    }
  };

  useEffect(() => {
    getItem();
  }, []);

return (
  <>
  {isLoading ? (<Checkout />) : (
    /*detalles del art*/
    <div>
      <h3>{item.title}</h3>
      <img src={item.image} width="250" height="250"/>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <div>
        {quantityPerItem > 0 ? (
          <button onClick={() => addToCart()}>+</button>
          ) : (
          <button className={styles.button} onClick={() => addToCart()}>Agregar el carrito</button>
          )}
      <div>
        {quantityPerItem > 0 && <div>{quantityPerItem}</div>}</div>
        {quantityPerItem > 0 && (
        <button onClick={() => removeItem(item.id)}>-</button>
        )}
      </div>
    </div>
    )}
  </>
  );
};

export default ItemDetail;