import Head from 'next/head'
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <div className='w-screen min-h-screen bg-bg-dark'>
      {children}
    </div>
  )
}
