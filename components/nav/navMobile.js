import styles from './navMobile.module.scss'
import NavLinks from './nav__links'

export default function Nav(props) {
    if (props.open) {
        return (
            <nav>
                <div className={styles.nav__content}>
                    <NavLinks />
                </div>
            </nav>
        )
    }
    else {
        return (null)
    }
};

export function DesktopNav() {
    return (
        <nav className={styles.nav__desktop}>
            <div className={styles.nav__content}>
                <NavLinks />
            </div>
        </nav>
    )
};