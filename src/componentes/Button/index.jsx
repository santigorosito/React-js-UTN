import styles from "./button.module.scss";

const Button = ({texto, foto}) => {
    return ( 
    <div className={styles.padre}>
        <div className={styles.cards}>
            <img src={foto} alt="" width="250" height="250" className={styles.btn}/>
            <button className={styles.btn}>{texto}</button>
        </div>
    </div>
);
};

export default Button;