import React, {lazy, Suspense} from 'react'
// import  Card  from '../components/Card/Card'
import { Link } from 'react-router-dom'

const Card = lazy(()=> import('../components/Card/Card'))

const Home = () => {

    return (
        <div className='flex-center-column gap-sm mx-lg home'>
            <div className="h-container w-full flex-center-column">

                <h3 className='title  font-xl'> Hello</h3>
                {/* <p className='my-md color-gray-400'>Adazolhub is an imaginary business company of the creator of this website </p> */}
                <p className="text "> Do more of what makes you happy  </p>
            </div>




            <Suspense fallback={<h2 className='grid-center'>Loading</h2>}>
            <Card >
                <h4  style={{color : 'var(--color-gray-700)'}}>Progressive Web Apps 🤪</h4>
                <p className='color-gray-500 my-md font-default'>An application software delivered through web, built using common web technologies including HTML, CSS and JavaScript.  </p>
                <Link className='color-gray-400 logo'to={{ pathname:'/components',state: { fromDashboard: true }}} > <button className='button-solid-md px-lg font-micro'>Docs</button></Link>
                
            </Card>
            

            <Card >
                <h4 style={{color : 'var(--color-gray-700)'}}>SEO Friendly 😍</h4>
                <p className='color-gray-500 my-md font-default'>100% optimized for search engine results ranking based on Lighthouse
                   </p>
                   <Link className='color-gray-400 logo'to={{ pathname:'/about',state: { fromDashboard: true }}} > <button className='button-ghost-md px-lg font-micro'>Docs</button></Link>
                
            </Card>
            <Card >
                <h4 style={{color : 'var(--color-gray-700)'}}>PWA Optimized 📲 </h4>
                <p className='color-gray-500 my-md font-default'>Fully optimized and ready to install on any devices by clicking the menu bar on your web browser then selecting Install App options
                   </p>
                   <Link className='color-gray-400 logo'to={{ pathname:'/about',state: { fromDashboard: true }}} ><button  className='button-outline-md px-lg font-micro'>Docs</button></Link>

                
            </Card>
            <Card >
                <h4 style={{color : 'var(--color-gray-700)'}}>API Routes 🐶</h4>
                <p className='color-gray-500 my-md font-default'>Optionally create API endpoints to provide backend functionality.
                   </p>
                   <Link className='color-gray-400 logo'to={{ pathname:'/about',state: { fromDashboard: true }}} ><button className='button-solid-md px-lg font-micro'>Docs</button></Link>
                   
            </Card>
            </Suspense>
        </div>
    )
}

export default Home
