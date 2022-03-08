import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Header from './header';
import Hero from './hero'

export const siteTitle = 'Dzon Callaghan'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Everything you need to know about John Callaghan"
                />
                <meta
                    property="og:image"
                    content={``}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header />

            {home ? (
                <Hero />

                ) : (
                    <>
                        {/* Simple page title */}
                    </>
                )}

            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}