import { useOutletContext } from "react-router-dom";
import styles from './Checkout.module.css';

export default function Checkout() {
  const {itemsToCart, handleItemDeletion} = useOutletContext();
  let total = 0;
  return (
    <div className={styles.parent}>
      <div className={styles.outerContainer}>
        {itemsToCart.map(itemToCart => {
          total += 
          Math.floor((parseFloat(itemToCart.quantity) * parseFloat(itemToCart.price)) * 100) / 100
          return (
            <div key={itemToCart.id} className={styles.container}>
              <img src={itemToCart.image} alt={`${itemToCart.title} image`} className={styles.image}/>
              <h3>{itemToCart.title}</h3>
              <p>{itemToCart.quantity}</p>
              <h2>
                {`${Math.floor((parseFloat(itemToCart.quantity) * parseFloat(itemToCart.price)) * 100) / 100} $`}
                </h2>
              <button 
                id={itemToCart.id}  
                onClick={handleItemDeletion}
                className={styles.delete}
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>
      <div className={styles.total}>
        <h2>Total: {`${Math.floor(total * 100) / 100} $`}</h2>
        <button className={styles.checkout}>Checkout</button>
      </div>
    </div>
  )
}