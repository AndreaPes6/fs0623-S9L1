import React, { Component } from "react";

class Button2 extends Component {
    render() {
        return (
            <button type="button" onClick={() => alert(`Io sono il button ${this.props.label}`)}>
                {this.props.label}
            </button>
        );
    }
}

export default Button2;