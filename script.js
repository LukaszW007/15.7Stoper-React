// import React from 'react';

class Stopwatch extends React.Component {
    constructor (props, display) {
        super(props);
        this.state = {
            running: false,
            display: display,
        };
        this.reset();
        this.print(this.times);
    }

    reset () {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    print () {
        this.state.display.innerText = this.format(this.times);
    }

    format (times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    step () {
        if (!this.state.running) return;
        this.calculate();
        this.print();
    }

    calculate () {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    start () {
        if (!this.state.running) {
            this.state.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    stop () {
        this.state.running = false;
        clearInterval(this.watch);
    }

    resetWatch () {
        if (!this.state.running) {
            this.reset();
            this.print();
        }
    }

    save () {
        if (!this.state.running && (this.format(this.times) !== '00:00:00')) {
            const results = document.getElementById('results');
            const result = document.createElement('li');
            result.innerHTML = this.format(this.times);
            results.appendChild(result);
        }
    }

    resetResults () {
        document.getElementById('results').innerHTML = '';
    }

    render () {
        return (
            <nav className="controls">
                <a href="#" className="button" id="start" onClick={this.start}>Start</a>
                <a href="#" className="button" id="stop" onClick={this.stop}>Stop</a>
                <a href="#" className="button" id="save" onClick={this.save}>Save</a>
                <a href="#" className="button" id="reset" onClick={this.resetWatch}>Reset</a>
                <a href="#" className="button" id="reset-results" onClick={this.resetResults}>Clear results</a>
            </nav>
            <div className="stopwatch">4</div>
        <ul className="results" id="results"></ul>
        )
    }

}

function pad0 (value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = React.createElement(Stopwatch);
    ReactDOM.render(stopwatch,document.getElementById('app'));


/*
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

const saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => stopwatch.save());

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.resetWatch());

const resetResultsButton = document.getElementById('reset-results');
resetResultsButton.addEventListener('click', () => stopwatch.resetResults());*/
