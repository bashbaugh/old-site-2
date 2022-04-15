import Layout from '../../components/SimpleLayout'
import Meta from '../../components/Meta'
import sclient from '../../lib/sanity'
import Content from '../../components/Content'
import { FaLaptopCode } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import NLink from 'next/link'

export default function HirePage({ data }) {
  return (
    <>
      <Meta title="Hire Me" description="Independent creative developer. Get a professional yet affordable websites for your business, or hire a short-term developer and web designer" />
      <Layout withLeftBar showHomeNav centered noFooter>
        <div>
          <div className="max-w-xl flex gap-3">
            <div>
              <h1 className="text-3xl font-bold font-averia-serif">
                Benjamin Ashbaugh
              </h1>
              <div className="text-gray-400 font-medium">
                <p className="flex items-center gap-1">
                  <FaLaptopCode /> Full-stack Creative Developer
                </p>
                <p className="flex items-center gap-1">
                  <HiLocationMarker /> Denver, CO
                </p>
              </div>

              <Content blocks={data.bio} />

              <div className='text-sm my-4'>
                {data.skills.map(s => <div key={s} className='px-1 rounded-sm mt-2 mr-2 inline-block bg-yellow-700'>{s}</div>)}
              </div>

              <NLink href="/hire/discovery">
                <button className="my-4 bg-highlight-dark px-3 py-2 rounded-xl font-semibold tracking-wide text-2xl hover:shadow-xl hover:ring-2 ring-highlight-dark transition-all">
                  Hire Me
                </button>
              </NLink>
            </div>
            {/* <div className='h-full w-[1px] bg-gray-100' />
            <div className='my-1'>Yes</div> */}
          </div>
        </div>

        {/* <div>
          <h1 className="my-12 text-3xl font-bold font-averia-serif">
            Portfolio
          </h1>

          <Porfolio />
        </div> */}

        {/* <div className="mt-72">
          <img
            className="absolute bottom-0 left-0 w-full"
            src="/img/layered_green.svg"
          />
        </div> */}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await sclient.fetch('*[_type == "hirePage"][0]')

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
