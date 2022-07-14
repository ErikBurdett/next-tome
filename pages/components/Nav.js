import Link from 'next/link'
import navStyles from '/styles/Nav.module.css'
import logo from '/assets/tome.gif'
 
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul >
        <li>
        <img src="https://pixeljoint.com/files/icons/full/spellbook1.gif" alt="TOME" />
        </li>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav