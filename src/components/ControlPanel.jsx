import React from "react";
import PropTypes from "prop-types";
import './ControlPanel.css'

export const ControlPanel = (props) => {
    const {instrumentCalibrationMirrorUp, shutterOpen, shutterHandlerClicked, instrumentCalibrationMirrorHandlerClicked} = {...props};
    return <div id="control-panel">
        <div id="panel-header">
            Control Panel
        </div>
        <div id="panel-body">
            <button onClick={shutterHandlerClicked} className="panel-button">
                {shutterOpen === true ? "Close Shutter" : "Open Shutter"}
            </button>
            <button onClick={instrumentCalibrationMirrorHandlerClicked} className="panel-button">
                {instrumentCalibrationMirrorUp === true ? "Move Instrument Calibration Mirror down" : "Move Instrument Calibration Mirror up"}
            </button>
        </div>
    </div>
};

ControlPanel.propTypes = {
    instrumentCalibrationMirrorUp: PropTypes.bool.isRequired,
    shutterOpen: PropTypes.bool.isRequired,

    //FUNCTIONS
    shutterHandlerClicked: PropTypes.func,
    instrumentCalibrationMirrorHandlerClicked: PropTypes.func
};