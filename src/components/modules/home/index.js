import React, {Component} from 'react';
import AppBase from "../../base/AppBase";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Nitish sharma",
            email:"qwertyui@gh.com"
        }
    }

    render() {
        return (
            <AppBase username={this.state.name} email={this.state.email}>
                <h2>Home Page:-</h2>
            </AppBase>
        );
    }
}

export default HomePage;
