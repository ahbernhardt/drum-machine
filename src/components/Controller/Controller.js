import React, { Component } from 'react';
import './Controller.css'

class Controller extends Component {
    render() {
        return (
            <div className="switches-container">
                <div className="power-section">
                    <span className="switch-name">Power</span>
                    <label className="switch" for="power">
                        <input
                            type="checkbox"
                            id="power"
                            name="power"
                            checked={this.props.power}
                            onChange={this.props.updatePower}
                        />
                        <span className="switch-slider"/>
                    </label>
                </div>

                <div className="volume-section">
                    <span className="switch-name">Volume</span>
                    <input type="range" min="1" max="100"
                           value={this.props.volume}
                           className="slider" id="volume"
                           onChange={this.props.updateVolume} />
                </div>
                <div className="kit-section">
                <span className="switch-name">Kit</span>
                <label className="switch" for="kit">
                    <input
                        type="checkbox"
                        id="kit"
                        name="kit"
                        checked={this.props.kit}
                        onChange={this.props.updateKit} />
                    <span className="switch-slider"/>
                </label>
                </div>
            </div>
        );
    }
}

export default Controller;
