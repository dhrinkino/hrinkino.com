import { Component } from "react";
class AboutMe extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    componentDidMount(){

        this.loadProgressBar();
    }

    isdiv = false;
    loadProgressBar = () => {
        $(document).on('scroll', function() {
            if( $(this).scrollTop() >= $('#progress_trigger').position().top/2 ){
                if (!this.isdiv){            
                  this.isdiv = !this.isdiv;
                  $("#about_text").fadeIn();
                  const setProgressBar = (i,element) => {
                    setTimeout(function() {
                      $("#"+element).css({'width': i+'%'});
                  }, 30 * i);          
                }
      
                  for (let i=0; i<=100; i++) {
                    if (i <= 60){
                      setProgressBar(i,'react_progress');
                    }
                    if (i <= 80){
                      setProgressBar(i,'vue_progress');
                    }
                    if (i <= 100){
                      setProgressBar(i,'laravel_progress');
                    }
                    if (i <= 70){
                      setProgressBar(i,'python_progress');
                    }
                    if (i <= 60){
                      setProgressBar(i,'aws_progress');
                    }
                 }
      
      
                }
            }
        });

    }


    render() { 
        return ( <div id="about" className="min-h-screen bg-red-100">
        <div className="md:py-10 md:px-10 py-10">
          <div>
            <div className="grid md:grid-cols-2">
              <div className="md:py-5">
                <div className="flex justify-center md:justify-start">
                  <p className="text-4xl font-bold">Niečo o mne</p>
                </div>
                <p id="about_text" className="px-2 py-5 md:text-2xl text-md hidden">
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
                          <div id="react_progress" className="bg-teal-300 h-2.5 rounded-full w-0" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>VueJS</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div id="vue_progress" className="bg-green-600 h-2.5 rounded-full w-0" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>Laravel</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div id="laravel_progress" className="bg-red-600 h-2.5 rounded-full w-0" ></div>
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
                          <div id="python_progress" className="bg-blue-400 h-2.5 rounded-full w-0" ></div>
                        </div>
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <p>AWS</p>
                    <div className="pr-10 pl-10">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div id="aws_progress" className="bg-yellow-500 h-2.5 rounded-full w-0" ></div>
                        </div>
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
 
export default AboutMe;