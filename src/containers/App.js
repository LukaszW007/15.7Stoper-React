import React from 'react';
import Stopwatch from '../components/Stopwatch';
import Resultlist from '../components/ResultsList';


class App extends React.Component{
    constructor (props){
        super(props);
        this.state={
            watch:''
        }
    }
    render(){
        return(
            <div className="container">
               <Stopwatch className={stopwatch}/>
                <Resultlist className={}/>
                <nav className="controls">
                    <a className="button" id="start">Start</a>
                    <a className="button" id="stop">Stop</a>
                    <a className="button" id="save">Save</a>
                    <a className="button" id="reset">Reset</a>
                    <a className="button" id="reset-results">Clear results</a>
                </nav>
            </div>
        )
    }
}