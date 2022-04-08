import Layout from '../components/SimpleLayout'
import { motion } from 'framer-motion'
import Home from '../components/Home'
import Meta from '../components/Meta'
import Background from '../components/Background'
import sclient from '../lib/sanity'

export default function Index(props) {
  return (
    <>
      <Background />
      <Meta />
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Layout>
          <Home {...props} />
        </Layout>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
  const home = await sclient.fetch('*[_type == "homePage"][0]')
  const projects = await sclient.fetch('*[_type == "project"]')

  return {
    props: {
      home,
      projects,
    },
    revalidate: 10,
  }
}
