import React from 'react'
import { Card } from '../components/Card/Card'
import { Link } from 'react-router-dom'
export const Home = () => {

    return (
        <div className='flex-center-column gap-sm'>
            <Link to='/components'>
            <img src="/git-logo-adazolhub-small.png" height='120px' alt="" />
            </Link>
            <h1 className='title'> Welcome!</h1>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
