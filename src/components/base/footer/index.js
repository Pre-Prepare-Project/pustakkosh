import React, {Component} from 'react';
import {Layout} from "antd";

const {Footer} = Layout

class AppFooter extends Component {
    render() {
        return (
            <div>
                <Footer style={{textAlign: 'center'}}>PustKosh ©2021 Created by Plutonic Team</Footer>
            </div>
        );
    }
}

export default AppFooter;
