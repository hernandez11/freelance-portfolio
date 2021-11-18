import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.js';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LatestWork from './Pages/LatestWork';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <div>
            <Navbar />

            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/latest-work'>
              <LatestWork />
            </Route>
          </div>
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
