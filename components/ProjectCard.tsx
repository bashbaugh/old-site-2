import { IconType } from 'react-icons'
import Link from './Link'
import ReactMarkdown from 'react-markdown'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'

const ProjectCard: React.FC<{
  title: string
  summary: string
  description: string
  links?: {
    [name: string]: string
  }
  technologies?: string[]
}> = ({ title, links, description, summary, technologies }) => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef()

  return <div>
    <div className='flex items-center cursor-pointer select-none py-2' onClick={() => setOpen(o => !o)}>
      <span className='w-full'>
        <span className='font-nunito font-bold mr-2'>{title}</span>
        <span className='font-nunito font-normal text-faded-light'>{summary}</span>
      </span>
      <span className={clsx('dropdown-arrow text-text-light', isOpen && 'active')}>
        <span />
        <span />        
      </span>
    </div>

    <div 
      ref={ref} 
      className={clsx('transition-all ease-out overflow-hidden')}
      style = {{
        maxHeight: isOpen ? (ref.current as any)?.scrollHeight : 0
      }}
    >
      <div className='pb-2 opacity-90'>
        <div className='mb-2'>
          {links && Object.entries(links).map(([name, href]) => <Link underline href={href} className='text-sm inline-block pr-2'>{name}</Link>)}
        </div>
        <ReactMarkdown>{description}</ReactMarkdown>
        <div className='my-3'>
          {technologies && technologies.map(t => 
            <span className='mr-2 px-1 py-0.5 rounded-sm bg-white bg-opacity-25 hover:bg-opacity-30'>
              {t}
            </span>
          )}
        </div>
      </div>
    </div>

    <style jsx>{`
      /* Inspired by https://codepen.io/simonbreiter/pen/oLJAKy */
      .dropdown-arrow {
        width: 1rem;
        height: 1rem;
        display: inline-block;
        position: relative;
        margin: 0 1rem;
      }  
      .dropdown-arrow span {
        background-color: currentColor;
        position: absolute;
        top: .5rem;
        width: .55rem;
        height: .1rem;
        display: inline-block;
        transition: all .2s ease;
      }
      .dropdown-arrow span:nth-child(1) {
        left: 0;
        transform: rotate(45deg);
      }
      .dropdown-arrow span:nth-child(2) {
        right: 0;
        transform: rotate(-45deg);
      }
      .dropdown-arrow.active span:nth-child(1) {
        transform: rotate(-45deg);
      }
      .dropdown-arrow.active span:nth-child(2) {
        right: 0;
        transform: rotate(45deg);
      }
    `}</style>
  </div>
}

export default ProjectCard
