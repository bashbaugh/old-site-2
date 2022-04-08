import Layout from '../components/SimpleLayout'
import { FiMail } from 'react-icons/fi'
import RoundButton from '../components/RoundButton'
import { motion } from 'framer-motion'
import Meta from '../components/Meta'
import sclient from '../lib/sanity'
import Content from '../components/Content'

export default function MorePage({ data }) {
  // setTimeout(() => {
  //   debugger;
  // }, 2000)

  return (
    <>
      <Meta title="About Me" />
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
          <Content className="opacity-90 tracking-wide" blocks={data.about} />
          <div className="my-section flex gap-5">
            <RoundButton
              icon={FiMail}
              href="mailto:benjamin@benjaminashbaugh.me"
            />
            {/* <RoundButton icon={FiLinkedin} href='' /> */}
          </div>
          <div className="text-[0.6rem]">
            <details>
              <summary>
                PGP: CE7ED7ED5EF0F149 (ed25519) <strong>careful</strong>
              </summary>
              <pre>
                {`-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEYcKVgBYJKwYBBAHaRw8BAQdAQU/lAZZUPnG2wvNUBLIIwz+h38edrfT7tOO4
vMscfJG0QEJlbmphbWluIEFzaGJhdWdoIChkb24ndCBmdWNrIHRoaXMgdXApIDxw
Z3BAYmVuamFtaW5hc2hiYXVnaC5tZT6ImgQTFgoAQhYhBO6XK5FjbfgxvKSfWs5+
1+1e8PFJBQJhwpWAAhsDBQkB4TOABQsJCAcCAyICAQYVCgkICwIEFgIDAQIeBwIX
gAAKCRDOftftXvDxSaeqAP4u6dcyfaa9wkg675wUbSFadGkeCbY3/IZNE9AvTXBs
EAD+Oeg6zJW0l3IbyDe8iaPyeKYbkpFC8BQPsPbscroVhAa4OARhwpWAEgorBgEE
AZdVAQUBAQdAN6JjoXojVdb5HorLD3BcmKe1RVV7DbnMksQmYCizZiADAQgHiH4E
GBYKACYWIQTulyuRY234Mbykn1rOftftXvDxSQUCYcKVgAIbDAUJAeEzgAAKCRDO
ftftXvDxSanIAQDlNUd6MTIUgr9yj3JA5Q1R/GaM8mp0ksFcULsu64YENgEA+bQ8
vfmK+em+xlmw573UsBDkI7r1k21qScKmDDxebgQ=
=cgP/
-----END PGP PUBLIC KEY BLOCK-----
`}
              </pre>
            </details>
          </div>
        </Layout>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
  const data = await sclient.fetch('*[_type == "morePage"][0]')

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
