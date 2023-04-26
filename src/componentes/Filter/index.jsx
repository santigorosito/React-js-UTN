import ItemList from '../ItemList';
import styles from '../ItemListContainer/itemlistcontainer.module.scss';


const Filter = ({ item , categoria }) => {
    return (
        <div className={styles.cuerpo}>
            {item.map((item, id) => (item.category == categoria?
            <ItemList key={id} item={item} />:null)
            )}
        </div>
    )
}

export default Filter;