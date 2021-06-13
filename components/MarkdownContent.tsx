
import clsx from 'clsx'
import Link from './Link'
import ReactMarkdown from 'react-markdown'

const components = {
  link ({ children, href }) {
    return <Link newTab underline href={href}>children</Link>
  }
}

const SectionLink: React.FC = ({ children }) => <ReactMarkdown className='content' components={components}>{children}</ReactMarkdown>

export default SectionLink