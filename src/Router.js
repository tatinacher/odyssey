import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import HeaderView from "./views/HeaderView.js";
import ContentView from "./views/ContentView.js";
import FooterView from "./views/FooterView.js";

import './styles/Router.scss';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <HeaderView />
                    <ContentView />
                    <FooterView />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;