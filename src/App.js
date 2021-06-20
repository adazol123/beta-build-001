import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { router as Route} from './pages/router'
import  Nav  from './components/Header/Nav';

// const Nav = lazy(() => import('./components/Header/Nav'))
const App = () => {
  
  return (
    <Router>
      <Suspense fallback={<h5 className="grid-center">Loading..</h5>}>
      </Suspense>
      <Nav/>
      <Route/>
    </Router>
  );
}

export default App;
