import styles from './Item.module.css'

const Item = ({ foodItem, bought, handleBuyFoodItem }) => {
    return (
    <li className={`${styles.kgItem} list-group-item ${bought && 'active'}`}>
      <span className={styles.kgSpan}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`} onClick={handleBuyFoodItem}>Buy</button>
    </li>
  );
};
export default Item;
