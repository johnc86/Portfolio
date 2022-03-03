import styles from './header.module.scss'
import Nav from './nav'
import { useState } from 'react'


export default function Header() {
    const [mobileNav, navToggle] = useState(false);
    const toggleNav = () => {
        navToggle(!mobileNav);
    }


    return (
    <>
        <header className={styles.header} onClick={toggleNav}>
            <div className={styles.header__bg}></div>

            <button className={styles.nav__button} 
                onClick={toggleNav}
            >
                =
            </button>

            <div className={styles.title}>
                <div className={styles.title__text}>
                    John Callaghan
                </div>
            </div>
        
        </header>
        
        <Nav test={mobileNav}/>
    </>
    )
};