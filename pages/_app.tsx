import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
      <AnimatePresence initial={false}>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
      // <AnimateSharedLayout type='crossfade'>
      //   <Component {...pageProps} key={router.route}/>
      // </AnimateSharedLayout>
  )
}

export default MyApp