import React from 'react';

class Stopwatch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            running: false,
            watch:''
        }
    }

    print () {
        this.display.innerText = this.format(this.times);
    }

    format (times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    step () {
        if (!this.running) return;
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

    render () {
        return (
            <div className = "stopwatch" value={}>00</div>
        )
    }
}

export default Stopwatch;