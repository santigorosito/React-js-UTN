import "./App.css";
import Navbar from "./componentes/Navbar";
import CardDetail from "./componentes/CardDetail";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Filter from "./componentes/Filter";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Goro App</h1>
      <Routes>
        <Route path="/" element={<ItemListContainer productos={productos}/>} />
        <Route path='/category/men' element={<Filter productos={productos} categoria="men's clothing"/>} />
        <Route path="/category/men/:id" element={<CardDetail />} />
        <Route path='/category/jewelery' element={<Filter productos={productos} categoria="jewelery"/>} />
        <Route path="/category/jewelery/:id" element={<CardDetail />} />
        <Route path='/category/electronics' element={<Filter productos={productos} categoria="electronics"/>} />
        <Route path="/category/electronics/:id" element={<CardDetail />} />
        <Route path='/category/women' element={<Filter productos={productos} categoria="women's clothing"/>} />
        <Route path="/category/women/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
}



export default App;
