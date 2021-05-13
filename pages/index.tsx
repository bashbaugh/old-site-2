import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/SimpleLayout'
import Link from 'next/link'
import { FiChevronRight, FiTwitter, FiGithub } from 'react-icons/fi'
import RoundButton from '../components/RoundButton'
import HomeSection from '../components/HomeSection'
import HighlightCard from '../components/HighlightCard'
import ProjectCard from '../components/ProjectCard'

const Column = ({ children }) => <div
  className='flex-grow max-w-home-column'
>
  {children}
</div>

export default function Home() {
  return (
    <Layout>
      <div className='px-4 sm:px-20 py-8 sm:py-16 mx-auto flex flex-col md:flex-row gap-x-20 justify-center'>
        <Column>
          <h2 className='font-open-sans text-2xl'>👋 Hi. I’m</h2>
          <h1 className='font-averia-sans text-4xl font-bold pt-2 pb-4 pl-[1px]'>Benjamin Ashbaugh</h1>
          <p>I’m a student and software dev from Colorado, interested in web development, AI, and computational physics.  🚀 </p>
          <Link href='/more'><a className='font-semibold text-link-dark block my-1 group'>
            More 
            <FiChevronRight className='inline-block w-5 h-5 mb-[3px] ml-[-1px] transition transform group-hover:translate-x-1'/>
          </a></Link>
          <div className='my-section flex gap-5'>
            <RoundButton icon={FiGithub} href='https://github.com/scitronboy' />
            <RoundButton icon={FiTwitter} href='https://twitter.com/_the_benjamin' />
          </div>

          <HomeSection title='Highlights'>
            <div className='flex flex-col gap-3'>
              <HighlightCard 
                title='BrainBook' 
                description='Take awesome notes that eventually become a graph of knowledge, ideas or anything else.' 
                href='https://brainbook.app'
                image='/img/brainbook-icon1.svg'
              />
              <HighlightCard 
                title='Simply Synonyms' 
                description='A simple browser extension to help you find synonyms with minimal effort.' 
                href='https://github.com/Simply-Synonyms/simply-synonyms'
                image='/img/synonyms_s.png'
              />
            </div>
          </HomeSection>
        </Column>
        <Column>
          <HomeSection title='Projects'>
            <ProjectCard  
              title='Hack Club Cow'
              summary='GPT-3 cow chatbot'
              description="Using OpenAI's GPT-3 API, I created a simple AI chatbot for Slack that thinks it's a cow."
              links={{
                github: 'https://github.com/hackclub/cow2',
              }}
              technologies={['Node.js', 'GPT-3']}
            />
            <ProjectCard  
              title='Hack Club Cow'
              summary='GPT-3 cow chatbot'
            />
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
