import { IconType } from 'react-icons'

const ButtonGroup: React.FC = ({ children }) => {
  return (
    <div className='flex gap-4'>
      {children}
    </div>
  )
}

export default ButtonGroup
