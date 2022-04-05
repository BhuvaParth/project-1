import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 5,
            cityname: 'Surat'
        }
    }
    
    changecityname = () => {
        this.setState ({
            cityname: 'Rajkot'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.cityname}
                 <button onClick={() => this.changecityname()}> Change City </button>
            </div>
        );
    }
}

export default City;
