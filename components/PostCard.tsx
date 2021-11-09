import { IconType } from 'react-icons'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import { dateToPrettyString } from '../util/date'

const PostCard: React.FC<{
  title: string
  summary: string
  href: string
  type: string
  date: Date
}> = ({ title, summary, href, type, date }) => {
  const card = (
    <div
      className={clsx(
        'bg-white bg-opacity-0 transition duration-75 hover:bg-opacity-5 p-2 border-b-2 border-border-dark'
      )}
    >
      <div className="flex items-center">
        <span className="font-nunito font-bold">{title}</span>
      </div>
      <div className="font-nunito font-light text-faded-light pb-2">
        // {type} &middot; {dateToPrettyString(date)}
      </div>
      <div className="text-faded-light text-sm">{summary}</div>
    </div>
  )

  return (
    <Link href={href}>
      <a>{card}</a>
    </Link>
  )
}

export default PostCard
