import React, {Component} from 'react';
import AppBase from "../../base/AppBase";
import Promotion from "./promotion/Promotion";
import Process from "./process/Process";
import BookCount from "./bookcount/BookCount";

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
                <Process/>
                <BookCount/>
            </AppBase>
        );
    }
}

export default HomePage;
