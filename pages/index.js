import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

import styles from './index.module.scss'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.index}>
                <section className={styles.bio}>
                    <div className={styles.headline}>
                        <div className={styles.profimg}>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={styles.profimg}
                                alt="A self-portrait"
                                layout="fill"
                            />
                        </div>
                        <div className={styles.headlineText}>
                            <h2>I'm ?? years old, born in Merseyside, England.</h2>
                            <ul className={styles.headlineTags}>
                                <li>gamer</li>
                                <li>designer</li>
                                <li>developer</li>
                                <li>manager</li>
                                <li>sci-fi lover</li>
                            </ul>
                        </div>

                    </div>

                    <p>A jack of all trades, I get excited to learn a little about lots of things. I enjoy most the problem solving applications of technolgy, exploring the most efficient, cost-effective and user friendly ways to overcome a challenge using technological solutions.</p>
                    <p>I'm a huge fan of games, and the gaming industry. I love to explore indie titles and follow their development, embarassingly I'm a sucker for early access (which is something I'm working on improving). I love massively multiplay online role-playing games, or social co-operative games so obviously PC, not console.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet quasi cupiditate. Quisquam, voluptates quos! Inventore, commodi repudiandae. Ab quae voluptate iste accusamus aliquid commodi molestiae totam sunt quidem enim modi fuga atque harum ea suscipit in, beatae quod veritatis illo praesentium numquam quo architecto eos iure. Alias quam eaque, quia nemo expedita deserunt minima accusamus officia corporis debitis itaque nulla suscipit asperiores qui error facere! Accusamus harum in debitis vero! Nostrum ab ut veritatis magni animi repellendus incidunt libero soluta labore ipsum numquam maxime cum, obcaecati placeat inventore dolorum veniam eos vel nesciunt. Possimus vero magni nemo corrupti vitae?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet quasi cupiditate. Quisquam, voluptates quos! Inventore, commodi repudiandae. Ab quae voluptate iste accusamus aliquid commodi molestiae totam sunt quidem enim modi fuga atque harum ea suscipit in, beatae quod veritatis illo praesentium numquam quo architecto eos iure. Alias quam eaque, quia nemo expedita deserunt minima accusamus officia corporis debitis itaque nulla suscipit asperiores qui error facere! Accusamus harum in debitis vero! Nostrum ab ut veritatis magni animi repellendus incidunt libero soluta labore ipsum numquam maxime cum, obcaecati placeat inventore dolorum veniam eos vel nesciunt. Possimus vero magni nemo corrupti vitae?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet quasi cupiditate. Quisquam, voluptates quos! Inventore, commodi repudiandae. Ab quae voluptate iste accusamus aliquid commodi molestiae totam sunt quidem enim modi fuga atque harum ea suscipit in, beatae quod veritatis illo praesentium numquam quo architecto eos iure. Alias quam eaque, quia nemo expedita deserunt minima accusamus officia corporis debitis itaque nulla suscipit asperiores qui error facere! Accusamus harum in debitis vero! Nostrum ab ut veritatis magni animi repellendus incidunt libero soluta labore ipsum numquam maxime cum, obcaecati placeat inventore dolorum veniam eos vel nesciunt. Possimus vero magni nemo corrupti vitae?</p>
                </section>
                <section className={styles.blog}>
                    <h2>Blog</h2>
                    <ul className={styles.blog__list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={styles.blog__listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </Layout>
    )
}