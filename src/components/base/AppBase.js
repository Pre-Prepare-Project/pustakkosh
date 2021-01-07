import React, {Component} from 'react';
import AppHeader from "./header";
import AppFooter from "./footer";
import {Layout} from "antd";

const {Content} = Layout;

class AppBase extends Component {
    render() {
        return (
            <div>
                <AppHeader {...this.props}/>
                <Content
                    style={{
                        minHeight: `calc(100vh - 70px)`,
                    }}>
                    {this.props.children}
                </Content>
                <AppFooter/>
            </div>
        );
    }
}

export default AppBase;
