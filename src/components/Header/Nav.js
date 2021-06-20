import React, { useEffect, useState } from 'react'
import { DarkToggle } from '../DarkToggle'
import {logo, menu, arrow_left } from '../asset-icons'
import { Link,  useHistory, useLocation } from 'react-router-dom'
import NavMenu from '../Menu/NavMenu'

export const Nav = () => {
    
    const history = useHistory()
    const location = useLocation()
    const pathname = location.pathname
    const [toggleMenu, setToggleMenu] = useState(false)
    const [isPathname, setPathname] = useState(pathname)
    
    useEffect(() => {
        setPathname(pathname)
    }, [pathname])
    
    return (
        <>
        {isPathname === '/' 
        ?   <NavMain history={history} isPathname={isPathname} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> 
        :   <NavSub history={history} title="Component" toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>}
        <NavMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        </>
    )
}


const NavSub = ( {title, history, setToggleMenu, toggleMenu}) => {
    
    return (
        <>
        <div 
         className='flex-space-between-row w-full pos-top-sticky nav-bg px-md'>

             <button 
                 className='color-gray-500 nav-icon flex-center-row' 
                 onClick={() => history.goBack()}>
                     {arrow_left} <p>Back</p>
             </button>

             <button 
                className='color-gray-500 nav-icon'
                onClick={() => setToggleMenu(!toggleMenu)}>
                    {menu}
            </button>
             
         </div> 


         </>
    )
}
const NavMain = ({ history, isPathname, setToggleMenu, toggleMenu}) => {
    return (
        <>
        <div 
        className='flex-space-between-row w-full pos-top-sticky nav-bg px-md'>
            <button 
                className='color-gray-500 nav-icon'
                onClick={() => setToggleMenu(!toggleMenu)}
                >
                    {menu}
            </button>

            <Link 
                className='color-gray-400 nav-icon'
                to={{ pathname:'/', state: { fromDashboard: true }}} > 
                    {logo}
            </Link>


            <DarkToggle 
                className='color-gray-500 nav-icon'/> 
        </div> 
         </>
    )
}
