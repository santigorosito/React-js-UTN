import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-confing";

const CardDetail = () => {
  const { id } = useParams();
  const [items, setItem] = useState({});

  const getItem = async () => {
      const itemDoc = doc (db, "item", id);
      const items = await getDoc(itemDoc);
      if (items.exists()) {
      setItem(items.data());
    } else {
      alert ("No existe!");
    };
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <h3>{items.title}</h3>
      <img src={items.image} alt="" width="250" height="250" />
      <p>{items.description}</p>
      <p>$ {items.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default CardDetail;
