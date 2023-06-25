import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p> Email mail@wasim.co to purchase this domain name. </p>
       
      </main>

      <Footer />
    </div>
  )
}
