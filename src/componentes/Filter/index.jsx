import Card from '../Card';
import styles from '../ItemListContainer/itemlistcontainer.module.scss';


const Filter = ({ productos , categoria }) => {
    return (
        <div className={styles.cuerpo}>
            {productos.map((producto, id) => (producto.category == categoria?
            <Card key={id} producto={producto} />:null)
            )}
        </div>
    )
}

export default Filter;