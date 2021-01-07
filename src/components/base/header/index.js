import React, {Component} from 'react';
import {Layout, Menu, Drawer, Button, Avatar, Image} from "antd";
import {Link} from "react-router-dom";
import * as routes from '../../constants/RoutesData';
import {NotificationOutlined, MessageOutlined, MenuOutlined, BarsOutlined} from '@ant-design/icons';
import windowSize from 'react-window-size';

const {Header} = Layout;

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuOpen: false,
            isMobileMenu: false,
            signedInUserId: true,
            authUser: {},
            tab: 0,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.setState({
                isMobileMenu: this.props.windowWidth <= 768
            })

        }
    }

    toggleMobileMenuOpen = () => {
        let {mobileMenuOpen, isMobileMenu} = this.state
        if (!mobileMenuOpen) {
            if (isMobileMenu) {
                this.setState({
                    mobileMenuOpen: true
                })
            }
        } else {
            this.setState({
                mobileMenuOpen: false
            })
        }
    }
    renderNavLinks = () => {
        let {HOME, ACCOUNT, SIGN_IN, PROJECTS} = routes;
        let signedInUserId = this.state;
        if (signedInUserId) {
            return [
                <Menu.Item key={0}>
                    <Link
                        onClick={() => this.toggleMobileMenuOpen()}
                        to={HOME.route}
                    >
                        {HOME.link}
                    </Link>
                </Menu.Item>,
                <Menu.Item key={1}>
                    <Link
                        onClick={() => this.toggleMobileMenuOpen()}
                        to={`${ACCOUNT.route}/${signedInUserId}`}
                    >
                        {ACCOUNT.link}
                    </Link>
                </Menu.Item>,
                <Menu.Item key={2}>
                    <Link
                        onClick={() => this.toggleMobileMenuOpen()}
                        to={`${PROJECTS.route}/tvF7OMS1g9omqcdHNvpo`}
                    >
                        {PROJECTS.link}
                    </Link>
                </Menu.Item>,


            ]
        } else {
            return (
                <Menu.Item key={3}>
                    <Link to={SIGN_IN.route}>
                        <Button ghost>
                            {SIGN_IN.link}
                        </Button>
                    </Link>
                </Menu.Item>
            )
        }
    }

    renderUserLinks = () => {
        let {isMobileMenu, authUser} = this.state
        return (
            <Menu.Item
                style={{
                    float: 'right', display: 'flex',
                    justifyContent: "space-around",
                    alignItems: 'center', width: "180px"
                }}
            >
                <a>
                    <NotificationOutlined style={{fontSize: 20, color: 'white'}}/>
                </a>
                <a>
                    <MessageOutlined
                        style={{fontSize: 20, color: 'white'}}
                    />
                </a>
                {isMobileMenu ?
                    <Button type="primary" onClick={() =>
                        this.toggleMobileMenuOpen()}
                            size="large" style={{float: 'right'}}
                            icon={<MenuOutlined/>}

                    /> :
                    <Avatar
                        src={'https://nitish-sharma.in/img/userpic01.jpg'}
                    />
                }
            </Menu.Item>
        )
    }

    renderDesktopNavbar = () => {
        return this.renderNavLinks();
    }
    renderMobileNavbar = () => {
        let {authUser} = this.state
        return authUser ?
            <></> : this.renderNavLinks();
    }

    render() {
        let {isMobileMenu, authUser, tab, mobileMenuOpen} = this.state
        return (
            <div>
                <Drawer title='PustkKosh'
                        placement='left'
                        closable={false}
                        onClose={this.toggleMobileMenuOpen}
                        getContainer={false}
                        style={{position: 'absolute'}}
                        visible={!isMobileMenu?false:mobileMenuOpen}>
                    <Menu>{this.renderNavLinks()}</Menu>
                </Drawer>
                <Header style={{
                    position: 'fixed', zIndex: 1, width: '100%',
                    padding: isMobileMenu ? '0' : '0 10%'
                }}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '64px'}}
                        selectedKeys={[tab.toString()]}
                    >
                        {this.props.windowWidth >= 768 ?
                            this.renderDesktopNavbar() :
                            this.renderMobileNavbar()}
                        {authUser && this.renderUserLinks()}
                    </Menu>
                </Header>
            </div>
        );
    }
}

export default windowSize(AppHeader);
