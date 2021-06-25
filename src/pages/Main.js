import React, {lazy, Suspense} from 'react'
// import  Card  from '../components/Card/Card'
// import { Link } from 'react-router-dom'
// import { penta } from '../components/asset-icons'


// const Card = lazy(()=> import('../components/Card/Card'))
const HomeSection = lazy(() => import('../components/Section/HomeSection'))
const TechStackSection = lazy(() => import('../components/Section/TechStackSection'))

const Home = () => {

    
    return (
            <>
        <section className="hero-section">
            <h2>Experience Matters</h2>
            <p>Our <span>Experience</span> is our Great Asset</p>
            <a href="#content" className='next-arrow icon-line-long'> </a>
        </section>
        <Suspense  fallback={<h2 className='grid-center'>Loading</h2>}>
            <HomeSection/>
            <TechStackSection/>
        </Suspense>
        </>
    )
}

export default Home
