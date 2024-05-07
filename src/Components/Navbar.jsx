import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../src/assets/logo.svg'
import { AuthContext } from '../Providers/AuthProvider'

const Navbar = () => {

  const {user, logout} = useContext(AuthContext);
  const [theme, setTheme] = useState('light');

 

  const handleLogOUt = () =>{
    logout()
    .then( () =>{
      console.log('Log out successful')
    })
    .catch(error =>{
      console.error(error)
    })
  }

   useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme)
  } ,[theme])
  const handleToggle = e =>{ 
    // console.log(e.target.value)
    if(e.target.checked) {
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  console.log(theme)

  const links = <>
    <li>
      <NavLink to={'/'}  className={({isActive}) => isActive? 'text-primary font-semibold' : 'font-semibold'}>Home</NavLink>
    </li>
    
    <li>
      {
        user?.email &&
        <NavLink to={'/bookings'}  className={({isActive}) => isActive? 'text-primary font-semibold' : 'font-semibold'}>Booking</NavLink>
      }
    </li>

    <li>
      <NavLink to={'/about'}  className={({isActive}) => isActive? 'text-primary font-semibold' : 'font-semibold'}>About</NavLink>
    </li>

    <li>
      <NavLink to={'/contact'}  className={({isActive}) => isActive? 'text-primary font-semibold' : 'font-semibold'}>Contact Us</NavLink>
    </li>
   
  </>

  return (
    <div>
      <div className="navbar rounded-lg mb-2 h-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28">            
              {links}
            </ul>
          </div>
          <NavLink to={'/'} className=" text-gray-600 font-bold text-3xl">
            <img src={logo} alt="Logo" className='w-8 h-8' />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">      
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2"> 
          {/* <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <input onChange={handleToggle} type="checkbox" className="toggle theme-controller"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label> */}
          <div className="tooltip tooltip-bottom" data-tip="Theme">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              
              <input onChange={handleToggle} type="checkbox" className="theme-controller" value="synthwave" />
              {/* sun icon */}
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              
              {/* moon icon */}
              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
              
            </label>
          </div>
          <div className=''>
            <button className='btn btn-warning btn-outline'>APPOINTMENT</button>
          </div>
          <div className='space-x-5'>
            {
              user ?
              <div>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} role="button" className="btn p-1 btn-ghost btn-circle avatar">
                    <div className='w-16 rounded-full'>
                      <img src={user?.photoURL || "https://i.ibb.co/yYf8JKZ/user.png"}  />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-40 navbar-start space-y-1 text-center">            
                    <h6 className=' border-b-2 border-b-black mb-2'>{user?.displayName || "user name not found"}</h6>
                    <small className='btn-ghost p-1'>{user?.email || "email not found"}</small>

                    <NavLink to={'/updateProfile'} className={'text-center w-full btn-ghost p-1'}><button >Update Profile</button></NavLink>
                    <button onClick={handleLogOUt} className=' btn-ghost p-1 rounded-sm w-full bg-blue-400'>Log Out</button>
                  </ul>
                </div>
              </div> : 
              <div>
                <NavLink to={'/login'}>
                <button className=' btn btn-primary'>Log In</button>
                </NavLink>
              </div>
            }
          </div>
        </div>
      </div>      

    </div>
  )
}

export default Navbar;