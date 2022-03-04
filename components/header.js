import styles from './header.module.scss'
import Nav from './nav'
import { useState, useEffect } from 'react'
import { cssBreakpoint } from '../styles/utils.module.scss'

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            // window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            // return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


export default function Header() {
    const breakpoint = cssBreakpoint;
    const size = useWindowSize();
    console.log(size);
    // console.log(breakpoint);
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

            <Nav open={mobileNav} />
        </>
    )
};