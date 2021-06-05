import Layout from '../components/SimpleLayout'
import { motion } from 'framer-motion'
import Home from '../components/Home'

export default function Index() {
  return (
    <motion.div
      initial={{
        opacity: 1
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 1
      }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <Home />
      </Layout>
    </motion.div>
  )
}
