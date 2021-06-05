import { IconType } from 'react-icons'
import NextLink from 'next/link'
import clsx from 'clsx'

const Link: React.FC<{
  href: string
  className?: string
  underline?: boolean
  newTab?: boolean
}> = ({ children, href, className, underline, newTab }) => {

  return <NextLink href={href}>
    <a target={ newTab && '_blank'} rel='noopener' className={clsx('text-link-dark font-semibold', underline && 'underline', className)}>
      {children}
    </a>
  </NextLink>
}

export default Link
