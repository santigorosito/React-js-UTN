import "./App.css";
import Navbar from "./componentes/Navbar";
import ItemDetail from "./componentes/ItemDetail";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Filter from "./componentes/Filter";
import ItemListContainer from "./componentes/ItemListContainer";
import db from "../db/firebase-confing";
import { getDocs, collection } from "firebase/firestore"; 
import { CartProvider } from "./contexts/CartContext";
import Card from "./componentes/Card/card";

function App() {
  const [item, setItem] = useState ([]);
  const itemRef = collection(db, "item");
  const [loading, setLoading] = useState(true);

  const getItem = async () => {
    const itemCollection = await getDocs(itemRef);
    const item = itemCollection.docs.map(doc => ({...doc.data(), id: doc.id,}))
    setItem(item);
    setLoading(false);
  };

  useEffect(() => {
      getItem();
  }, []);

  if (loading) {
    return <h3>Cargando...</h3>
  };

  return (
    <>
      <CartProvider>
        <Navbar />
        <h1>Goro App</h1>
          <Routes>
            <Route path="/" element={<ItemListContainer item={item}/>} />
            <Route path='/category/men' element={<Filter item={item} categoria="men's clothing"/>} />
            <Route path="/category/men/:id" element={<ItemDetail />} />
            <Route path='/category/jewelery' element={<Filter item={item}  categoria="jewelery"/>} />
            <Route path="/category/jewelery/:id" element={<ItemDetail />} />
            <Route path='/category/electronics' element={<Filter item={item} categoria="electronics"/>} />
            <Route path="/category/electronics/:id" element={<ItemDetail />} />
            <Route path='/category/women' element={<Filter item={item} categoria="women's clothing"/>} />
            <Route path="/category/women/:id" element={<ItemDetail />} />
            <Route path='/items/:id' element={<ItemDetail />} />
            <Route path="/cart" element={ <Card /> }/>
          </Routes>
        </CartProvider>
    </>
  );  
};



export default App;

