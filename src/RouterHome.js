import React, {Component} from 'react';
import RouteContext from "./RouteContext";
import {Switch, Route} from "react-router-dom";
import Error404 from "./components/common/errors/Error404";
import HomePage from "./components/modules/home";

class RouterHome extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <RouteContext.Provider value={this.props}>
                <Switch>
                    <Route exact path={"/"} render={(route) => <HomePage {...route}/>}/>
                    <Route exact path={"/home"} render={(route) => <HomePage {...route}/>}/>
                    <Route render={() => <Error404/>}/>
                </Switch>
            </RouteContext.Provider>
        );
    }
}

export default RouterHome;
