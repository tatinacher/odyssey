import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import NotFound from "../components/NotFound";
import Gallery from "../components/Gallery";
import MainPage from "../components/MainPage";
import AncientGreece from "../components/AncientGreece";

class ContentView extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/photos" component={Gallery}/>
                <Route path="/ancient-greece" component={AncientGreece}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default ContentView;