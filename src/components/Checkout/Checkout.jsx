import { useOutletContext } from "react-router-dom";
import styles from './Checkout.module.css';

export default function Checkout() {
  const {itemsToCart} = useOutletContext();
  let total = 0;
  return (
    <div className={styles.parent}>
      <div className={styles.outerContainer}>
        {itemsToCart.map(itemToCart => {
          total += parseInt(itemToCart.quantity) * parseFloat(itemToCart.price)
          return (
            <div key={itemToCart.id} className={styles.container}>
              <img src={itemToCart.image} alt={`${itemToCart.title} image`} className={styles.image}/>
              <h3>{itemToCart.title}</h3>
              <p>{itemToCart.quantity}</p>
              <h2>{`${parseInt(itemToCart.quantity) * parseFloat(itemToCart.price)} $`}</h2>
              <button>Delete</button>
            </div>
          )
        })}
      </div>
      <div className={styles.total}>
        <h2>Total: {`${total} $`}</h2>
        <button className={styles.checkout}>Checkout</button>
      </div>
    </div>
  )
}