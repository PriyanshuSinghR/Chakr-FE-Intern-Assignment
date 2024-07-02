import { LogOut } from 'lucide-react'
import MenuCommand from './MenuCommand'
import UserInfo from './UserInfo'

const MySidebar = () => {
  return (
    <nav className='w-[300px] flex flex-col border-r-2 border-gray-200 min-h-screen p-2'>
      <div>
        <UserInfo />
      </div>
      <div className='grow py-2'>
        <MenuCommand />
      </div>
      <div className='flex p-2 border-2 border-gray-200 cursor-pointer rounded-md gap-2 items-center justify-center'>
        Log out <LogOut className='mr-2 h-4 w-4' />
      </div>
    </nav>
  )
}

export default MySidebar
