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
            <div className="py-4">
              <a href="#about" className="text-6xl text-white drop-shadow-xl">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </a>
            </div>
          </div>        
      </div>
      <div id="about" className="min-h-screen bg-red-100">
        <div className="md:py-10 md:px-10 py-10">
          <div>
            <div className="grid md:grid-cols-2">
              <div className="md:py-5">
                <div className="flex justify-center md:justify-start">
                  <p className="text-4xl font-bold">Niečo o mne</p>
                </div>
                <p className="px-2 py-5 md:text-2xl text-md">
                  Ahojte 👋, v prvom rade by som vám povedal zopár vecí o mne, volám sa Dominik Hrinkino. Študent 🧑‍🎓 programátor 💻 sieťar 🌐 a mnoho viacej.
                  Moja vášeň sú internetové, webové technológie a hlavne komponentové programovanie. 
                  Webami sa zaoberám už od roku 2010, a každý rok je vždy nová technologická výzva, lebo najdôležitejšie je udržovať technologické trendy, a neprespať nové príležitosti.
                  S týmto je spojená moja záľuba v riešení komplexných problémov 🤔 ktoré aj mnoho dní mi nedajú spávať. Ale pocit vyriešenia ma vždy posúva o krok ďalej 🤩. 
                </p>
              </div>
              <div className="md:py-5">
                <div className="flex justify-center md:justify-start">
                  <p className="text-4xl font-bold">Moje Skills</p>
                </div>
                <div className="px-2 py-5 md:text-2xl text-xl">
                  <p className="font-bold">Web Development</p>
                  <div className="px-5 py-5">
                    <p>React</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-teal-300 h-2.5 rounded-full w-2/3" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>VueJS</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-green-600 h-2.5 rounded-full w-4/5" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>Laravel</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-red-600 h-2.5 rounded-full w-full" ></div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 py-5 md:text-2xl text-xl">
                  <p className="font-bold">DevOps</p>
                  <div className="px-5 py-5">
                    <p>Python</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-blue-400 h-2.5 rounded-full w-2/3" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>AWS</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-yellow-500 h-2.5 rounded-full w-1/3" ></div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="min-h-screen bg-green-400">
        <div className="py-5 px-5">
          <p className="text-4xl">Portfólio</p>
        </div>
        <div className="px-10 py-3">
          <div className="grid md:grid-cols-2 ">
            <div className="md:pl-5 md:pr-5 min-h-screen">
              <div className="bg-white h-40 w-full rounded-xl p-2 shadow-md border-b-4 border-gray-100">
                  <h1 className="text-2xl flex justify-center">Canteen UCeMka</h1>
                  <p></p>
              </div>
            </div>
            <div>jejda 2</div>
          </div>
        </div>
      </div>
    </div>
       );
  }
}
 
export default App;