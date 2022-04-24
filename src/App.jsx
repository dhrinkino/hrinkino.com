import axios from "axios";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
  }

  state = { events: [] }

  render() { 
    return ( 
    <div>
      <div className="min-h-screen w-full h-screen bg-gradient-to-r from-green-300 via-cyan-400   to-blue-600">
          <div className="flex h-screen justify-center items-center flex-col">
            <div>
              <p className="text-5xl font-bold text-white drop-shadow">Dominik Hrinkino</p>
            </div>
            <div>
              <p className="text-xl text-white drop-shadow">FullStack Developer, DevOps,  SysAdmin</p>
            </div>
            
          </div>        
      </div>
      <div className="min-h-screen bg-red-100">
        <div className="py-5 px-5">
          <div>

            <p className="text-4xl">Niečo o mne</p>
            <div className="grid md:grid-cols-2">
              <div>1</div>
              <div>2</div>
            </div>

          </div>
        </div>
      </div>
      <div className="min-h-screen bg-green-400">
        <div className="py-5 px-5">
          <p className="text-4xl">O mne</p>
        </div>
      </div>
    </div>
       );
  }
}
 
export default App;