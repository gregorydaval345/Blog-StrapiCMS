import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className='pb-32'>
        <Component {...pageProps}></Component>
      </main>
      <Footer />
    </div>
  )

}
