import { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    
    scrollToAbout = () => {
        $('html, body').animate({
          scrollTop: $("#about").offset().top
        }, 2000);
      }

    render() { 
        return (

    <div className="min-h-screen w-full h-screen bg-gradient-to-r from-green-300 via-cyan-400   to-blue-600">
      <div className="flex h-screen justify-center items-center flex-col">
        <div>
          <p className="text-5xl font-bold text-white drop-shadow">Dominik Hrinkino</p>
        </div>
        <div>
          <p className="text-xl text-white drop-shadow">FullStack Developer, DevOps,  SysAdmin</p>
        </div>
        <div id="progress_trigger" className="py-4">
          <a onClick={this.scrollToAbout} id="move_to_down" className="text-6xl text-white drop-shadow-xl">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>        
    </div>
          );
    }
}
 
export default Header;