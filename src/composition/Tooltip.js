import React, { Component } from "react";
import "./Tooltip.css";

/*function Tooltip(props) {
  return (
    <span className="Tooltip">
      <span className="Tooltip-content" style={{ color: props.color }}>
        {props.children}
      </span>
      <div className="Tooltip-message">{props.message}</div>
    </span>
  );
}*/

class Tooltip extends Component {
  static defaultProps = {
    color: "#01A800"
  };
  render() {
    return (
      <span className="Tooltip">
        <span className="Tooltip-content" style={{ color: this.props.color }}>
          {this.props.children}
        </span>
        <div className="Tooltip-message">{this.props.message}</div>
      </span>
    );
  }
}

export default Tooltip;

/* ======== Default Props ======= (#1) */
//Removed the following line from Tooltip css that make the Tooltip green by default
/*
.Tooltip-content {
  color: #01a800;
}
*/
//We're changing the original function component into a class component in order to use defaultProps
//We're swapping our props for this.props because we're using a class component instead of a function
//Then create static defaultProps for color - so a default color will be used in the event that the parent doesn't supply one

//Function vs Component:
//Function component = props are a parameter
//Class component = props aren't a parameter anymore - we need to access props using this.props

//Rule for defaultProps:
//create a defaultProps property for the class with static defaultProps
//and then assign an object to that property
//keys of that object are the props you want to have as defaults
//values are the default values you want to assign
//defaultProp will be used if no equivalent is supplied
