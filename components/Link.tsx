import { IconType } from 'react-icons'
import NextLink from 'next/link'
import clsx from 'clsx'

const Link: React.FC<{
  href: string
  className?: string
  underline?: boolean
}> = ({ children, href, className, underline }) => {

  return <NextLink href={href}>
    <a target='_blank' rel='noopener' className={clsx('text-link-dark font-roboto-mono font-semibold', underline && 'underline', className)}>
      {children}
    </a>
  </NextLink>
}

export default Link
