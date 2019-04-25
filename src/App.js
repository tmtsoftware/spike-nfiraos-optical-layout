import React from 'react';
import './App.css';
import {CalibrationUnit} from "./components/CalibrationUnit";
import {Shutter} from "./components/Shutter";
import {Light} from "./components/Light";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={() => this.setState({open: !this.state.open})}>
                        {this.state.open === true ? "Close" : "Open"}
                    </button>
                </div>
                <svg viewBox="0 0 1024 600" width="1024" height="600">
                    <Shutter open={this.state.open}/>
                    <CalibrationUnit/>
                    <Light blocked={!this.state.open}/>
                </svg>
            </div>
        );
    }
}

export default App;
