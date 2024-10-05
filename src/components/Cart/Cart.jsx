import cart from '../../assets/shopping-cart.svg';
import styles from './Cart.module.css';
import { useRef } from 'react';
import cartOnHover from '../../assets/shopping-cart-hover.svg'

export default function Cart({itemsToCart}){

  const cartRef = useRef(null);
  const itemsRef = useRef(null);

  const handleMouseOver = () => {
    cartRef.current.src = cartOnHover;
    itemsRef.current.style.backgroundColor = 'rgb(255, 209, 178)';
    itemsRef.current.style.cursor = 'pointer';
    cartRef.current.style.cursor = 'pointer';
  }

  const handleMouseLeave = () => {
    cartRef.current.src = cart;
    itemsRef.current.style.backgroundColor = 'white';
  }

  return (
    <div className={styles.container}>
      <img 
        ref={cartRef}
        src={cart} 
        alt="Check out cart" 
        className={styles.cart}
        onMouseOver={handleMouseOver} 
        onMouseLeave={handleMouseLeave} 
      />
      {itemsToCart.length > 0 ? 
        <div 
          className={styles.items}
          ref={itemsRef}
          onMouseOver={handleMouseOver} 
          onMouseLeave={handleMouseLeave} 
        >
          {itemsToCart.length}
        </div> : 
        null}
    </div>
  )
}