import React, { Component } from 'react';
import './Controller.css'

class Controller extends Component {
    render() {
        return (
            <div className="switches-container">
                <div className="power-section">
                    <span className="switch-name">Power</span>
                    <input
                        type="checkbox"
                        id="power-switch"
                        className="switch-checkbox"
                        checked={this.props.power}
                        onChange={this.props.updatePower}
                    />
                    <label className="switch-label-power" htmlFor="power-switch">
                        <span className="switch-button-power"/>
                    </label>
                </div>

                <div className="volume-section">
                    <span className="switch-name">Volume</span>
                    <div className="slider-container">
                        <input type="range" min="1" max="100"
                               value={this.props.volume}
                               className="volume-slider" id="volume"
                               onChange={this.props.updateVolume} />
                    </div>
                </div>

                <div className="kit-section">
                <span className="switch-name">Kit</span>
                    <input
                        type="checkbox"
                        id="kit-switch"
                        className="switch-checkbox"
                        checked={this.props.kit}
                        onChange={this.props.updateKit}
                    />
                    <label className="switch-label-kit" htmlFor="kit-switch">
                        <span className="switch-button-kit"/>
                    </label>
                </div>
            </div>
        );
    }
}

export default Controller;
