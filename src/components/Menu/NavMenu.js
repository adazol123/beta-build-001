import React, { useState } from 'react'
import { menu_bar, solarize, edit } from '../asset-icons'
import { DarkToggle } from '../DarkToggle'

const NavMenu = ({ toggleMenu, setToggleMenu}) => {
    console.log(toggleMenu)
    return (
        <>
        <div className={`container-sm w-full flex-center-column pos-bottom-fixed ${toggleMenu? 'menu-bar' : 'menu-bar-hidden'}`}>
            <button className='color-gray-800' onClick={() => setToggleMenu(!toggleMenu)}> {menu_bar}</button>
            <div className="container-sm color-gray-800 bg-gray-50 p-md flex-start-left flex-start-column gap-sm" >
                <DarkToggle className='flex-center-row gap-sm color-gray-800'> <span>Toggle Dark Mode</span> </DarkToggle>
                <button className='flex-center-row gap-sm color-gray-800'> <i>{edit}</i> <span>Home Page</span> </button>
                <button className='flex-center-row gap-sm color-gray-800'> <i>{edit}</i> <span>Blog Posts</span> </button>
                <button className='flex-center-row gap-sm color-gray-800'> <i>{edit}</i> <span>About</span> </button>
            <hr className='my-sm w-full color-gray-50'/>
            <footer className='flex-center font-sub-footer gap-sm px-sm w-full'>  <p>© 2021 Adazolhub Inc.</p> • <a href="/">Privacy</a> • <a href="/">Terms</a> </footer>
           
            </div>
        </div>

        
        </>
    )
}

export default NavMenu
