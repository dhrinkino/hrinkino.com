import axios from "axios";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
  }

  isdiv = null;

  componentDidMount() {
    $("#react_progress").css({'width': '0%'});
    $("#vue_progress").css({'width': '0%'});
    $("#laravel_progress").css({'width': '0%'});
    $("#python_progress").css({'width': '0%'});
    $("#aws_progress").css({'width': '0%'});

    $(document).on('scroll', function() {
      if( $(this).scrollTop() >= $('#progress_trigger').position().top/2 ){
          if (!this.isdiv){            
            this.isdiv = !this.isdiv;
            const setProgressBar = (i,element) => {
              setTimeout(function() {
                $("#"+element).css({'width': i+'%'});
            }, 30 * i);          
          }

            for (let i=0; i<=100; i++) {
              if (i < 60){
                setProgressBar(i,'react_progress');
              }
              if (i < 80){
                setProgressBar(i,'vue_progress');
              }
              if (i < 101){
                setProgressBar(i,'laravel_progress');
              }
              if (i < 70){
                setProgressBar(i,'python_progress');
              }
              if (i < 60){
                setProgressBar(i,'aws_progress');
              }
           }


          }
      }
  });

  }


  scrollToAbout = () => {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 2000);
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
            <div id="progress_trigger" className="py-4">
              <a onClick={this.scrollToAbout} id="move_to_down" className="text-6xl text-white drop-shadow-xl">
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
                          <div id="react_progress" className="bg-teal-300 h-2.5 rounded-full" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>VueJS</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div id="vue_progress" className="bg-green-600 h-2.5 rounded-full w-4/5" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>Laravel</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div id="laravel_progress" className="bg-red-600 h-2.5 rounded-full w-full" ></div>
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
                          <div id="python_progress" className="bg-blue-400 h-2.5 rounded-full w-2/3" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>AWS</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div id="aws_progress" className="bg-yellow-500 h-2.5 rounded-full w-1/3" ></div>
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
    </div>
       );
  }
}
 
export default App;