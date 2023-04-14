import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Silvercity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Silvercity" />
        <p className="description">
         https://discord.me/silvercity
        </p>
      </main>
    
    </div>
  )
}
