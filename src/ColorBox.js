import React, { Component } from 'react'
import "./ColorBox.css";

export default class Colorbox extends Component {
    render() {
        return (
            <div className = "ColorBox" style = {{background: this.props.background}}>
                <span>{this.props.name}</span>
                <span> MORE</span>
            </div>
        )
    }
}
