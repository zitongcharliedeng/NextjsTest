import Link from "next/link"
import styles from "../styles/Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/"> HOME</Link>
      <Link href="/aboutUs"> ABOUT US </Link>
      <Link href="/users"> ALL USERS </Link>
    </div>
  )
}

export default Navbar