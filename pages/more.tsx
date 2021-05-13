import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/SimpleLayout'
import Link from 'next/link'
import { FiChevronRight, FiTwitter, FiGithub } from 'react-icons/fi'
import RoundButton from '../components/RoundButton'
import HomeSection from '../components/HomeSection'
import HighlightCard from '../components/HighlightCard'

const Column = ({ children }) => <div
  className='flex-grow max-w-home-column'
>
  {children}
</div>

export default function Home() {
  return (
    <Layout withLeftBar>
    </Layout>
  )
}
