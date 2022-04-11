import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
        console.log("1 constructor");
    }

    tick = () => {
        console.log("tick");
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        console.log("3 componentDidMount");

        this.timerID = setInterval(() => this.tick(), 1000);
    }


    render() {
        return (
            <div>
                <center><h1>{this.state.time.toLocaleTimeString()}</h1></center>
            </div>
        );
    }
}

export default Clock;

