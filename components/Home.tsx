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

export default function Home({ highlights, home, projects, posts }) {
  return <div className={clsx(
    'lg:px-16 py-8 sm:py-16',
    'flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-x-6 xl:gap-x-20'
  )}>
    <Column>
      <h2 className='font-open-sans text-2xl'>👋 Hi. I’m</h2>
      <h1 className='font-averia-sans text-4xl font-bold pt-2 mb-4 pl-[1px]'>Benjamin Ashbaugh</h1>
      <p>{home.introduction}</p>
      <SectionLink href='/more' icon={FiChevronRight}>More</SectionLink>
      <SectionLink href='https://timeline.benjaminashbaugh.me' icon={MdTimeline}>Timeline &nbsp;</SectionLink>
      <div className='my-section flex gap-5'>
        <RoundButton icon={FiGithub} href='https://github.com/scitronboy' />
        <RoundButton icon={FiTwitter} href='https://twitter.com/benjamin_a0' />
      </div>

      <HomeSection title='Highlights'>
        <div className='flex flex-col gap-3'>
          {highlights.map((h: any) => <HighlightCard 
            key={h.id}
            title={h.title}
            description={h.description}
            href={h.url}
            image={h.thumbnail.url}
          />)}
        </div>
      </HomeSection>
    </Column>
    <Column>
      <HomeSection title='Projects'>
        {projects.map((p: any) => <ProjectCard  
          title={p.title}
          summary={p.summary}
          description={p.description}
          links={p.links}
          technologies={p.technologies}
        />)}
      </HomeSection>
      <HomeSection title='Links'>
        {Object.entries(home.links).map(([text, url]) => <Link newTab href={url as string} className='font-averia-sans block'>
          {text}
        </Link>)}      
      </HomeSection>
    </Column>
    <Column>
      <HomeSection title='Writing &amp; Other'>
        <SectionLink href='https://notes.benjaminashbaugh.me' block>Notebook </SectionLink>

        {posts.map((p: any) => <PostCard 
          title={p.title}
          type={p.type}
          href={p.url}
          date={new Date(p.date)}
          summary={p.summary}
        />)}
      </HomeSection>
    </Column>
  </div>
}
