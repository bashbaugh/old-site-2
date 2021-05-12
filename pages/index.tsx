import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/SimpleLayout'
import Link from 'next/link'
import { FiChevronRight, FiTwitter, FiGithub } from 'react-icons/fi'
import RoundButton from '../components/RoundButton'
import HomeSection from '../components/HomeSection'

const Column = ({ children }) => <div
  className='flex-grow max-w-home-column'
>
  {children}
</div>

export default function Home() {
  return (
    <Layout>
      <div className='px-1 sm:px-20 py-16 mx-auto flex flex-col sm:flex-row gap-x-16 justify-center'>
        <Column>
          <h2 className='font-open-sans text-2xl'>👋 Hi. I’m</h2>
          <h1 className='font-averia-sans text-4xl font-bold pt-2 pb-4 pl-[1px]'>Benjamin Ashbaugh</h1>
          <p>I’m a student and software dev from Colorado, interested in web development, AI, and computational physics.  🚀 </p>
          <Link href='/more'><a className='font-semibold text-link-dark block my-1'>
            More 
            <FiChevronRight className='inline-block w-5 h-5 mb-[3px] ml-[-1px]'/>
          </a></Link>
          <div className='my-section flex gap-5'>
            <RoundButton icon={FiGithub} href='https://github.com/scitronboy' />
            <RoundButton icon={FiTwitter} href='https://twitter.com/_the_benjamin' />
          </div>

          <HomeSection title='Highlights'>
            Yes
          </HomeSection>
        </Column>
        <Column>
          <HomeSection title='Projects'>
            projectssss
          </HomeSection>
          <HomeSection title='Links'>
            Linksssss
          </HomeSection>
        </Column>
        <Column>
          <HomeSection title='Writing &amp; Other'>
            Writing
          </HomeSection>
        </Column>
      </div>
    </Layout>
  )
}
