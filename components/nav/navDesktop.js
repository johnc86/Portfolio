import styles from './navDesktop.module.scss'
import NavLinks from './nav__links'

export default function Nav() {
    return (
        <nav className={styles.nav__desktop}>
            <div className={styles.nav__content}>
                <NavLinks />
            </div>
        </nav>
    )
};