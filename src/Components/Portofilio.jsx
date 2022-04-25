import { Component } from "react";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="min-h-screen bg-green-400">
            <div className="py-5 px-5">
              <p className="text-4xl text-white drop-shadow-md font-bold">Portfólio</p>
            </div>
            <div className="px-10 py-3">
              <div className="grid md:grid-cols-2 ">
                <div className="md:pl-5 md:pr-5 py-5">
                  <div className="bg-white w-full rounded-xl p-2 shadow-md border-b-4 border-gray-100">
                      <h1 className="text-2xl flex justify-center font-bold">Canteen UCeMka</h1>
                      <p className="text-center">
                        Aplikácia pre sledovanie jedálneho lístka, pomocou ktorej si môžete sledovať aktuálny jedálny lístok v reštaurácií top-relax.
                      </p>
                      <div className="py-2 flex justify-center text-md md:text-2xl font-bold space-x-1 > * + *">
                            <p>
                              <a className="text-blue-600 hover:text-black" href="https://canteen.ucemka.sk">🌍 Web</a></p>
                            <p>
                              <a className="text-blue-600 hover:text-black" href="https://canteen.ucemka.sk/mobile">📱 Mobilná Aplikácia</a>
                            </p>
                      </div>
                  </div>
                </div>
                <div>
                <div className="md:pl-5 md:pr-5 py-5">
                  <div className="bg-white w-full rounded-xl p-2 shadow-md border-b-4 border-gray-100 ">
                      <h1 className="text-2xl flex justify-center font-bold">BugTrac.io</h1>
                      <p className="text-center flex justify-center text-xl">
                        Jednoduchá aplikácia na spravovanie ticketov v systéme.<br></br>
                      </p>
                      <div className="py-5 flex justify-center text-md md:text-2xl font-bold space-x-1 > * + *">
                            <p>
                              <a className="text-blue-600 hover:text-black" href="https://github.com/Semicol-Dev/bugtracker"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></p>
                      </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2">
              <div className="md:pl-5 md:pr-5 py-5 md:py-0">
                    <div className="bg-white w-full rounded-xl p-2 shadow-md border-b-4 border-gray-100 ">
                        <h1 className="text-2xl flex justify-center font-bold">Network Monitor</h1>
                        <p className="text-center flex justify-center text-xl">
                          Projekt v Pythone, skladajúci sa so servera a sondy, pomocou ktorej dokážeme testovať rýchlosť internetovej linky<br></br>
                        </p>
                        <div className="py-5 flex justify-center text-md md:text-2xl font-bold space-x-1 > * + *">
                              <p>
                                <a className="text-blue-600 hover:text-black" href="https://github.com/dhrinkino/Network-Monitor"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></p>
                        </div>
                    </div>
                  </div>
                <div>
                  <div className="md:pl-5 md:pr-5 py-5 md:py-0">
                    <div className="bg-white w-full rounded-xl p-2 shadow-md border-b-4 border-gray-100 ">
                        <h1 className="text-2xl flex justify-center font-bold">Discord Rich Plex Presence</h1>
                        <p className="text-center flex justify-center text-xl">
                          Malá utilita pre OS Windows, ktorá zoberie údaj aký film sledujeme cez Plex, a pomocou DiscordRPC nám túto informáciu zobrazí pri profile.<br></br>
                        </p>
                        <div className="py-5 flex justify-center text-md md:text-2xl font-bold space-x-1 > * + *">
                              <p>
                                <a className="text-blue-600 hover:text-black" href="https://github.com/dhrinkino/PlexRichPresence"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         );
    }
}
 

export default Portfolio;