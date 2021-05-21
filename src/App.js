//import sections, err page, routes
import About from './components/pages/About/About';import Contact from './components/pages/Contact/Contact';
import Portfolio from './components/pages/Portfolio/Portfolio';import Resume from './components/pages/Resume/Resume';
import ErrorPage from './components/shared/ErrorPage/ErrorPage';
import Footer from './components/shared/Footer/Footer';import Navbar from './components/shared/Navbar/Navbar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
//router functions
function App() { return ( <Router>
      <Navbar /> <Switch>
 <Route path="/about" component={About} />   <Route path="/portfolio" component={Portfolio} />
<Route path="/contact" component={Contact} />      <Route path="/resume" component={Resume} />

        <Route exact path="/">   <Redirect to="/about" /> </Route>
        <Route path="*" component={ErrorPage} />

      </Switch>      <Footer />    </Router> );}
//export App
export default App;
