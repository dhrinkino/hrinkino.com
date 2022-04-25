import axios from "axios";
import { Component } from "react";
import Header from  './Components/Header'
import AboutMe from './Components/AboutMe'
import Portfolio from "./Components/Portofilio";
class App extends Component {
  constructor(props) {
    super(props);
  }

  isdiv = null;

  componentDidMount() {

  }





  state = { events: [] }
  render() { 
    return ( 
    <div>
      <Header/>
      <AboutMe/>
      <Portfolio/>
    </div>
       );
  }
}
 
export default App;