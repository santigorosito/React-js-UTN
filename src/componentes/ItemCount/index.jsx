/*import { useContext } from "react";
import styles from "./itemcount.module.scss";
import { CartContext } from "../../contexts/CartContext";

const ItemCount = ({ id }) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = (id) => {
        setCart((currItem) => {
            const isItemsFound = currItem.find((item) => item.id == id);
            if(isItemsFound){
                return currItem.map((item) => {
                    if (item.id === id){
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItem,{ id, quantity: 1, price: item.price }];
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

return (
    <div>
        {quantityPerItem > 0 && (
        <div>{quantityPerItem}</div>)}
        {quantityPerItem === 0 ? (
        <button onClick={() => addToCart()}>+ Add to cart</button>) : 
        (<button onClick={() => addToCart()}>+ add more</button>
        )}
        {quantityPerItem > 0 && (
        <button onClick={() => removeItem(id)}>subtract item</button>
        )}
    </div>
);
};

export default ItemCount;*/
