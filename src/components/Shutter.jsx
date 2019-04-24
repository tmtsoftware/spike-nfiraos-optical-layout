import React from "react";
import './Shuter.css'

export class Shutter extends React.Component {
    render() {
        const topOffSet = this.props.open === true ? 150 : 200;
        const bottomOffSet = this.props.open === true ? 300 : 250;
        return <svg x={"60"}>
            /*TOP SHUTTER*/
            <path id={"top-shutter"} d={`m1 ${topOffSet} v50`}
                  stroke="red"
                  strokeWidth="5"/>

            /*BOTTOM SHUTTER*/
            <path id={"bottom-shutter"} d={`m1 ${bottomOffSet} v50`}
                  stroke="red"
                  strokeWidth="5"/>
        </svg>
    }
}