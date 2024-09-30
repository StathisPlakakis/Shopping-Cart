import menu from '../../assets/menu-burger.svg';
import menuHover from '../../assets/menu-burger-hover.svg';
import cart from '../../assets/shopping-cart.svg';
import close from '../../assets/cross-small.svg'
import closeHover from '../../assets/cross-small-hover.svg'
import styles from './Header.module.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);
  const menuImgRef = useRef(null);
  const closeImgRef = useRef(null);


  const handleExpansion = () => {
    setIsExpanded(true);
    
    setTimeout(() => {
      setShowNewContent(true);
    }, 500);
  };

  const handleReduction = () => {
    setIsExpanded(false);
    
    setTimeout(() => {
      setShowNewContent(false);
    }, 500);
  };

  return (
    <header
      className={`${styles.header} ${isExpanded ? styles.expanded : ''}`}
    >
      {!showNewContent ? (
        <div className={`${styles.content} ${isExpanded ? styles.hidden : ''}`}>
          <div 
            className={styles.menu} 
            onClick={handleExpansion} 
            onMouseOver={() => menuImgRef.current.src=`${menuHover}`}
            onMouseLeave={() => menuImgRef.current.src=`${menu}`}
          >
            <img src={menu} alt="Menu" ref={menuImgRef}/>
            Menu
          </div>

          <h1 className={styles.logo}>iSHOP</h1>

          <img src={cart} alt="Check out cart" className={styles.cart} />
        </div>
      ) : (
        <div className={`${styles.newContent} ${isExpanded ? styles.visible : ''}`}>
          <div 
            className={styles.close} 
            onClick={handleReduction}
            onMouseOver={() => closeImgRef.current.src=`${closeHover}`}
            onMouseLeave={() => closeImgRef.current.src=`${close}`}
          >
            <img src={close} alt="Close-Menu" ref={closeImgRef}/>
            Close
          </div>

          <div className={styles.sections}>
            <Link to="/" onClick={handleReduction}><h2>Home</h2></Link>
            <Link to="shop" onClick={handleReduction}><h2>Shop</h2></Link>
          </div>

        </div>
      )}
    </header>
  );
}