import React, { Component } from 'react';
import City from './City';

class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateName: 'Gujrat'
        }
    }

    change = () => {
        this.setState({
            stateName:'Rajasthan'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.stateName}
                <button onClick={() => this.change ()}>Change State</button>
                <City  name = {this.state.stateName} />
            </div>
        );
    }
}

export default State;
