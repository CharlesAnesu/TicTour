import React, { Component } from 'react';
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
           <Header />
           <Route exact path = "/" component={Home}/>
           <Route path="/About" component={About} />
           <Route path="/Contact" component={Contact} />

        </div>

      </Router>
    )
  }
}

export default App;


