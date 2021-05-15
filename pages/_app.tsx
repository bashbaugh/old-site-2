import '../styles/globals.css'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          x: '100vw',
        },
        pageAnimate: {
          x: '0vw'
        }
      }} transition={{ bounce: 0 }}>
        <Component {...pageProps} key={router.route}/>
      </motion.div>
      // <AnimateSharedLayout type='crossfade'>
      //   <Component {...pageProps} key={router.route}/>
      // </AnimateSharedLayout>
  )
}

export default MyApp