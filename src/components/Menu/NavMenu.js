import React, { useEffect, lazy, Suspense } from 'react'
import { menu_bar, clipboard, user, book_open } from '../asset-icons'
import { DarkToggle } from '../DarkToggle'
import { Link } from 'react-router-dom'

const LazyFrame = lazy(() => import('./LazyFrame'))


const NavMenu = ({ toggleMenu, setToggleMenu}) => {

    useEffect(() => {
        if(!toggleMenu) {
            document.documentElement.setAttribute('data-toggle', 'false') 
        } else document.documentElement.setAttribute('data-toggle', 'true')
        }, [toggleMenu])
    return (
        <div>
        {/********************  Backdrop ***********************/}
        <div className={toggleMenu? 'nav-menu' : 'nav-menu-hidden'} onClick={() => setToggleMenu(false)}/> 
        {/********************  Backdrop ***********************/}

        
        <div className={`w-full flex-center-column pos-bottom-fixed ${toggleMenu? 'menu-bar' : 'menu-bar-hidden'}`}>
            <Suspense fallback={<h6 className='grid-center'>Loading</h6>}>
            <LazyFrame setToggleMenu={setToggleMenu}> 
            {/** Drag animation from framer  */}
            <button className='menu-bar-button w-full h-full py-xs' onClick={() => setToggleMenu(!toggleMenu)}> {menu_bar}</button>
            <div className={` border-radii color-gray-800 bg-gray-50 p-md flex-start-left flex-start-column gap-sm ${toggleMenu? 'active' : 'inactive'}`}
                
            >
                <DarkToggle className='flex-center-row gap-sm color-gray-800'> <span  onClick={() => setToggleMenu(false)}>Toggle Dark Mode</span> </DarkToggle>
                <Link to={{ pathname:'/',state: { fromDashboard: true }}}>
                    <button className='flex-center-row gap-sm color-gray-800 w-full'> <i>{clipboard}</i> <span onClick={() => setToggleMenu(false)}>Home Page</span> </button>
                </Link>
                <Link to={{ pathname:'/components',state: { fromDashboard: true }}}>
                <button className='flex-center-row gap-sm color-gray-800'> <i>{book_open}</i> <span className='w-full' onClick={() => setToggleMenu(false)}>Components page</span> </button>
                </Link>
                <Link to={{ pathname:'/about',state: { fromDashboard: true }}}>
                <button className='flex-center-row gap-sm color-gray-800'> <i>{user}</i> <span className='w-full' onClick={() => setToggleMenu(false)}>About</span> </button>
                </Link>
            <hr className='my-sm w-full color-gray-50'/>
            <footer className='flex-center font-sub-footer gap-sm px-sm w-full'>  <p>© 2021 Adazolhub LLC.</p> • 
            <Link  to={{ pathname:'/',state: { fromDashboard: true }}}>Privacy</Link> • 
            <Link to={{ pathname:'/',state: { fromDashboard: true }}}>Terms</Link> </footer>
            </div>
            {/** Drag animation from framer  */}
           </LazyFrame>
           </Suspense>
        </div>

        
        </div>
    )
}

export default NavMenu
