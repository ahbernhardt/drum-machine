import React, { Component } from 'react';
import './App.css';
import sounds from './components/Sounds/Sounds';
import DrumPadHolder from './components/DrumPadHolder/DrumPadHolder';
import Key from './classes/Key';
import Controller from './components/Controller/Controller';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      kit: [],
      power: true,
      display: '',
      currentKit: 'kitOne',
      volume: 50,
    }

    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.updateKit = this.updateKit.bind(this);
    this.updatePower = this.updatePower.bind(this);

  }

  updateDisplay(text) {
    this.setState({
      display: text
    })
  }

  updateVolume(e) {
    if (this.state.power) {
      this.setState({
        volume: e.target.value
      })
      this.updateDisplay("Volume: " + e.target.value);
    }
  }

  updatePower(e) {
    this.setState({
      power: e.target.checked
    })
    let text = e.target.checked ? "On" : "Off";
    this.updateDisplay("Power: "+text);
    if (!e.target.checked) {
      setTimeout(() => this.updateDisplay(""), 1000);
    }
  }

  updateKit(e) {
    if (this.state.power) {
      let kit = !e.target.checked ? 'kitOne' : 'kitTwo';
      let text = !e.target.checked ? 'Heater Kit' : 'Smoth Piano Kit';
      this.setState({
        currentKit: kit
      })
      this.updateDisplay(text);
    }
  }

  getKit(kit) {

    let ret = [];
    sounds[kit].forEach(button => ret.push( new Key(button.code, button.name, button.text, button.url) ));
    return ret;

  }

  componentDidMount() {

    this.setState({
      kit: this.getKit(this.state.currentKit)
    })

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentKit !== this.state.currentKit) {
      this.setState({
        kit: this.getKit(this.state.currentKit)
      })
    }
  }


  render() {
    const { kit, display, volume, power, currentKit  } = this.state;
    return (
        <main >
          <h1 className="text-content">FCC: Drum Machine <span role="img" aria-label="control">  <span> </span>🎛️</span></h1>
          <div className="container">
              <Display display={display} />
              <DrumPadHolder
                kit={kit}
                updateDisplay={text => this.updateDisplay(text)}
                volume={volume}
                power={power}
              />
              <Controller
                volume={volume}
                power={power}
                kit={currentKit !== 'kitOne'}
                updateVolume={this.updateVolume}
                updatePower={this.updatePower}
                updateKit={this.updateKit}
              />
            </div>
          <Footer/>
        </main>
    );
  }
}

export default App;
