import axios from "axios";
import { Component } from "react";
import Header from  './Components/Header'
import AboutMe from './Components/AboutMe'
import Portfolio from "./Components/Portofilio";
import Contact from "./Components/Contact";
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }



  state = { events: [] }
  render() { 
    return ( 
    <div>
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
       );
  }
}
 
export default App;