import Layout from '../components/SimpleLayout'
import { FiMail } from 'react-icons/fi'
import RoundButton from '../components/RoundButton'
import { motion } from 'framer-motion'
import { cmsApi } from '../lib/cms'
import ReactMarkdown from 'react-markdown'
import MarkdownContent from '../components/MarkdownContent'

export default function MorePage({ data }) {
  // setTimeout(() => {
  //   debugger;
  // }, 2000)

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 min-h-screen z-40 bg-bg-dark"
      initial={{ x: '100vw' }}
      animate={{ x: '0vw' }}
      exit={{ x: '100vw ' }}
      transition={{ bounce: 0, duration: 0.5 }}
      onAnimationStart={() => {
        document.body.style.overflow = 'hidden'
      }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'auto'
      }}
    >
      <Layout withLeftBar centered backButtonHref="/" noFooter>
        <MarkdownContent className="opacity-90 tracking-wide" md={data.about} />
        <div className="my-section flex gap-5">
          <RoundButton icon={FiMail} href="mailto:ben@benjaminashbaugh.me" />
          {/* <RoundButton icon={FiLinkedin} href='' /> */}
        </div>
      </Layout>
    </motion.div>
  )
}

export async function getStaticProps() {
  const { data } = await cmsApi.get('/more-page')

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
