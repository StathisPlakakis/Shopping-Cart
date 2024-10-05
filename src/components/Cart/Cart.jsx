import cart from '../../assets/shopping-cart.svg';
import styles from './Cart.module.css'

export default function Cart({itemsToCart}){

  return (
    <div className={styles.container}>
      <img src={cart} alt="Check out cart" className={styles.cart} />
      {itemsToCart.length > 0 ? <div className={styles.items}></div> : null}
    </div>
  )
}