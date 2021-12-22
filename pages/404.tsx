import Layout from '../components/SimpleLayout'
import { FiMail } from 'react-icons/fi'
import RoundButton from '../components/RoundButton'
import Link from '../components/Link'

export default function Page404() {
  // setTimeout(() => {
  //   debugger;
  // }, 2000)

  return (
    <Layout centered backButtonHref="/">
      <div className="pb-20">
        <h3 className="text-5xl my-14 font-bold font-mono">404</h3>
        <p>
          Uhhhh.... I looked everywhere but I'm not sure where this page is. Do
          you want to{' '}
          <Link sameTab href="/">
            go home
          </Link>
          ?
          {/* <img
            draggable={false}
            className="my-6 rounded-md mx-auto"
            src="/img/searching_papers.webp"
          /> */}
        </p>
      </div>
    </Layout>
  )
}
