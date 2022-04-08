import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div>
                <>
                   {
                        this.props.name === 'Gujrat' ? 'surat' :
                        this.props.name === 'Rajasthan' ? 'jaypur' : ''
                   }
                </>
            </div>
        );
    }
}

export default City;
