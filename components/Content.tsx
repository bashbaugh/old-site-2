import clsx from 'clsx'
import Link from './Link'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  types: {
    // TODO UPDATE IMAGE SERIALIZER
    // img(props) {
    //   return (
    //     <a target="_blank" href={props.src}>
    //       <img {...props} />
    //     </a>
    //   )
    // },
  },
  marks: {
    link (props) {
      return <Link href={props.mark.href}>{props.children}</Link>
    },
  }
}

const Content: React.FC<{ blocks: any; className?: string }> = ({
  blocks,
  className,
}) => (
  <div className={clsx('content', className)}>
    <BlockContent blocks={blocks} serializers={serializers} />
  </div>
)

export default Content
