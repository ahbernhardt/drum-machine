import React, { Component } from 'react';
import './Display.css'
class Display extends Component {
    render() {
        return (
            <div id="display" className="display-panel">
                <span className="text">{this.props.display}</span>
            </div>
        );
    }
}

export default Display;
