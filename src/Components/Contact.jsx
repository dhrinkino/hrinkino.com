import { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
            <div className="min-h-screen bg-gray-200">
                <div className="flex h-screen justify-center items-center flex-col">
                    <div>
                        <p class="text-4xl font-bold">
                            Zaujal som ťa? Neváhaj ma kontaktovať 🤩
                        </p>
                    </div>
                    <div class="flex justify-center text-6xl space-x-9 > * + *">
                    <a className="text-black hover:text-gray-600" href="mailto:admin@hrinkino.com">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    <a className="text-black hover:text-gray-600" href="https://github.com/dhrinkino">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>   
            </div>

            <div class="flex flex-col justify-between">
                <div class="h-10 bg-gray-200 text-center text-sm text-gray-400">
                    <div>
                        Made by Dominik Hrinkino, licensed under MIT
                    </div>
                    <div>
                        Did you know this site is available on <a href="https://github.com/dhrinkino/hrinkino.com">github?</a>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Contact;