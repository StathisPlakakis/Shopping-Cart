import { Link } from "react-router-dom"
import styles from './ErrorPage.module.css'

export default function ErrorPage() {
  return (
    <div>
      Ooops
      <Link to="/" className={styles.return}>Get back to home</Link>
    </div>
  )
}