import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact/";
import Navigation from "./containers/Navigation/Navigation";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
`;
const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <LandingPage/>
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
