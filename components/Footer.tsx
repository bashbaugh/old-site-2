import clsx from 'clsx'
import Link from 'next/link'

export default function Footer() {
  return (
      <div className='flex-shrink-0 p-7 text-center font-bold text-faded-light text-sm opacity-50'>
        <p className='mb-3'>
          Made by Benjamin Ashbaugh. Copyright &copy; 2021
        </p>
        <p>
          <a href='https://github.com/scitronboy/sitev2'><u>source</u></a>
        </p>
      </div>
  )
}
