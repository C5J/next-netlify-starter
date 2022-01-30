import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>checkz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey, I'm checks" />
        <p className="description">
          tiktok: qjz
          checkz#2808
          or 
          checkz#5882
        </p>
      </main>

      <Footer />
    </div>
  )
}
