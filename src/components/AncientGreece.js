import React, { Component } from "react";

import Characters from "../components/Characters";

import '../styles/AncientGreece.scss';

class AncientGreece extends Component {
    render() {
        return (
            <div className="content">
                <div className="header">Ancient Greece</div>
                <div className="greece-map">
                </div>
                <Characters />
            </div>
        );
    }
}

export default AncientGreece;