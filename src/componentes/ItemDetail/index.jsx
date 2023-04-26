import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-confing";
import { CartContext } from "../../contexts/CartContext";
import styles from "./itemdetail.module.scss";


const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (id) => {
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
              return [...currItems,{ id, quantity: 1, price: item.price }];
          }
      });
  };

  const removeItem = (id) => {
      setCart((currItem) => {
          if (currItem.find((item) => item.id === id)?.quantity === 1){
              return currItem.filter((item) => item.id !== id);
          } else {
              return currItem.map((item) => {
                  if(item.id === id) {
                      return {...item, quantity: item.quantity - 1}                    
                  } else {
                      return item;
                  }
              });
          }
      });
  }

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);


  const getItem = async () => {
    const itemDoc = doc(db, "item", id);
    const item = await getDoc(itemDoc);
    if (item.exists()) {
      setItem(item.data());
    } else {
      console.log("No existe el documento!");
    }
  };


  useEffect(() => {
    getItem();
  }, []);

return (
  <div>
      {quantityPerItem > 0 && (
        <div>{quantityPerItem}</div>
      )}

      <h3>{item.title}</h3>
      <img src={item.image} width="250" height="250"/>
      <p>${item.price}</p>
      {quantityPerItem === 0 ? (
        <button className={styles.button}  onClick={() => addToCart()}>
          + Agregar al carrito
        </button>
      ) : (
        <button onClick={() => addToCart()}>
          + add more
        </button>
      )}

      {quantityPerItem > 0 && (
        <button  onClick={() => removeItem(id)}>
          subtract item
        </button>
      )}
    </div>
  );
};

export default ItemDetail;