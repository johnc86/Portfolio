import styles from './header.module.scss'
import { useState } from 'react'

// const [active, setActive] = useState(false);

//     const handleClick = () => {
//         setActive(!active);
//     };

export default function Header() {
    return (<>
        <header className={styles.header}>
            <div className={styles.header__bg}></div>

            <button className={styles.nav__button} 
                // onClick={handleClick}
            >
                =
            </button>

            <div className={styles.title}>
                <div className={styles.title__text}>
                    John Callaghan
                </div>
            </div>

        </header>
        <nav>
            <div className={styles.nav__content}>
                <ul className={styles.nav__links}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/posts">Blog</a></li>
                    <li><a href="/work">Work</a></li>
                    <li><a href="/career">Career</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
    )
};