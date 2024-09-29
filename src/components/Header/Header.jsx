import menu from '../../assets/menu-burger.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.menu}>
        <img src={menu} alt="Menu" width="20px" height="20px"/>
        Menu
      </div>
    </header>
  )
}