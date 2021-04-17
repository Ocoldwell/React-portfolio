import {Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact/";
import Navigation from './containers/Navigation/Navigation';
import {createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
`
const App =()=> {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
        <Switch>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
    </div>
  );
}

export default App;
