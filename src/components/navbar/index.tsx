import AppConfig from '@/config/app.config'
import UserAvatar from './user-avtar';
import useAuthStore from '@/store/auth.store'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { accessToken } = useAuthStore((s) => s);

  return (
    <div className='p-2 bg-primary shadow-md shadow-indigo-200 w-full'>
        <nav className="px-4 py-2 flex items-center justify-between mx-auto max-w-screen-2xl">
          {/* <NavLink to="/"><img src={AppConfig.logoUrl} alt='brand logo' height={30} width={40} className='scale-150' /></NavLink> */}
          <NavLink to="/" className="text-white">Event Sphere e-Ticket</NavLink>
          <ul className='flex items-center gap-2'>
            {!accessToken ? <li><NavLink to="/login" className='px-4 py-2 bg-primary text-white rounded-md'>Login</NavLink></li> : <UserAvatar />}
          </ul>
      </nav>
    </div>
  )
}

export default Navbar