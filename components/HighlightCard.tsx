import { IconType } from 'react-icons'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import React from 'react'

const HighlightCard: React.FC<{
  title: string,
  href: string,
  image: string,
  description: string
}> = ({ description, title, href, image }) => {
  return <div className='relative flex gap-4 items-center'>
    <div className='flex-none h-20 w-1 bg-border-dark' />
    <div 
      className='flex-none h-20 w-20' 
      // style={{
      //   background: `url(${image}) center center no-repeat`,
      // }}
    >
      <img src={image} className='rounded-xl max-w-full max-h-full' />
    </div>
    <div className='flex-shrink'>
      <a href={href} target='_blank' rel='noopener'>
        <h5 className='font-averia-serif font-bold text-lg hover:underline'>{title}</h5>
      </a>
      <div className='text-faded-light text-sm'>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  </div>
}

export default HighlightCard
