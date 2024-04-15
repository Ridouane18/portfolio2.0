import dynamic from 'next/dynamic'
import styles from './page.module.css'

const HomePageContainer = dynamic(() => import('components/HomePageContainer/HomePageContainer'), {
  loading: () => <p>Loading...</p>,
})

// const Header = dynamic(() => import('components/Header/Header'))
// const Footer = dynamic(() => import('components/Footer/Footer'))

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePageContainer />
    </main>
  )
}
