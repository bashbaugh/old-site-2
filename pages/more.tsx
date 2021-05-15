import Layout from '../components/SimpleLayout'
import { FiMail } from 'react-icons/fi'
import RoundButton from '../components/RoundButton'
import { motion } from 'framer-motion'

export default function MorePage() {
  // setTimeout(() => {
  //   debugger;
  // }, 2000)

  return (
    <motion.div
      className='absolute top-0 left-0 min-h-screen min-w-screen z-40 bg-bg-dark'
      initial={{ x: '100vw', display: 'absolute' }}
      animate={{ x: '0vw' }}
      transition={{ bounce: 0, duration: 0.5 }}
      onAnimationStart={() => {
        document.body.style.overflow = 'hidden'
      }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'auto'
      }}
    >
      <Layout withLeftBar centered backButtonHref='/'>
        <div className='opacity-90'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis cursus felis. Vivamus tempus neque at hendrerit elementum. Nunc quis ante in sapien vulputate placerat vel vitae lacus. Nunc eget orci tempus, fermentum nibh eget, vulputate ante. Quisque arcu nunc, dapibus id auctor eget, congue eu enim. Mauris quis euismod nisi. Sed a elit ullamcorper, egestas elit a, lacinia lorem. Etiam tristique, ex quis fringilla accumsan, tortor turpis condimentum sapien, condimentum interdum orci orci eget leo. Fusce tristique lectus purus, a gravida mi pretium nec. Quisque id dictum velit. Curabitur at commodo libero. Integer pulvinar cursus pharetra. In metus sem, porttitor nec maximus ut, vehicula vel mi. Nam suscipit fermentum consequat.
          </p>
        </div>
        <div className='my-section flex gap-5'>
              <RoundButton icon={FiMail} href='mailto:ben@benjaminashbaugh.me' />
              {/* <RoundButton icon={FiLinkedin} href='' /> */}
            </div>
      </Layout>
    </motion.div>
  )
}
