import clsx from 'clsx'
import { FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'

export default function Layout({ children, withLeftBar=false, centered=false, backButtonHref='' }) {
  return (
    // <div className='absolute top-0 left-0 right-0'>
      <div className={clsx(
        'overflow-hidden max-w-screen min-h-screen bg-bg-dark px-4', 
        withLeftBar && 'border-l-8 border-highlight-dark',
        centered && 'flex flex-col justify-center items-center'
      )}>
        { backButtonHref && <Link href={backButtonHref}><a><div className='absolute top-5 left-5'>
          <FiChevronLeft className='text-faded-light text-5xl'/>
        </div></a></Link>}
        <main className={clsx(
          centered && 'py-20 max-w-3xl'
        )}>
          {children}
        </main>
      </div>
    // </div>
  )
}
