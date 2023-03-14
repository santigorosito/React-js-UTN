import "./App.css";
import Button from "./componentes/Button";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import Carrito from "./componentes/Carrito";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Goro App</h1>
      <ItemListContainer greeting="Hola, aguante coder :)" />
      <Button foto="" texto="Agregar al carrito" />
      <Button foto="" texto="Agregar al carrito" />
      <Button foto="" texto="Agregar al carrito" />
      <Button foto="" texto="Agregar al carrito" /> 
    </div>
  );
}

export default App;
