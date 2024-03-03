/*importaciones*/
import "./App.css";
import Navbar from "./componentes/Navbar";
import ItemDetail from "./componentes/ItemDetail";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Filter from "./componentes/Filter";
import ItemListContainer from "./componentes/ItemListContainer";
import db from "../db/firebase-confing.js";
import { getDocs, collection } from "firebase/firestore"; 
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./componentes/Cart/cart";

/*establace el estado para los productos "items" a la colleccion de Firebase*/
function App() {
  const [items, setItem] = useState ([]);
  const itemsRef = collection(db, "items");
  const [loading, setLoading] = useState(true);

/*funcion para obtener los elementos*/
  const getItem = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map(doc => ({...doc.data(), id: doc.id,}))
    setItem(items);
    setLoading(false);
  };

/*para cargar los elementos*/
  useEffect(() => {
      getItem();
  }, []);

/*mensaje mientras se carga los elementos*/
  if (loading) {
    return <h3>Cargando...</h3>
  };

/*diferentes rutas para el manejo de la pagina*/
  return (
    <CartProvider>
      <Navbar />
        <h1>Goro App</h1>
        <Routes>
          <Route path='/' element={ <ItemListContainer items={items}/> } />
          <Route path='/category/men' element={<Filter items={items} categoria="men's clothing"/>} />
          <Route path="/category/men/:id" element={<ItemDetail />} />
          <Route path='/category/jewelery' element={<Filter items={items}  categoria="jewelery"/>} />
          <Route path="/category/jewelery/:id" element={<ItemDetail />} />
          <Route path='/category/electronics' element={<Filter items={items} categoria="electronics"/>} />
          <Route path="/category/electronics/:id" element={<ItemDetail />} />
          <Route path='/category/women' element={<Filter items={items} categoria="women's clothing"/>} />
          <Route path="/category/women/:id" element={<ItemDetail />} />
          <Route path='/:id' element={<ItemDetail />} />
          <Route path="/cart" element={ <Cart items={items}/> }/>
        </Routes>
    </CartProvider>
  );  
};



export default App;

