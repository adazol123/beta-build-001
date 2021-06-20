import React, { lazy, Suspense} from 'react'
import { Route, Switch } from 'react-router-dom'
import  PageNotFound  from './404'
// import { About } from './About'
// import { Components } from './Components'
import  Home  from './Home'

// const Home = lazy(() => import('./Home'))
const Components = lazy(() => import('./Components'))
const About = lazy(() => import('./About'))



export const router = () => {
    return (
        <Switch>
                <Route path='/' exact component={Home}/>
                <Suspense fallback={<h2 className='grid-center'>Loading</h2>}>
                <Route path='/components' exact component={Components}/>
                <Route path='/about' exact  component={About}/>
                </Suspense>
                <Route component={PageNotFound}/>
            </Switch>
    )
}
