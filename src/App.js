import React from 'react'; 
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing Pages
import Home from './pages/home.js';
import About from './pages/about.js';
import NotFound from './pages/404.js';
import AdminLogin from './pages/adminLogin.js';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/Login">
            <AdminLogin/>
          </Route>
          <Route path="*">
             <NotFound/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
