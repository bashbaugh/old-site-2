import clsx from 'clsx'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const SectionLink = ({
  icon: Icon = FiArrowRight,
  href,
  children,
  block = false,
}) => (
  <Link href={href}>
    <a
      className={clsx(
        'font-semibold text-link-dark my-1 mr-2 group',
        block ? 'block' : 'inline-block'
      )}
      rel="noopener"
    >
      {children}
      <Icon
        className={clsx(
          'inline-block w-5 h-5 mb-[3px] transition transform group-hover:translate-x-1'
        )}
      />
    </a>
  </Link>
)

export default SectionLink
