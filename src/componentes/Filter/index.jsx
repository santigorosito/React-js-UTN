import ItemList from '../ItemList';
import styles from '../ItemListContainer/itemlistcontainer.module.scss';


const Filter = ({ items , categoria }) => {
    return (
        <div className={styles.cuerpo}>
            {items.map((item, id) => (item.category == categoria?
            <ItemList key={id} item={item} />:null)
            )}
        </div>
    )
}

export default Filter;