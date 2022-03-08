import styles from './nav__links.module.scss'

export default function NavLinks() {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                <li><a href="/">Home</a></li>
                <li><a href="/posts">Blog</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/career">Career</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
};