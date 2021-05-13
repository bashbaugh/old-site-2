import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'

export default function Layout({ children, withLeftBar=false }) {
  return (
    <div className={clsx('w-screen min-h-screen bg-bg-dark', withLeftBar && 'border-l-8 border-highlight-dark')}>
      {children}
    </div>
  )
}
