import type { NextPage } from 'next'
import router from 'next/router'
import styles from '../styles/Home.module.css'
// import '.'
import Footer from '../components/footer'
const Home: NextPage = () => {
  function gotoPost() {
    router.push({
      pathname: '/post/[postId]',
      query: {
        postId: 1,
        ref: 'social',
      },
    })
  }

  return (
    <>
      
      <div className={styles.container}>
        
        <main className={styles.main}>
          <button className={styles.buttons} onClick={gotoPost}>Go to Post List  </button>
          <h1 className={styles.title}>
            Hallo I am Vmax <a href="/favicon.ico" target="_blank" title="Create">Martis</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}

          </p>
        </main>

      </div>
      <Footer />
    </>

  )
}

export default Home
