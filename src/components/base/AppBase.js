import React, {Component} from 'react';
import AppHeader from "./header";
import AppFooter from "./footer";

class AppBase extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                {this.props.children}
                <AppFooter/>
            </div>
        );
    }
}

export default AppBase;
