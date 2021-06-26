import React, { useEffect, useState} from 'react'
import { DarkToggle } from '../DarkToggle'
import {logo, menu, arrow_left } from '../asset-icons'
import { Link,  useHistory, useLocation } from 'react-router-dom'
import NavMenu from '../Menu/NavMenu'
import Button from '../Button/Button'

const Nav = () => {
    
    const history = useHistory()
    const location = useLocation()
    const pathname = location.pathname
    const [toggleMenu, setToggleMenu] = useState(false)
    const [isPathname, setPathname] = useState(pathname)
    
    useEffect(() => {
        setPathname(pathname)
    }, [pathname])
    console.log(pathname)
    return (
        //** HEADER SECTION **//
        <>
        <header>
            <div className="nav-wrapper">
            {isPathname === '/' 
                ?   <NavMain history={history} isPathname={isPathname} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> 
                :   <NavSub history={history} title={pathname} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>}
            </div>
        </header>
        <NavMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        </>
    )
}


const NavSub = ( {title, history, setToggleMenu, toggleMenu}) => {
    
    return (
        <>
            <Button icon={arrow_left} label='Return'  onClick={() => history.goBack()}/>
            <p>{title}</p>
            <Button icon={menu}  onClick={() => setToggleMenu(!toggleMenu)}/>
         </>
    )
}
const NavMain = ({ history, isPathname, setToggleMenu, toggleMenu}) => {
    return (
        <>
            <Link 
                className='icons'
                to={{ pathname:'/', state: { fromDashboard: true }}} > 
                    {/* {logo} */}
            </Link>
            <Button icon={menu} onClick={() => setToggleMenu(!toggleMenu)}/>
           
            {/* <DarkToggle  className='color-gray-500 nav-icon'/>  */}
         </>
    )
}

export default Nav
