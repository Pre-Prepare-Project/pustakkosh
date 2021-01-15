import React, {Component} from 'react';
import AppBase from "../../base/AppBase";
import Promotion from "./promotion/Promotion";

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
                <Promotion/>
            </AppBase>
        );
    }
}

export default HomePage;
