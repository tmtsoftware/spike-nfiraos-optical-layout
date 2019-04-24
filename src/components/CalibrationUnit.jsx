import React from "react";
import {Shutter} from "./Shutter";
import {Light} from "./Light";

export class CalibrationUnit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        return <div>
            <svg viewBox="0 0 1024 600" width="1024" height="600">
                <Shutter open={this.state.open}/>

                /*CALIBRATION UNIT*/
                <svg x={"80"}>
                    <rect id={"calibration-unit"}
                          fill="#00feff"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="8.0"
                          strokeWidth="2"
                          x={"2"}
                          y={"2"}
                          width={"100"}
                          height={"500"}
                    />
                </svg>

                <Light blocked={!this.state.open} />
            </svg>

            <div>
                <button onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === true ? "Close" : "Open"}
                </button>
            </div>
        </div>
    }
}