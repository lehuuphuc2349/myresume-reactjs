import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
function App() {
  return (
        <>
          <Router>
            <Navbar/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' exact component={About}/>
              <Route path='/resume' exact component={Resume}/>
              <Route path='/contact' exact component={Contact}/>
            </Switch>
          </Router>   
        </> 
  );
}

export default App;
