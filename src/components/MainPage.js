import React, { Component } from "react";

import  Cactus from "../svg/IconsSVG";
import '../styles/MainPage.scss';

class MainPage extends Component {
    render() {
        return (
            <div className="icon">
                <Cactus height="50px" width="50px" />
            </div>
        );
    }
}

export default MainPage;