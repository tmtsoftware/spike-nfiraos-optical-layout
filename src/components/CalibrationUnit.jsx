import React from "react";
import {Shutter} from "./Shutter";

export class CalibrationUnit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: true
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

                <svg x={"0"} y="200">
                    <defs>
                        /*ARROW END*/
                        <marker id="arrow"
                                markerWidth="4"
                                markerHeight="4"
                                refX={"0"}
                                refY={"2"}
                                orient={"auto"}
                                markerUnits={"strokeWidth"}>
                        <polygon points="0,0 0,4 4,2" fill="red" />
                        </marker>
                    </defs>
                    /*LIGHT*/
                    <line id={"light"}
                          x1="0"
                          x2= {this.state.open? "100" : "40"}
                          y1="50"
                          y2="50"
                          stroke="red"
                          strokeWidth="5"
                          markerEnd="url(#arrow)"
                    />
                </svg>


            </svg>

            <div>
                <button onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === true ? "Close" : "Open"}
                </button>
            </div>
        </div>
    }
}