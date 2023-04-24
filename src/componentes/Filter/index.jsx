import Card from '../Card';
import styles from '../ItemListContainer/itemlistcontainer.module.scss';


const Filter = ({ item , categoria }) => {
    return (
        <div className={styles.cuerpo}>
            {item.map((item, id) => (item.category == categoria?
            <Card key={id} item={item} />:null)
            )}
        </div>
    )
}

export default Filter;