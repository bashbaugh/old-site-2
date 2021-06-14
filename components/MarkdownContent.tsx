
import clsx from 'clsx'
import Link from './Link'
import ReactMarkdown from 'react-markdown'

const components = {
  a (props) {
    return <Link href={props.href}>{props.children}</Link>
  },
  img (props) {
    return <a target='_blank' href={props.src}><img {...props} /></a> 
  },
}

const MarkdownContent: React.FC<{ md: string, className?: string }> = ({ md, className }) => 
  <ReactMarkdown className={clsx('content', className)} components={components}>{md}</ReactMarkdown>

export default MarkdownContent
