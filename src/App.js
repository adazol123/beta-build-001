import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { router as Route} from './pages/router'
import  Nav  from './components/Header/Nav';

const PageNavigationListenerUtils = lazy(() => import('./utils/PageNavigationListener.utils'))


const App = () => {
  
  return (
    <Router>
      <Suspense  fallback={<h2 className='grid-center'>Loading</h2>}>
        <PageNavigationListenerUtils />
      </Suspense>
      <Nav/>
      <Route/>
    </Router>
  );
}

export default App;
