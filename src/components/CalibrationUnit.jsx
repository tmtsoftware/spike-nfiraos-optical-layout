import React from "react";
import {TextBox} from "./TextBox";

export class CalibrationUnit extends React.Component {

    render() {

        const width = 150;
        const strokeWidth = 2;
        const height = 500;

        return <svg x={"80"}>
            <rect id={"calibration-unit"}
                  fill="#00feff"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="8.0"
                  strokeWidth={strokeWidth}
                  x={"2"}
                  y={"2"}
                  width={width}
                  height={height}
            />

            <TextBox x={width * 0.1 + strokeWidth} y={height * 0.03} width={width * 0.8} height={height * 0.12}>
                NFIRAOS Science Calibration Unit
            </TextBox>

            <TextBox width={width * 0.8}
                     height= {height * 0.12}
                     y={height * 0.18}
                     x={width * 0.1 + strokeWidth}
                     color="white"
                     backgroundColor="#0433FF">
                NSCU arcs & flats
            </TextBox>

        </svg>
    }
}