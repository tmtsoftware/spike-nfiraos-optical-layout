import React from 'react';
import './App.css';
import {CalibrationUnit} from "./components/CalibrationUnit";
import {Shutter} from "./components/Shutter";
import {Light} from "./components/Light";
import {ControlPanel} from "./components/ControlPanel";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shutterOpen: false,
            instrumentCalibrationMirrorUp: true
        }
    }

    render() {
        return (
            <div className="App">
                <ControlPanel
                    instrumentCalibrationMirrorUp={this.state.instrumentCalibrationMirrorUp}
                    shutterOpen={this.state.shutterOpen}
                    shutterHandlerClicked={() => this.setState({shutterOpen: !this.state.shutterOpen})}
                    instrumentCalibrationMirrorHandlerClicked={() => this.setState({instrumentCalibrationMirrorUp: !this.state.instrumentCalibrationMirrorUp})}
                />
                <svg viewBox="0 0 1024 600" width="1024" height="600">
                    <Shutter open={this.state.shutterOpen}/>
                    <CalibrationUnit up={this.state.instrumentCalibrationMirrorUp}/>
                    <Light blocked={!this.state.shutterOpen}/>
                </svg>
            </div>
        );
    }
}

export default App;
