import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Profile() {
  const router = useRouter()
  console.log(router.query)
  const username = router.query.username
  return (
    <>
      <Head>
        <title>{`${username}'s Profile`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <h1>{`Hello guys! This is the profile page for ${username}`}</h1>
          <Link href="/users"> Click here to see all users.</Link>
        </div>
      </main>
    </>
  )
}
