import clsx from 'clsx'
import { FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'
import Footer from './Footer'

export default function Layout({
  children,
  withLeftBar = false,
  centered = false,
  backButtonHref = '',
  noFooter = false,
}) {
  return (
    <div
      className={clsx(
        'overflow-hidden max-w-screen min-h-screen bg-bg-dark px-4 flex flex-col',
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
        <main className={clsx(centered && 'py-20 max-w-3xl')}>{children}</main>
      </div>

      {!noFooter && <Footer />}
    </div>
  )
}
