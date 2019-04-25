import React from "react";
import PropTypes from "prop-types";

export class Light extends React.Component{
    render(){
        return <svg x={"0"} y="200">
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
                  className={this.props.blocked? "blocked" : "unblocked"}
                  x1="0"
                  x2= {this.props.blocked? "40" : "100"}
                  y1="50"
                  y2="50"
                  stroke="red"
                  strokeWidth="5"
                  markerEnd="url(#arrow)"
            />
        </svg>
    }
}

Light.propTypes = {
    blocked : PropTypes.bool.isRequired
};