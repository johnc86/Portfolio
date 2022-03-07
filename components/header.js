import styles from './header.module.scss'
import NavMobile from './nav/navMobile'
import NavDesktop from './nav/navDesktop'
import { useState } from 'react'

export default function Header() {
    const [mobileNav, navToggle] = useState(false);

    const toggleNav = () => {
        navToggle(!mobileNav);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__bg}></div>
                <div className={styles.title}>
                    <button className={styles.nav__button}
                        onClick={toggleNav}
                    >
                        =
                    </button>
                    <div className={styles.title__text}>
                        John Callaghan
                    </div>
                </div>

            </header>

            <NavMobile open={mobileNav} />
            <NavDesktop />
        </>
    )
};