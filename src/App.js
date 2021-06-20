import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { router as Route} from './pages/router'
import { Nav } from './components/Header/Nav';
import NavMenu from './components/Menu/NavMenu';

const App = () => {
  
  return (
    <Router>
      <Nav/>
      <Route/>

    </Router>
  );
}

export default App;
