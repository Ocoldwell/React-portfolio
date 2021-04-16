import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact/";
import styles from './App.css';
import Navigation from './containers/Navigation/Navigation';

const App =()=> {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Switch>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
