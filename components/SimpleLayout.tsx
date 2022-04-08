import clsx from 'clsx'
import { FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'
import Footer from './Footer'
import { BiHome } from 'react-icons/bi'

export default function Layout({
  children,
  withLeftBar = false,
  centered = false,
  backButtonHref = '',
  showHomeNav,
  noFooter = false,
}) {
  return (
    <div
      className={clsx(
        'overflow-hidden max-w-screen min-h-screen px-4 flex flex-col',
        withLeftBar && 'border-l-8 border-highlight-dark',
        centered && 'justify-center items-center'
      )}
    >
      <div
        className={clsx(
          'flex-grow',
          centered && 'flex flex-col justify-center items-center'
        )}
      >
        {backButtonHref && (
          <Link href={backButtonHref}>
            <a>
              <div className="absolute top-5 left-5">
                <FiChevronLeft className="text-faded-light text-5xl" />
              </div>
            </a>
          </Link>
        )}
        {showHomeNav && (
          <Link href={'/'}>
            <a>
              <div className="absolute top-5 left-6 text-lg font-semibold font-averia-sans flex gap-2 items-center text-faded-light hover:text-white transition-all">
                <BiHome className="" />
                Benjamin Ashbaugh
              </div>
            </a>
          </Link>
        )}
        <main className={clsx(centered && 'py-20 max-w-3xl')}>{children}</main>
      </div>

      {!noFooter && <Footer />}
    </div>
  )
}
