import React from 'react'
import { menu_bar, edit } from '../asset-icons'
import { DarkToggle } from '../DarkToggle'

const NavMenu = ({ toggleMenu, setToggleMenu}) => {
    return (
        <>
        <div className={toggleMenu? 'nav-menu-wrapper' : 'nav-menu-hidden'}
            onClick={() => setToggleMenu(false)}/>
        <div className={`container-sm w-full flex-center-column pos-bottom-fixed ${toggleMenu? 'menu-bar' : 'menu-bar-hidden'}`}>
            <button className='color-gray-800 w-full h-full' onClick={() => setToggleMenu(!toggleMenu)}> {menu_bar}</button>
            <div className="container-sm color-gray-800 bg-gray-50 p-md flex-start-left flex-start-column gap-sm"
                
            >
                <DarkToggle className='flex-center-row gap-sm color-gray-800'> <span onClick={() => setToggleMenu(false)}>Toggle Dark Mode</span> </DarkToggle>
                <button className='flex-center-row gap-sm color-gray-800'> <i>{edit}</i> <span onClick={() => setToggleMenu(false)}>Home Page</span> </button>
                <button className='flex-center-row gap-sm color-gray-800'> <i>{edit}</i> <span onClick={() => setToggleMenu(false)}>Blog Posts</span> </button>
                <button className='flex-center-row gap-sm color-gray-800'> <i>{edit}</i> <span onClick={() => setToggleMenu(false)}>About</span> </button>
            <hr className='my-sm w-full color-gray-50'/>
            <footer className='flex-center font-sub-footer gap-sm px-sm w-full'>  <p>© 2021 Adazolhub Inc.</p> • <a href="/">Privacy</a> • <a href="/">Terms</a> </footer>
           
            </div>
        </div>

        
        </>
    )
}

export default NavMenu
