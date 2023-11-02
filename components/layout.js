import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
 
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Green Oasis </title>
        <meta name="description" content="Strive" />
        <link rel="icon" href="/img/Saly-44.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}