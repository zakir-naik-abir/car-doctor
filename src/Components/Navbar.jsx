import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../src/assets/logo.svg'

const Navbar = () => {
  const [theme, setTheme] = useState('light');

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
  // console.log(theme)

  const links = <>
    <li>
      <NavLink to={'/'}  className={({isActive}) => isActive? 'text-primary font-semibold' : 'font-semibold'}>Home</NavLink>
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
        <div className="navbar-end gap-8"> 
          <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <input onChange={handleToggle} type="checkbox" className="toggle theme-controller"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
          <div className='space-x-5'>
            <button className='btn btn-warning btn-outline'>APPOINTMENT</button>
          </div>
        </div>
      </div>      

    </div>
  )
}

export default Navbar;