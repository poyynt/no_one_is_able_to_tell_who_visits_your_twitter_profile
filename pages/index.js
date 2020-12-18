import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>No One Is Able To Tell Who Visits Your Twitter Profile</title>
        <link rel="icon" href="https://twitter.com/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Want to know who checks your twitter profile?
        </h1>
        <h2>
          Well guess what, you can't find out.
        </h2>
        <p>
          Every website, app, or extension that claims it could tell you in best case is a <a href="https://www.howtogeek.com/346225/can-you-see-who-viewed-your-twitter-profile/">fraud</a>, and in worst case is spying on you or tweeting stuff on behalf of you.
        </p>

        <div>
          <p>However, if you want a list:</p>
          <ul>
                <li>Your best friend probably</li>
                <li>The person who has a crush on you</li>
                <li>Some random folks who you don't know</li>
          </ul>
          <p>Want more? Right click on the list, select "Inspect" and modify the list to whatever you want.</p>
        </div>
      </main>

    </div>
  )
}
