import Meta from '../../components/Meta'

export default function HirePage({ data }) {
  return (
    <>
      <Meta title="Work with Me" />
      <iframe
        className="h-screen"
        src="https://tally.so/r/nPKd5w?transparentBackground=0"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Tell me about your project"
      ></iframe>
    </>
  )
}
