import Layout from '../components/SimpleLayout'
import { FiChevronRight, FiTwitter, FiGithub } from 'react-icons/fi'
import { MdTimeline } from 'react-icons/md'
import RoundButton from '../components/RoundButton'
import HomeSection from '../components/HomeSection'
import HighlightCard from '../components/HighlightCard'
import ProjectCard from '../components/ProjectCard'
import SectionLink from '../components/SectionLink'
import PostCard from '../components/PostCard'
import clsx from 'clsx'
import Link from '../components/Link'

const Column = ({ children }) => <div
  className='flex-grow w-[45rem] max-w-full lg:max-w-home-column'
>
  {children}
</div>

export default function Home() {
  return <div className={clsx(
    'lg:px-16 py-8 sm:py-16',
    'flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-x-6 xl:gap-x-20'
  )}>
    <Column>
      <h2 className='font-open-sans text-2xl'>👋 Hi. I’m</h2>
      <h1 className='font-averia-sans text-4xl font-bold pt-2 pb-4 pl-[1px]'>Benjamin Ashbaugh</h1>
      <p>I’m a student and software dev from Colorado, interested in web development, AI, and computational physics.  🚀 </p>
      <SectionLink href='/more' icon={FiChevronRight}>More</SectionLink>
      <SectionLink href='https://timeline.benjaminashbaugh.me' icon={MdTimeline}>Timeline &nbsp;</SectionLink>
      <div className='my-section flex gap-5'>
        <RoundButton icon={FiGithub} href='https://github.com/scitronboy' />
        <RoundButton icon={FiTwitter} href='https://twitter.com/benjamin_a0' />
      </div>

      <HomeSection title='Highlights'>
        <div className='flex flex-col gap-3'>
          <HighlightCard 
            title='BrainBook' 
            description='Take awesome notes that eventually become a graph of knowledge, ideas or anything else.' 
            href='https://brainbook.app'
            image='/img/brainbook-icon1.svg'
          />
          {/* <HighlightCard 
            title='Simply Synonyms' 
            description='A simple browser extension to help you find synonyms with minimal effort.' 
            href='https://github.com/Simply-Synonyms/simply-synonyms'
            image='/img/synonyms_s.png'
          /> */}
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
        {/* <ProjectCard  
          title='Hack Club Cow'
          summary='GPT-3 cow chatbot'
        /> */}
      </HomeSection>
      <HomeSection title='Links'>
        <Link newTab href='https://stackexchange.com/users/11955944/scitronboy?tab=accounts' className='font-averia-sans block'>Stack Overflow</Link>
        <Link newTab href='https://stackexchange.com/users/11955944/scitronboy?tab=accounts' className='font-averia-sans block'>Lorem Ipsum</Link>
      </HomeSection>
    </Column>
    <Column>
      <HomeSection title='Writing &amp; Other'>
        <SectionLink href='https://notes.benjaminashbaugh.me' block>Notebook </SectionLink>
        
        <PostCard 
          title='An Article' 
          type='article' 
          href='/post'
          date={new Date()} 
          summary='Lorem ipsum?? Lorem. Do not eat too much cheese.' 
        />
        <PostCard 
          title='How to Be Awesome, a Step By Step Guide' 
          type='tutorial' 
          href='/tut'
          date={new Date()} 
          summary='The first step to being awesome is being named Benjamin.' 
        />
      </HomeSection>
    </Column>
  </div>
}
