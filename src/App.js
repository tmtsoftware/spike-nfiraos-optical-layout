import React from 'react';
import './App.css';
import {CalibrationUnit} from "./components/CalibrationUnit";
import {Shutter} from "./components/Shutter";
import {Light} from "./components/Light";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shutterOpen: false,
            instrumentCalibrationMirrorUp : true
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={() => this.setState({shutterOpen: !this.state.shutterOpen})}>
                        {this.state.shutterOpen === true ? "Close Shutter" : "Open Shutter"}
                    </button>
                    <button onClick={() => this.setState({instrumentCalibrationMirrorUp: !this.state.instrumentCalibrationMirrorUp})}>
                        {this.state.instrumentCalibrationMirrorUp === true ? "Move Instrument Calibration Mirror down" : "Move Instrument Calibration Mirror up"}
                    </button>
                </div>
                <svg viewBox="0 0 1024 600" width="1024" height="600">
                    <Shutter open={this.state.shutterOpen}/>
                    <CalibrationUnit up={this.state.instrumentCalibrationMirrorUp} />
                    <Light blocked={!this.state.shutterOpen}/>
                </svg>
            </div>
        );
    }
}

export default App;
