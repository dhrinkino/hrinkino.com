import { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div className="min-h-screen">
            <div className="flex h-screen justify-center items-center flex-col">
                <div>
                    <p class="text-4xl font-bold">
                        Zaujal som ťa? Neváhaj ma kontaktovať
                    </p>
                </div>
                <div class="w-screen flex justify-center text-6xl space-x-9 > * + *">
                <a className="text-black hover:text-gray-600" href="mailto:admin@hrinkino.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a className="text-black hover:text-gray-600" href="https://github.com/dhrinkino">
                    <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                </div>
            </div>   
        </div>
         );
    }
}
 
export default Contact;