import "./App.css";
import Navbar from "./componentes/Navbar";
import CardDetail from "./componentes/CardDetail";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filter from "./componentes/Filter";
import ItemListContainer from "./componentes/ItemListContainer";
import db from "../db/firebase-confing";
import { getDocs, collection, deleteDoc } from "firebase/firestore"; 

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

  const deleteItem = async (id) => {
    setLoading(true);
    const docRef = doc(db, "item", id);
    await deleteDoc(docRef);
    getItem();
  };

  useEffect(() => {
      getItem();
  }, []);

  if (loading) {
    return <h3>Cargando...</h3>
  };

  return (
    <>
        <Navbar />
        <h1>Goro App</h1>
        <Routes>
          <Route path="/" element={<ItemListContainer item={item}/>} />
          <Route path='/category/men' element={<Filter item={item} deleteItem={deleteItem} categoria="men's clothing"/>} />
          <Route path="/category/men/:id" element={<CardDetail />} />
          <Route path='/category/jewelery' element={<Filter item={item} deleteItem={deleteItem} categoria="jewelery"/>} />
          <Route path="/category/jewelery/:id" element={<CardDetail />} />
          <Route path='/category/electronics' element={<Filter item={item} deleteItem={deleteItem} categoria="electronics"/>} />
          <Route path="/category/electronics/:id" element={<CardDetail />} />
          <Route path='/category/women' element={<Filter item={item} deleteItem={deleteItem} categoria="women's clothing"/>} />
          <Route path="/category/women/:id" element={<CardDetail />} />
        </Routes>
    </>
  );  
};



export default App;

