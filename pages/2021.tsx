import Layout from '../components/SimpleLayout'
import { motion } from 'framer-motion'
import Home from '../components/Home'
import { cmsApi } from '../lib/cms'
import Meta from '../components/Meta'

export default function Year2022Project(props) {
  return (
    <>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await cmsApi.get('/homepage')
  const { data: highlights } = await cmsApi.get('/highlights')
  const { data: projects } = await cmsApi.get('/projects?_sort=date:DESC')
  const { data: posts } = await cmsApi.get('/posts?_sort=date:DESC')

  return {
    props: {
      home,
      highlights,
      projects,
      posts,
    },
    revalidate: 10,
  }
}
