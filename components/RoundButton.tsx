import { IconType } from 'react-icons'
import Link from 'next/link'

const RoundButton: React.FC<{
  icon: IconType,
  href?: string
}> = ({ children, icon, href }) => {
  const Icon = icon

  const button = <div className='transition duration-75 cursor-pointer inline-block p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30'>
    <Icon className='w-6 h-6' />
  </div>

  return href ? <a href={href} target='_blank'>{button}</a> : <div>{button}</div>
}

export default RoundButton
