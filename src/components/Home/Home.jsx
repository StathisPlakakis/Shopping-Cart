import mobileShopping from '../../assets/mobile-shopping.png';
import shipping from '../../assets/shipping-timed.svg';
import customerSupport from '../../assets/user-headset.svg';
import styles from './Home.module.css'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.head}>
        <div className={styles.headText}>
          <h2>Welcome to <span>iSHOP</span>. Your One-Stop Shop for Everything You Need!</h2>
        
          <p>At iSHOP, we believe in offering something for everyone. Whether you’re looking to refresh your wardrobe with stylish clothes, upgrade your tech with the latest electronics, or add a touch of elegance to your look with beautiful jewelry, we’ve got you covered.</p>
        </div>
        <img src={mobileShopping} alt="An image shows mobile Shopping" className={styles.headImage}/>
      </div>


      <div className={styles.main}>
        <h2>We offer</h2>
        <div className={styles.weOffer}>
          <div className={styles.weOfferItem}>
            <h3>Free & fast shipping</h3>
            <img src={shipping} alt="" height={'100px'}/>
          </div>
          <div className={styles.weOfferItem}>
            <h3>Excellent customer support</h3>
            <img src={customerSupport} alt="" height={'100px'}/>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Why settle for less when you can have it all?  
        <Link to="shop"> Start shopping now </Link> 
         and experience the best in quality, variety, and convenience at iSHOP.</p>
      </div>


    </div>
  )
}