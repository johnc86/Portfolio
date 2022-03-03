import styles from './nav.module.scss'

export default function Nav(props) {
    if (props.test) {
        return (
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
        )
    }
    else {
        return (null)
    }
    };