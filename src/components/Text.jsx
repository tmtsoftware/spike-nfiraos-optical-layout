import React from "react";
import PropTypes from "prop-types";

export class Text extends React.Component{
    render() {
        const {x,y,width, height, children} = {...this.props}
        return <foreignObject x={x} y={y} width={width} height={height}>
            <div xmlns="http://www.w3.org/1999/xhtml" style={{textAlign:"center"}}>{children}</div>
        </foreignObject>
    }
}

Text.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired
};